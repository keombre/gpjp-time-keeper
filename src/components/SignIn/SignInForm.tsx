import React, { ChangeEvent, Component, FormEvent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { FirebaseProps } from '../Firebase/context';
import { Form } from 'semantic-ui-react';

interface SignInFormState {
    email: string,
    password: string,
    error: any
}

class SignInFormBase extends Component<FirebaseProps & RouteComponentProps, SignInFormState> {

    readonly InitialState: SignInFormState = {
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
                this.setState({ "email": event.target.value })
                break
            case "password":
                this.setState({ "password": event.target.value })
                break
            case "error":
                this.setState({ "error": event.target.value })
                break
        }
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Input label="Email" type="email" onChange={this.onChange} name="email" value={email} />
                <Form.Input label="Password" type="password" onChange={this.onChange} name="password" value={password} />

                <Form.Button disabled={isInvalid}>Sign In</Form.Button>

                {error && <p>{error.message}</p>}
            </Form>
        );
    }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export { SignInForm };
