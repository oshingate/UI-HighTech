import React from 'react';

interface IuserContextInitialState {
  token: string | null;
  loggedUser: string | null;
  isUserLogged: boolean;
}
const userContextInitialState = {
  token: '',
  loggedUser: '',
  isUserLogged: false
};

let UserContext = React.createContext<IuserContextInitialState>(
  userContextInitialState
);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
