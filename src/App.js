import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Link, withRouter } from 'react-router-dom';
import Routes from './config/Route';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
 		this.state = {
			isAuthenticated: false,
			isAuthenticating: true
		};
	}

 	async componentDidMount() {
		try {
			if (await Auth.currentSession()) {
				this.userHasAuthenticated(true);
			}
		} catch (e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}
 		this.setState({ isAuthenticating: false });
	}

 	userHasAuthenticated = authenticated => {
		this.setState({ isAuthenticated: authenticated });
	};

 	handleLogout = async event => {
		await Auth.signOut();
 		this.userHasAuthenticated(false);
		this.props.history.push('/');
	};

  handleOpen(e, id){
    document.getElementsByClassName('wrapper')[0].classList.add('active');
    document.getElementById(id).classList.remove('modalClose');
  }

  handleClose(e, id){
    document.getElementsByClassName('wrapper')[0].classList.remove('active');
    document.getElementById(id).classList.add('modalClose');
  }
  render() {

    const {isAuthenticated} = this.state;
    const childProps = {
			isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      handleClose: this.handleClose,
      handleOpen: this.handleOpen
		};
    return (
      <div>
        <div className="wrapper">
          <div id="overlay"/>
          <nav className="nav">
            <a href="#">Test</a>
            { isAuthenticated && <ul><li><Link onClick={this.handleLogout}  to="/">Log Out</Link></li></ul>}
          </nav>
          <Routes childProps={childProps} />
        </div>
        <footer className="footer">
          <span>&copy; BigUncleYemi</span>
        </footer>
        <SignIn handleClose={this.handleClose} userHasAuthenticated={this.userHasAuthenticated} props={this.props} />
        <SignUp handleClose={this.handleClose} userHasAuthenticated={this.userHasAuthenticated} props={this.props} />
      </div>
    );
  }
}

export default withRouter(App);
