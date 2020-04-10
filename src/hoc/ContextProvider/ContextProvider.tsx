import * as React from 'react';
import UserContextProvider from '../../context/UserContext/UserContextProvider';

interface IContextProviderProps {
  children: React.ReactNode;
}

// Bündelt alle Context-Provider in einer Komponente
const ContextProvider: React.SFC<IContextProviderProps> = props => (
  <UserContextProvider>
    {props.children}
  </UserContextProvider>
);

export default ContextProvider;
