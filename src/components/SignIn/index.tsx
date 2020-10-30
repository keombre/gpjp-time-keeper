import { Card, Elevation, H3 } from '@blueprintjs/core';
import React from 'react';
import { SidePanel } from '../Layout';
 
import { SignUpLink } from '../SignUp';
import { SignInForm } from './SignInForm';
 
const SignInPage = () => (
    <SidePanel>
        <Card elevation={Elevation.TWO}>
            <H3 style={{marginBottom: "25px"}}>Sign In</H3>
            <SignInForm />
        <SignUpLink />
        </Card>
    </SidePanel>
);

export default SignInPage;

export { SignInForm };
