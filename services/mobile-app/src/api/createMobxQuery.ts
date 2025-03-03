// createMobxQuery.ts
import { makeAutoObservable, runInAction } from 'mobx'
import { 
  QueryClient, 
  QueryObserver, 
  QueryObserverOptions, 
  QueryObserverResult 
} from '@tanstack/react-query'
import { queryClient } from '../core/QueryLayer'

/**
 * Creates a MobX-wrapped query object that you can store in a MobX class.
 * It stays in sync with the TanStack Query state (data, loading, error, etc.).
 */
export function createMobxQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData
>(
  options: QueryObserverOptions<TQueryFnData, TError, TData>
) {
  // Create a new QueryObserver for the given options
  const observer = new QueryObserver<TQueryFnData, TError, TData>(
    queryClient,
    options
  )

  // A small MobX-friendly class to mirror the observer's state
  class MobxQuery {
    data?: TData
    isLoading = false
    isError = false
    error?: TError | null

    // Keep reference to the observer so we can refetch or unsubscribe
    private observer = observer
    private unsubscribe: (() => void) | undefined

    constructor() {
      makeAutoObservable(this)

      // Subscribe to changes from the observer
      this.unsubscribe = this.observer.subscribe((result: QueryObserverResult<TData, TError>) => {
        runInAction(() => {
          this.data = result.data
          this.isLoading = result.isLoading
          this.isError = result.isError
          this.error = result.error
        })
      })
    }

    // Provide a refetch method
    refetch() {
      return this.observer.refetch()
    }

    // If you ever need to dispose of this query subscription (e.g. on store cleanup)
    dispose() {
      this.unsubscribe?.()
      this.observer.destroy()
    }
  }

  // Instantiate and return
  return new MobxQuery()
}
