import { createContext, useContext, ReactNode, useMemo } from 'react';


export function createStoreContext<T>(createStoreFn: () => T) {
  const StoreContext = createContext<T | null>(null);

  const Provider = ({ children }: { children: ReactNode }) => {
    const store = useMemo(() => createStoreFn(), []);

    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  };

  const use = (): T => {
    const context = useContext(StoreContext);
    if (!context) {
      throw new Error('useStore must be used within a Provider');
    }
    return context;
  };

  return {
    Provider,
    use,
  };
}
