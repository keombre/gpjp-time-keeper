import React, { ChangeEvent, Component, FormEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { FirebaseProps } from '../Firebase/context';

interface SignInFormState {
    email: string,
    password: string,
    error: any
}

class SignInFormBase extends Component<FirebaseProps & RouteComponentProps, SignInFormState> {

    readonly InitialState : SignInFormState = {
        email: '',
        password: '',
        error: null
    }

    constructor(props: FirebaseProps & RouteComponentProps) {
        super(props);

        this.state = { ...this.InitialState };
    }

    onSubmit = (event: FormEvent<HTMLFormElement>) => {
        const { email, password } = this.state;

        this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({ ...this.InitialState });
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
            this.setState({ error });
        });

        event.preventDefault();
    };

    onChange = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case "email":
                this.setState({"email": event.target.value })
                break
            case "password":
                this.setState({"password": event.target.value })
                break
            case "error":
                this.setState({"error": event.target.value })
                break
        }
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
        <form onSubmit={this.onSubmit}>
            <input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
            />
            <input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
            />
            <button disabled={isInvalid} type="submit">
                Sign In
            </button>

            {error && <p>{error.message}</p>}
        </form>
        );
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export { SignInForm };
