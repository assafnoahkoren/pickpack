import { 
	MutationObserver, 
	MutationObserverOptions, 
	MutationObserverResult,
	QueryClient
  } from '@tanstack/react-query'
  import { makeAutoObservable, runInAction } from 'mobx'
import { queryClient } from '../core/QueryLayer'
  
  export function createMobxMutation<
	TData = unknown,
	TError = unknown,
	TVariables = void,
	TContext = unknown
  >(
	options: MutationObserverOptions<TData, TError, TVariables, TContext>
  ) {
	const observer = new MutationObserver<TData, TError, TVariables, TContext>(
	  queryClient,
	  options
	)
  
	class MobxMutation {
	  data?: TData
	  isLoading = false
	  isError = false
	  error?: TError | null
	  isSuccess = false
  
	  private observer = observer
	  private unsubscribe: (() => void) | undefined
  
	  constructor() {
		makeAutoObservable(this)
		this.unsubscribe = this.observer.subscribe(
		  (result: MutationObserverResult<TData, TError, TVariables, TContext>) => {
			runInAction(() => {
			  this.data = result.data
			  this.isLoading = result.isPending
			  this.isError = result.isError
			  this.error = result.error
			  this.isSuccess = result.isSuccess
			})
		  }
		)
	  }
  
	  mutate(variables: TVariables) {
		return this.observer.mutate(variables)
	  }
  
	  dispose() {
		this.unsubscribe?.()
	  }
	}
  
	return new MobxMutation()
  }