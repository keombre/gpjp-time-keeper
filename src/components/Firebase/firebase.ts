import app from 'firebase/app'

const config = {
    "apiKey": "AIzaSyDZXTgLQghD_2Ma06YDN6XloO0R0wfaHKQ",
    "appId": "1:374312266275:web:e5fcdeb625b6c1c5b1df96",
    "authDomain": "gpjp-time-keeper.firebaseapp.com",
    "databaseURL": "https://gpjp-time-keeper.firebaseio.com",
    "messagingSenderId": "374312266275",
    "projectId": "gpjp-time-keeper",
    "storageBucket": "gpjp-time-keeper.appspot.com"
};

export default class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}
