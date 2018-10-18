import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="intro">
          <h1>Oyebanji Olayemi</h1>
          <p>FrontEnd Web&nbsp;•&nbsp;Hybrid App&nbsp;•&nbsp;i do js</p>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/olayemi-o-38b2858b/" className="fa fa-linkedin"
                    aria-hidden="true"></a></li>
            <li><a href="https://www.github.com/BigUncleYemi" className="fa fa-github "></a></li>
            <li><a href="mailto:olayemioyebanji911@gmail.com" className="fa fa-envelope-o" aria-hidden="true"></a></li>
            <li><a href="skype:natheainel-banji?call" className="fa fa-skype "></a></li>
            <li><a href="https://twitter.com/OlayemiOyebanji" className="fa fa-twitter"></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;