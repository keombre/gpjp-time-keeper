import React from 'react';
import { FirebaseProps, FirebaseUser, withFirebase } from '../Firebase';
import AuthUserContext from './context';

interface AuthenticationState {
    authUser: FirebaseUser
}

const withAuthentication = <P, C extends React.ComponentType<P>>(Comp: C & React.ComponentType<P>) => {
    class WithAuthentication extends React.Component<P & FirebaseProps, AuthenticationState> {
        listener: any

        constructor(props: P & FirebaseProps) {
            super(props);

            this.state = {
                authUser: null,
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged((authUser: FirebaseUser) => {
                authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: null });
            })
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            const {firebase, ...props} = this.props
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Comp {...(props as any)} />
                </AuthUserContext.Provider>
            )
        }
    }

    return withFirebase(WithAuthentication);
}

export default withAuthentication;
