import firebase from "./fireConfig";


export default function SocialMediaAuth(provider) {
    return (
        firebase.auth().signInWithPopup(provider).then((res) => {
            return res.user;
        }).catch((err) => {
            return err;
        })
    )
}