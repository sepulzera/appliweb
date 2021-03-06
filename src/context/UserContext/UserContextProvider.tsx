import * as React from 'react';

import { AnyComponent } from '../../types/Types';

import UserContext from './UserContext';
import UserRecord from './UserRecord';
import UserData from './UserData.json';

/** {@link UserContextProvider} Props. */
interface IUserContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createUserFromJson(input: any) {
  return new UserRecord(input.id,
      input.forname, input.lastname,
      input.jobtitle, input.avatar);
}

function getUserMap() {
  const map: Map<number, UserRecord> = new Map();
  let index, nextUser;
  for (index = 0; index < UserData.users.length; ++index) {
    nextUser = createUserFromJson(UserData.users[index]);
    map.set(nextUser.id, nextUser);
  }
  return map;
}

/**
 * {@link UserContext} Provider.
 *
 * @param props - {@link IUserContextProviderProps}.
 */
const UserContextProvider: React.FC<IUserContextProviderProps> = (props: IUserContextProviderProps) => {
  const [data] = React.useState(getUserMap());

  const getUser = (id: number): UserRecord | undefined => {
    const user: UserRecord | undefined = data.get(id);
    return user;
  };

  return (
    <UserContext.Provider value={{
      data: data,
      getUser: getUser,
    }}>
      {props.children}
    </UserContext.Provider>
   );
};

export default UserContextProvider;
