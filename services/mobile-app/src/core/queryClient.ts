import { QueryClient } from '@tanstack/react-query'

/**
 * Configure the QueryClient with default options
 * This client manages all the queries and mutations across the app
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Default settings for all queries
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: import.meta.env.PROD, // Only in production
    },
    mutations: {
      // Default settings for all mutations
      retry: 1,
    },
  },
})

/**
 * Helper function to create a query key factory for a domain
 * This helps with type safety and consistency in query keys
 */
export const createQueryKeys = <T extends Record<string, unknown>>(domain: string) => {
  return {
    all: [domain] as const,
    lists: () => [...createQueryKeys(domain).all, 'list'] as const,
    list: (filters: T) => [...createQueryKeys(domain).lists(), { filters }] as const,
    details: () => [...createQueryKeys(domain).all, 'detail'] as const,
    detail: (id: string | number) => [...createQueryKeys(domain).details(), id] as const,
  }
} 