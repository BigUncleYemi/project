import React from 'react';

class Index extends React.Component {
	render() {
		return (
			<div>
				<div id="intro">
					<h1>Welcome</h1>
					<p>login to view my Profile</p>
					<ul className="icon">
						<li onClick={e => this.props.handleOpen(e, 'bg')} id="login"><a>LogIn</a></li>
						<li onClick={e => this.props.handleOpen(e, 'bb')} id="signup"><a>SignUp</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Index;