
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"; 

const credentials = require('./credentials.json')

//init firebase and firestore
export const setup = () => {
    firebase.initializeApp(credentials)

    //return instances if needed
    console.log("firebase initialized")

    // var firestore = firebase.firestore();
    // const submitBtn = document.querySelector('#Submit');
    // let userName=document.querySelector('#userFullName');

    // const db = firestore.collection("jobsData");
    // submitBtn.addEventListener('click', function(){
    //         let userNameInput = userName.value;


    //         db.doc().set({
    //             name: userNameInput;

    //         })
    // })


}

export const authenticateUser = (email, password) => {
    const UsersRef = `Users/${email}/`

    return firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log("auth complete")
        return true
    }).catch((rej) => {
        console.log("ERROR: ", rej)
        return false
    })
}

export const createUser = async(email, password, payload) => {
    //validation check here
    
    const UsersRef = "Users/"
    return await firebase.auth().createUserWithEmailAndPassword(email, password).then(async(res) => {

        
        const newKey = firebase.database().ref(UsersRef).push().key
        console.log("auth success")
        return await postData(`${UsersRef}/${newKey}`, payload)
        
    }).catch((rej) => {
        return false
    })

}
export const getData = (url) => {

    firebase.database().ref(url).once('value').then((snapshot) => {
        if(snapshot){
            return snapshot.val()
        }
        
    })
}


export const postData = (url, data) => {

    return firebase.database().ref(url).update(data)
    .then((res) => {
        console.log("postDATA SUCCESS")
        return true
    })
    .catch((rej) => {
        console.log("postData FAIL: ", rej)
        return false
    })
}

export const removeData = (url) => {

    firebase.database().ref(url).remove(() => console.log("removeData: SUCCESSFUL"))
}
