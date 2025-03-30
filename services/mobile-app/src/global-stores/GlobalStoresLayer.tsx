import { ReactNode } from 'react';
import { authContext } from './auth-store';
import { userContext } from './user-store';

export function GlobalStoresLayer({ children }: { children: ReactNode }) {
  return (
    <authContext.Provider>
      <userContext.Provider>
      	{children}
      </userContext.Provider>
    </authContext.Provider>
  );
}
