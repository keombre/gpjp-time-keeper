import React from 'react';
import { SidePanel } from '../Layout';
 
import { SignUpLink } from '../SignUp';
import { SignInForm } from './SignInForm';
 
const SignInPage = () => (
    <SidePanel>
            <h3 style={{marginBottom: "25px"}}>Sign In</h3>
            <SignInForm />
        <SignUpLink />
    </SidePanel>
);

export default SignInPage;

export { SignInForm };
