import React, { ChangeEvent, Component, FormEvent } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

import * as ROUTES from '../../constants/routes'
import { FirebaseProps, withFirebase } from '../Firebase/context'

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
    }

    constructor(props: FirebaseProps & RouteComponentProps) {
        super(props)

        this.state = { ...this.InitialState }
    }

    onSubmit(event: FormEvent<HTMLFormElement>) {
        const { email, passwordOne } = this.state

        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(() => {
            this.setState({ ...this.InitialState })
            this.props.history.push(ROUTES.HOME)
        })
        .catch(error => {
            this.setState({ error })
        })

        event.preventDefault()
    }

    onChange(event: ChangeEvent<HTMLInputElement>) {
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
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === ''

        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Input label="Username" type="text" onChange={this.onChange} name="username" value={username} />
                <Form.Input label="Email" type="email" onChange={this.onChange} name="email" value={email} />
                <Form.Input label="Password" type="password" onChange={this.onChange} name="passwordOne" value={passwordOne} />
                <Form.Input label="Password again" type="password" onChange={this.onChange} name="passwordTwo" value={passwordTwo} />

                <Form.Button disabled={isInvalid}>Submit</Form.Button>

                {error && <p>{error.message}</p>}
            </Form>
        )
    }
}

const SignUpLink = () => (
    <p>
        Don&apos;t have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
)

const SignUpForm = withRouter(withFirebase(SignUpFormBase))

export { SignUpForm, SignUpLink }
