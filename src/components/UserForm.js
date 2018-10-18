import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Segment, Message, Button } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: true
    };
  }
  toggleForm() {
    const login = this.state.loginForm;
    this.setState({ loginForm: !login });
  }

  render() {
    const { loginForm } = this.state;
    return (
      <div className="fade-in page page-primary">
        <Segment className="centered-form" raised>
          {loginForm ? (
            <div className="fade-in">
              <LoginForm pushable={true} />
              <Message size="mini" info>
                <Message.Header>No account?</Message.Header>
                <p>
                  Then you probably might want to{' '}
                  <Button
                    basic
                    color="green"
                    compact
                    onClick={() => this.toggleForm()}
                    size="mini"
                  >
                    Sign Up!
                  </Button>
                </p>
              </Message>
            </div>
          ) : (
            <div>
              <SignUpForm pushable={true} />
              <Message size="mini" info>
                <Message.Header>Got an account already?</Message.Header>
                <p>
                  Then why don't you try to{' '}
                  <Button
                    basic
                    color="blue"
                    compact
                    onClick={() => this.toggleForm()}
                    size="mini"
                  >
                    Login!
                  </Button>
                </p>
              </Message>
            </div>
          )}
        </Segment>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  null
)(UserForm);
