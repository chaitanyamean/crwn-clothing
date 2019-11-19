import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2A_9na59QygJcVH1qKoEWmK-HEX-vl-U",
    authDomain: "samplepsdb.firebaseapp.com",
    databaseURL: "https://samplepsdb.firebaseio.com",
    projectId: "samplepsdb",
    storageBucket: "samplepsdb.appspot.com",
    messagingSenderId: "663559506396",
    appId: "1:663559506396:web:a4b49dd9ac026b23ce6719",
    measurementId: "G-48SHY9EG22"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    console.log('UserAuth', additionalData);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj)
    });

    return await batch.commit();
  }
  
  export const convertCollectionsToMap = (collections) => {    
      const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title,
          items
        }
      });

      console.log(transformedCollection);

  return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
  }, {})
      

  }
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;