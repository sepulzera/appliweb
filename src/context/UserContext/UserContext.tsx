import React from 'react';
import UserRecord from './UserRecord';

interface IUserContextProvider {
  data: Map<number, UserRecord>;
  getUser: (id: number) => UserRecord | undefined;
}

const UserContext = React.createContext<IUserContextProvider | null>(null);

export default UserContext;
