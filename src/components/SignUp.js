  import React from 'react';
  import { Auth } from 'aws-amplify';  

  export default class SignUp extends React.Component {
    constructor(props) {
    super(props);
     this.state = {
      isLoading: false,
      email: '',
      password: '',
      username: '',
      confirmationCode: '',
      newUser: null
    };
  }

  validateForm() {
		return (
			this.state.email.length > 0 && this.state.password.length > 0
		);
	}

   validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

   handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

   handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    try {
      const { username, email, password } = this.state;
      const newUser = await Auth.signUp({ username, password, attributes:{email} });
      this.setState({ newUser });
    } catch (e) {
      alert(e.message);
    }
    this.setState({ isLoading: false });
  };

   handleConfirmationSubmit = async event => {
    event.preventDefault();
     this.setState({ isLoading: true });
     try {
      const { username, confirmationCode, password } = this.state;
			await Auth.confirmSignUp(username, confirmationCode);
			await Auth.signIn(username, password);
       this.props.userHasAuthenticated(true);
       this.props.handleClose(event, 'bb')
			this.props.props.history.push('/Home');
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  render() {

    const { newUser, isLoading } = this.state;

    return (
      <div id="bb" className="modalClose bg">
        <button onClick={e => this.props.handleClose(e, 'bb')}><i className="fa fa-times" /></button>
        <div className="nam">
          <h3>Sign Up</h3>
        </div>
        { newUser !== null ? (
          <form onSubmit={e => this.handleConfirmationSubmit(e)}>
            <div>
              <label htmlFor="confirmationCode">Enter confirmation code sent to your mail</label>
              <input type="num" name="confirmationCode" id="confirmationCode"  onChange={this.handleChange} />
            </div>
            <div>
              <input type="submit" disabled={!this.validateConfirmationForm} value={ !isLoading ? "Confirm Email" : "Confirming Account..."} />
            </div>
          </form>
        ) : (
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="Email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="Username" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="Password" onChange={this.handleChange} />
          </div>
          <div>
            <input type="submit" disabled={!this.validateForm} value={ !isLoading ? "Signup" : "Creating Account..."} />
          </div>
        </form>
        )}
      </div> 
    );
  }
}
