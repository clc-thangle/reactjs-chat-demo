import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAgtif1mWQKvkIoBdzZzLqi87h-CtA-p7Y",
    authDomain: "webchat-149ce.firebaseapp.com",
    databaseURL: "https://webchat-149ce.firebaseio.com",
    projectId: "webchat-149ce",
    storageBucket: "webchat-149ce.appspot.com",
    messagingSenderId: "639833445805",
    appId: "1:639833445805:web:54acf9d7b0b3f3b8abfd24",
    measurementId: "G-3CBSCWLW43"
}
firebase.initializeApp(config)
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export const myFirebase = firebase
export const myFirestore = firebase.firestore()
export const myStorage = firebase.storage()