import { createContext } from 'react';
import UserRecord from './UserRecord';

export interface IUserContext {
  data: Map<number, UserRecord>;
  getUser: (id: number) => UserRecord | undefined;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export default UserContext;
