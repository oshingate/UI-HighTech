import './style/App.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Footer from './common/shared/footer/Footer';
import Header from './common/shared/header/Header';
import { USER_URL } from './common/utils/constants';
import { UserProvider } from './common/utils/UserContext';
import AuthDashboard from './components/authorized/AuthDashboard';
import Login from './components/unauthorized/Login';
import Signup from './components/unauthorized/Signup';
import UnauthDashboard from './components/unauthorized/UnauthDashboard';

interface UnAuthorizedProps {}

const UnAuthorized: React.FC<UnAuthorizedProps> = () => {
  return (
    <Switch>
      <Route path="/" element={UnauthDashboard} />
      <Route path="/signup" element={Signup} />
      <Route path="/login" element={Login} />
    </Switch>
  );
};

interface AuthorizedProps {}

const Authorized: React.FC<AuthorizedProps> = () => {
  return (
    <>
      {' '}
      <Route path="/">
        <AuthDashboard />
      </Route>
    </>
  );
};

interface AppState {
  token: string | null;
  loggedUser: any | null;
  isUserLogged: boolean;
}

interface AppProps {}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: '', loggedUser: null, isUserLogged: false };
  }

  componentDidMount() {
    let token = localStorage.getItem('hta_auth_token');

    if (token) {
      fetch(USER_URL, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((loggedUser) => {
          this.setState(() => {
            return {
              token: localStorage.token,
              loggedUser: loggedUser.user,
              isUserLogged: true,
            };
          });
        });
    }
  }

  // updateLoggedUser = (data) => {
  //   localStorage.setItem('hta_auth_token', data.token);

  //   this.setState({ token: data.token, loggedUser: data.user });
  // };

  logoutUser = (history: any) => {
    localStorage.setItem('hta_auth_token', '');

    this.setState({ token: null, loggedUser: null });
    history.push('/');
  };

  render() {
    let data = {
      token: this.state.token,
      loggedUser: this.state.loggedUser,
      isUserLogged: this.state.isUserLogged,
    };

    return (
      <UserProvider value={data}>
        <Header
          isUserLogged={this.state.isUserLogged}
          loggedUser={this.state.loggedUser}
          logoutUser={this.logoutUser}
        />
        {this.state.isUserLogged ? <Authorized /> : <UnAuthorized />}
        <Footer />
      </UserProvider>
    );
  }
}

export default App;
