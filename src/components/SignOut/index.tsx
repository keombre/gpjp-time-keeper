import React from 'react';

import { withFirebase } from '../Firebase';
import { FirebaseProps } from '../Firebase/context';

const SignOutButton = (props: FirebaseProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { firebase, ...innerProps } = props
  return (
    <div {...innerProps} onClick={firebase.doSignOut}>
      Sign Out
    </div>
  )
}

export default withFirebase(SignOutButton);
