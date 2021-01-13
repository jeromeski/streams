import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client: auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '2946359390-rinjpg5cehs94vb3hn243j1r5esr0h4n.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          // Get a reference to the 'auth' object after it is initialized
          this.auth = window.gapi.auth2.getAuthInstance();
          // Figure out if the user is currently signed in
          this.onAuthChange(this.auth.isSignedIn.get());
          // event listener method - invoked everytime listener status change
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut(this.auth.currentUser.get().getId());
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  // Print their authentication status on the screen
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui red google button'>
          <i className='google icon'></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui red google button'>
          <i className='google icon'></i>
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);

/* 
gapi - google api
--> multipurpose Google API library
--> use it to interact with Oauth flow
--> use it to work with all different types of google services

#JSCONSOLE
gapi
1. load --> literally means load up some internal library by making a follow up request over to Google Servers and fetching up some additional JS code. 
gapi.load('client:auth2)
2. After we load up that additional library we can then register or initialize it with our Oauth clientID
gapi.client.init({clientId: 'clientid'})

*/
