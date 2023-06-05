// import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import NewMeetupForm from '../components/meetups/NewMeetupForm';

// export const NewMeetup = () => {
//   const navigate = useNavigate();

//   function addMeetupHandler(meetupData) {
//     fetch('https://react-getting-started-d5523-default-rtdb.firebaseio.com/meetups.json', {
//       method: 'POST',
//       body: JSON.stringify(meetupData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(() => {
//         navigate('/');
//       })
//       .catch((error) => {
//         // Handle error
//       });
//   }
  

//   return (
//     <section>
//       <h1>Add New Meetup</h1>
//       <NewMeetupForm onAddMeetup={addMeetupHandler} />
//     </section>
//   );
// };

// export default NewMeetup;
import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDddb-7tus23tkvbrvtfKjP50XBVY7xxsA",
  authDomain: "react-getting-started-d5523.firebaseapp.com",
  databaseURL: "https://react-getting-started-d5523-default-rtdb.firebaseio.com",
  projectId: "react-getting-started-d5523",
  storageBucket: "react-getting-started-d5523.appspot.com",
  messagingSenderId: "389028647962",
  appId: "1:389028647962:web:b706c9f59f13347c486da3"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

export const NewMeetup = () => {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    const db = getDatabase(app);
    const meetupRef = ref(db, 'meetups');

    push(meetupRef, meetupData)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        // Handle error
      });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

