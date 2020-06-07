
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"; 

const credentials = require('./credentials.json')

export const setup = () => {
    firebase.initializeApp(credentials)

    //return instances if needed
    console.log("firebase initialized")
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