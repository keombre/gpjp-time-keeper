import React from 'react';
import { FirebaseUser } from '../Firebase';

const AuthUserContext = React.createContext<FirebaseUser | null>(null);

export default AuthUserContext;
