import React, { ChangeEvent, Component, FormEvent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { FirebaseProps, withFirebase } from '../Firebase/context';

interface SignUpFormState {
    username: string,
    email: string,
    passwordOne: string,
    passwordTwo: string,
    error: any,
}

class SignUpFormBase extends Component<FirebaseProps & RouteComponentProps, SignUpFormState> {

    readonly InitialState : SignUpFormState = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null,
    };

    constructor(props: FirebaseProps & RouteComponentProps) {
        super(props);

        this.state = { ...this.InitialState };
    }

    onSubmit = (event: FormEvent<HTMLFormElement>) => {
        const { email, passwordOne } = this.state;

        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(() => {
            this.setState({ ...this.InitialState });
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
            this.setState({ error });
        });

        event.preventDefault();
    }

    onChange = (event: ChangeEvent<HTMLInputElement>) => {
        switch (event.target.name) {
            case "username":
                this.setState({"username": event.target.value })
                break
            case "email":
                this.setState({"email": event.target.value })
                break
            case "passwordOne":
                this.setState({"passwordOne": event.target.value })
                break
            case "passwordTwo":
                this.setState({"passwordTwo": event.target.value })
                break
            case "error":
                this.setState({"error": event.target.value })
                break
        }
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase))

export { SignUpForm, SignUpLink };
