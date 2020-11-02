import React from 'react';
import { SidePanel } from '../Layout';
import { SignUpForm, SignUpLink } from './SignUpForm';

const SignUpPage = () => (
    <SidePanel>
        <h3 style={{ marginBottom: "25px" }}>Sign-Up</h3>
        <SignUpForm />
    </SidePanel>
);

export default SignUpPage;

export { SignUpLink };
