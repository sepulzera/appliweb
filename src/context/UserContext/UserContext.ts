import * as React from 'react';

export class UserContextValue {
  constructor(
    forname: string,
    lastname: string
  ) {
      this.forname = forname;
      this.lastname = lastname;
  }

  forname: string;
  lastname: string;
}

const UserContext = React.createContext(new UserContextValue('', ''));

export default UserContext;
