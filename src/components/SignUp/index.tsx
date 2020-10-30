import { Card, Elevation, H3 } from '@blueprintjs/core';
import React from 'react';
import { SidePanel } from '../Layout';
import { SignUpForm, SignUpLink } from './SignUpForm';

const SignUpPage = () => (
    <SidePanel>
        <Card elevation={Elevation.TWO}>
            <H3 style={{marginBottom: "25px"}}>Sign-Up</H3>
            <SignUpForm />
        </Card>
    </SidePanel>
);

export default SignUpPage;

export {SignUpLink};
