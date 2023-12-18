import React, { Component } from 'react';
import Details from './Details';
import Question from './Question';
import { v4 as uuidv4 } from 'uuid';
import firebase from 'firebase/compat/app';
// import "firebase/storage";
// import { initializeApp } from "firebase/app";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyDFBEb998JOQWErUH5hqN-cShyduDd_J6s",
//     authDomain: "mk-survey-7f690.firebaseapp.com",
//     databaseURL: "https://mk-survey-7f690-default-rtdb.firebaseio.com",
//     projectId: "mk-survey-7f690",
//     storageBucket: "mk-survey-7f690.appspot.com",
//     messagingSenderId: "1076599276626",
//     appId: "1:1076599276626:web:5c0e0882bc2e01623f0b8b"
// };
// const app = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// };

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// const db = app.firestore;
// const auth = app.auth;
// const storage = firebase.storage;

// export { auth, db, storage };


class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: uuidv4(),
            name: null,
            email: null,
            questions: {
                q1: null,
                q2: null,
                q3: null,
                other: null,
            },
            isSubmitted: false,
        };
    }

    detailsSubmitHandler = (event) => {
        const name = event.target.name.value;
        const email = event.target.email.value;
        this.setState({ name, email }, () => console.log(this.state));
        event.preventDefault();
    };

    questionSubmitHandler = (event) => {
        const questions = {};
        questions.q1 = event.target.q1.value;
        questions.q2 = event.target.q2.value;
        questions.q3 = event.target.q3.value;
        questions.other = event.target.other.value;
        const isSubmitted = true;
        this.setState({ questions, isSubmitted }, () => console.log(this.state));
        event.preventDefault();
        // const database = firebase.database();
        // const db = firebaseApp.firestore();
        // const auth = firebase.auth();
        // database.ref('survey/' + this.state.id).set({
        //     name: this.state.name,
        //     email: this.state.email,
        //     questions: this.state.questions,
        // });
    };

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="container card mt-2">
                        <h1 className="text-center text-primary">Mk Tech Survey</h1>
                    </div>
                </div>
                {this.state.isSubmitted ? (
                    <div className='card'>
                        <h1>Thank You</h1>
                    </div>)
                    :
                    this.state.name === null && this.state.email === null ?
                        (<Details submit={this.detailsSubmitHandler} />)
                        :
                        (<Question submit={this.questionSubmitHandler} />)}
            </>
        );
    }
}

export default Container;
