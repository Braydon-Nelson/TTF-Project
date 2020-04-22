import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';




const config = {
    apiKey: "AIzaSyDC4LoweP9CcC23KuJI7CDmcl9ry07GogI",
    authDomain: "ttfproject-a7097.firebaseapp.com",
    databaseURL: 'https://ttfproject-a7097.firebaseio.com',
    projectId: 'ttfproject-a7097',
    storageBucket: 'ttfproject-a7097.appspot.com',
    messagingSenderId: '951492667742',

};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();

    }

    // auth API

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();


    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);


    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}



export default Firebase;