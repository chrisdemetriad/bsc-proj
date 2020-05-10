import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import 'firebase/firestore';
const SuccessAds = (props) => {
    const [title,setTitle]=useState('')
    useEffect(() => {
        if (props.match.params.id) {
            EditPost(props.match.params.id)
        }
    }, [])

    async function EditPost() {
        // let res = await firebase.firestore().collection('adverts').doc(props.match.params.id).get()
        // console.log(res)
        console.log('editPost')
        firebase.firestore().collection('adverts').doc(props.match.params.id).get().then(async (docRef) => {
            if (docRef.exists) {
                let documentData = docRef.data()
               console.log(documentData)
                setTitle(documentData.title)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        // firebase.firestore().collection('adverts').doc(props.match.params.id).then(() => {
        //     console.log("Document successfully deleted!");
        //   }).catch((error) => {
        //     console.error("Error removing document: ", error);
        //   });
    }
	return (
		<>

			<h1>Success</h1>
            <p>List Added</p>
            <Link to={"/advert/" + props.match.params.id} data="nice">
                {title}
            </Link>
		</>
	);
};

export default SuccessAds;
