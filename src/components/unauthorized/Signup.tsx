import * as React from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {}

const Signup: React.FC<IProps> = () => {
  const history = useHistory();
  const [errors] = React.useState({
    email: '',
    username: '',
    password: '',
  });
  // const [data] = React.useState({
  //   email: '',
  //   username: '',
  //   password: '',
  // });

  const handleUserRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // let data = {
    //   email: event.target.email.value,
    //   username: event.target.username.value,
    //   password: event.target.password.value,
    // };

    // fetch(Register_URL, {
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
    //   .then((userData) => {
    //     this.setState({
    //       data: {
    //         email: '',
    //         username: '',
    //         password: '',
    //         errors: {
    //           email: null,
    //           username: null,
    //           password: null,
    //         },
    //       },
    //     });
    //     this.props.history.push('/users/login');
    //   })
    //   .catch((errors) => {
    //     this.setState((prevState) => {
    //       return {
    //         ...prevState,
    //         data: {
    //           errors: errors,
    //         },
    //       };
    //     });
    //   });
  };

  const handleSignUpError = (target: HTMLInputElement, field: string) => {
    // switch (field) {
    //   case 'email':
    //     if (target.value.length < 8 || !target.value.includes('@')) {
    //       this.setState({
    //         data: {
    //           errors: {
    //             email: 'Email must be 8 char long and include @ symbol',
    //           },
    //         },
    //       });
    //     } else {
    //       this.setState({
    //         data: {
    //           errors: {
    //             email: null,
    //           },
    //         },
    //       });
    //     }
    //     break;
    //   case 'username':
    //     if (target.value.length < 5) {
    //       this.setState({
    //         data: {
    //           errors: {
    //             username: 'username must be 5 char long ',
    //           },
    //         },
    //       });
    //     } else {
    //       this.setState({
    //         data: {
    //           errors: {
    //             username: null,
    //           },
    //         },
    //       });
    //     }
    //     break;
    //   case 'password':
    //     if (target.value.length < 8) {
    //       this.setState({
    //         data: {
    //           errors: {
    //             password: 'Password must be 8 char long ',
    //           },
    //         },
    //       });
    //     } else {
    //       this.setState({
    //         data: {
    //           errors: {
    //             password: null,
    //           },
    //         },
    //       });
    //     }
    //     break;
    //   default:
    //     break;
    // }
  };

  return (
    <section className="login-sec">
      <h2 className="sec-heading">Sign-Up Page</h2>
      <div className="container ">
        <form
          onSubmit={(event) => {
            handleUserRegistration(event);
          }}
        >
          <fieldset>
            <label>Enter Email *</label>
            <input
              type="email"
              name="email"
              id="loginEmail"
              onChange={(event) => {
                handleSignUpError(event.target, 'email');
              }}
            />
            <span>{errors.email}</span>
          </fieldset>

          <fieldset>
            <label>Enter Username *</label>
            <input
              type="text"
              name="username"
              id="loginUsername"
              onChange={(event) => {
                handleSignUpError(event.target, 'username');
              }}
            />
            <span> {errors.username}</span>
          </fieldset>

          <fieldset>
            <label>Enter Password *</label>
            <input
              type="text"
              name="password"
              id="loginPassword"
              onChange={(event) => {
                handleSignUpError(event.target, 'password');
              }}
            />
            <span> {errors.password}</span>
          </fieldset>
          <fieldset className="flex center">
            <button type="submit" className="btn btn-pri">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Signup;
