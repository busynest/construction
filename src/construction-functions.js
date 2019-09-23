/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

// @ts-check
export const firebaseUser = () => { return firebase.auth().currentUser || "demo"; };
export const isUser       = () => { return !!firebase.auth().currentUser; };
export const deleteDoc    = (collect, item) => { return firestore.collection(collect).doc(item).delete() };
export const saveMessage  = (messageText) => {
  return firebase.firestore().collection('feedback')
  .add({
    // name:           userName(),
    text:           messageText,
    // profilePicUrl:  profileURL(),
    timestamp:      firebase.firestore.FieldValue.serverTimestamp()
  }).catch( (error) => {
    console.error('Error writing message', error);
  });
};
/*
export const deviceToken = () => {
  // Saves the messaging device token to the datastore.
  firebase.messaging().getToken().then( (currentToken) => {
    if (currentToken) {
      console.log('Got FCM device token:', currentToken);
      // Saving the Device Token to the datastore.
      firebase.firestore().collection('fcmTokens').doc(currentToken)
          .set({uid: firebase.auth().currentUser.uid});
    } else {
      // Need to request permissions to show notifications.
      requestNotificationsPermissions();
    }
  }).catch( (error) => { console.error('Unable to get messaging token.', error); });
};
*/
/*
// Load Feed
export const loadMessages = () => {
  // Referance Document Query
  const query = firebase.firestore().collection('messages').orderBy('timestamp', 'desc').limit(12);
  // Start listening to the query.
  query.onSnapshot( (snapshot) => {
    snapshot.docChanges().forEach( (change) => {
      if (change.type === 'removed') {
       // deleteMessage(change.doc.id);
      } else {
        var message = change.doc.data();
        console.log(
          change.doc.id,
          message.timestamp,
          message.name,
          message.text,
          message.profileURL,
          message.imageUrl);
      }
    });
  });
};
*/