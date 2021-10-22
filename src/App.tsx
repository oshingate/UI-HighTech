import React from 'react';
import { Route, Switch } from 'react-router';
import AuthDashboard from './components/authorized/AuthDashboard';
import Footer from './components/common components/Footer';
import Header from './components/common components/Header';
import Login from './components/unauthorized/Login';
import Signup from './components/unauthorized/Signup';
import UnauthDashboard from './components/unauthorized/UnauthDashboard';
import './style/App.css';
import { User_URL } from './utils/constants';
import { UserProvider } from './utils/UserContext';

interface AppProps {}

interface AppState {
  token: string | null;
  loggedUser: any | null;
  isUserLogged: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { token: '', loggedUser: null, isUserLogged: false };
  }

  componentDidMount() {
    let token = localStorage.getItem('hta_auth_token');

    if (token)
      fetch(User_URL, {
        method: 'GET',
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((loggedUser) => {
          this.setState((prevState) => {
            return {
              token: localStorage.token,
              loggedUser: loggedUser.user,
              isUserLogged: true,
            };
          });
        });
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

interface UnAuthorizedProps {}

const UnAuthorized: React.FC<UnAuthorizedProps> = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <UnauthDashboard />
      </Route>
      <Route path='/signup' exact>
        <Signup />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
    </Switch>
  );
};

interface AuthorizedProps {}

const Authorized: React.FC<AuthorizedProps> = () => {
  return (
    <>
      {' '}
      <Route path='/'>
        <AuthDashboard />
      </Route>
    </>
  );
};

export default App;
