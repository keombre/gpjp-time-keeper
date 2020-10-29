import React from 'react';
import Firebase from './firebase';

const FirebaseContext = React.createContext<Firebase | null>(null);

interface FirebaseProps {
    firebase: Firebase
}

const withFirebase = <P, C extends React.ComponentType<P>>(Comp: C & React.ComponentType<P>) => (props: any) => (
    <FirebaseContext.Consumer>
        {firebase => <Comp {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;

export { withFirebase }

export type { FirebaseProps }
