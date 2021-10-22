import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

interface IProps {}

const Login: React.FC<IProps & RouteComponentProps> = (props) => {
  const [errors, seterrors] = React.useState({
    email: '',
    password: '',
  });
  const [data, setdata] = React.useState({ email: '', password: '' });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    event.preventDefault();
    setdata((prevState) => {
      return {
        ...prevState,
        [field]: event.target.value,
      };
    });
  };

  const handleLoginUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // let data = {
    //   email: event.target.email.value,

    //   password: event.target.password.value,
    // };

    // fetch(Login_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       return res.json().then((errors) => {
    //         return Promise.reject(errors);
    //       });
    //     }
    //     return res.json();
    //   })
    //   .then((user) => {
    //     this.props.updateLoggedUser(user);
    //     this.props.history.push('/');
    //   })
    //   .catch((errors) => {
    //     this.setState((prevState) => {
    //       return {
    //         ...prevState,
    //         errors: errors,
    //       };
    //     });
    //   });
  };

  return (
    <section className='login-sec'>
      <div className='container '>
        <form onSubmit={(event) => handleLoginUser(event)}>
          <h2 className='sec-heading'>Login Page</h2>
          <fieldset>
            <label>Enter Email</label>
            <input
              type='email'
              name='email'
              id='loginEmail'
              value={data.email}
              onChange={(event) => {
                handleChange(event, 'email');
              }}
            />
            <span>{errors.email}</span>
          </fieldset>
          <fieldset>
            <label>Enter Password</label>
            <input
              type='password'
              name='password'
              id='loginPassword'
              value={data.password}
              onChange={(event) => {
                handleChange(event, 'password');
              }}
            />
            <span>{errors.password}</span>
          </fieldset>
          <fieldset className='flex center'>
            <button type='submit' className='btn btn-pri'>
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default withRouter(Login);
