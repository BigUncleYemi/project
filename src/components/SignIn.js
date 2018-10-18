import React from 'react';
import { Auth } from 'aws-amplify';
import '../App.css';
class SignIn extends React.Component {
  constructor(props) {
		super(props);
 		this.state = {
      isLoading: false,
			username: '',
			password: ''
		};
	}

 	validateForm() {
		return this.state.username.length > 0 && this.state.password.length > 0;
	}

 	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};
	
  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
 		try {
      const { username, password } = this.state;
      console.log(username)
			await Auth.signIn( username, password);
      this.props.userHasAuthenticated(true);
      this.props.handleClose(event, 'bg')
			this.props.props.history.push('/Home');
		} catch (e) {
      alert(e.message)
			this.setState({ isLoading: false });
		}
  };

  render() {

    const { isLoading } = this.state;

    return (
      <div id="bg" className="modalClose bg">
        <button onClick={e => this.props.handleClose(e, 'bg')}><i className="fa fa-times"/></button>
        <div className="nam">
          <h3>Sign In</h3>
        </div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="text" name="username" id="username" onChange={this.handleChange}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"  onChange={this.handleChange}/>
          </div>
          <div>
            <input type="submit" disabled={!this.validateForm} value={ !isLoading ? "Login" : "Logging..." }/>
          </div>
        </form>
      </div>
    );
  }

}

export default SignIn;
