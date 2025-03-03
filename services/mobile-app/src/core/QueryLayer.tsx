import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
});

interface QueryLayerProps {
	children: React.ReactNode
}

export const QueryLayer = ({ children }: QueryLayerProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}
