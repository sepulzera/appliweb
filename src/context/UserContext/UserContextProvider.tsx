import * as React from 'react';
import UserContext, { UserContextValue } from './UserContext';
import { withRouter, RouterProps } from 'react-router';

export interface IUserContextProviderProps extends RouterProps {
  chirldren?: React.ReactNode;
}

const UserContextProvider: React.SFC<IUserContextProviderProps> = props => {
  const UserContextDefaultValue = new UserContextValue(
    'Frank',
    'Hartung'
  );

  return (
    <UserContext.Provider value={UserContextDefaultValue}>
      {props.children}
    </UserContext.Provider>
   );
};

export default withRouter(UserContextProvider);
