import React from 'react';

import { withFirebase } from '../Firebase';
import { FirebaseProps } from '../Firebase/context';

const SignOutButton = (props: FirebaseProps) => (
  <button type="button" onClick={props.firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
