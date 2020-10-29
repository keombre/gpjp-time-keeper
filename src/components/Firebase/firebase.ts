import app from 'firebase/app'
import 'firebase/auth'

const config = {
    "apiKey": "AIzaSyDZXTgLQghD_2Ma06YDN6XloO0R0wfaHKQ",
    "appId": "1:374312266275:web:e5fcdeb625b6c1c5b1df96",
    "authDomain": "gpjp-time-keeper.firebaseapp.com",
    "databaseURL": "https://gpjp-time-keeper.firebaseio.com",
    "messagingSenderId": "374312266275",
    "projectId": "gpjp-time-keeper",
    "storageBucket": "gpjp-time-keeper.appspot.com"
}

class Firebase {
    auth: app.auth.Auth;

    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
    }

    doCreateUserWithEmailAndPassword = (email: string, password: string) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email:string, password:string) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () =>
        this.auth.signOut();

    doPasswordReset = (email: string) =>
        this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = (password: string) =>
        this.auth.currentUser?.updatePassword(password);
}

export default Firebase
