import { ReactNode } from 'react';
import { authContext } from './auth-store';

export function GlobalStoresLayer({ children }: { children: ReactNode }) {
  return (
    <authContext.Provider>
      {children}
    </authContext.Provider>
  );
}
