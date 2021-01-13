import React, { Component } from 'react';

class GoogleAuth extends Component {
  state = { isSignedIn: null };
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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn().get() });
  };

  // Print their authentication status on the screen
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know if we are signedin</div>;
    } else if (this.state.isSignedIn) {
      return <div>Im signedin!</div>;
    } else {
      return <div>Im not signedin</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

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
