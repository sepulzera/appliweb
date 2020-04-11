import * as React from 'react';

import UserContext from './UserContext';
import UserRecord from './UserRecord';
import UserData from './UserData.json';

interface IUserContextProviderProps {
  chirldren?: React.ReactNode;
}

function createUserFromJson(input: any) {
  return new UserRecord(input.id,
      input.forname, input.lastname,
      input.jobtitle);
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

const UserContextProvider: React.FC<IUserContextProviderProps> = props => {
  const [data] = React.useState(getUserMap());

  const getUser = (id: number) => {
    const user = data.get(id);
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
