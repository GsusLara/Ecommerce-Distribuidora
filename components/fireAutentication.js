import firebase from "./fireConfig";


export default function SocialMediaAuth(provider) {
    return (
        firebase.auth().signInWithPopup(provider).then((res) => {
            const {bc}=res.user;
            const {displayName,email,photoURL}=bc;
            return {userName:displayName,
                    userEmail:email,
                    userPhoto:photoURL}; 
        }).catch((err) => {
            return err;
        })
    )
}