

// import React,{useState} from 'react';
// import MeetupList from '../components/meetups/MeetupList'

// const DUMMY_DATA =[
//     {
//         id: 'm1',
//         title: 'This is a first meetup',
//         image:
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//           'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//       },
//       {
//         id: 'm2',
//         title: 'This is a second meetup',
//         image:
//           'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//         address: 'Meetupstreet 5, 12345 Meetup City',
//         description:
//           'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//       },
// ]



// export const AllMeetups = () => {
//     const [isLoading, setIsLoading] = useState(true)
//     const [loadedMeetups, setLoadedMeetups] = useState([]);
//     fetch('https://react-getting-started-d5523-default-rtdb.firebaseio.com/meetups.json')
//     .then(response =>{
//         return response.json();
      
//     }).then((data)=>{
//         setIsLoading(false)
//         setLoadedMeetups(data)
//     })
    
//     if(isLoading){
//         return <section>
//             <p>Loading....</p>
//         </section>
//     }
//   return (
//     <section>
//         <h1>AllMeetups</h1>
//         <MeetupList meetups={DUMMY_DATA}/>
//         {/* <ul>

//         {DUMMY_DATA.map((meetup)=>{
//             return <li key={meetup.id}>{meetup.title}</li>
//         })}
//         </ul> */}
//     </section>
//   )
// }

import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { getDatabase, ref, onValue } from 'firebase/database';

export const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const meetupsRef = ref(db, 'meetups');

    onValue(meetupsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const meetups = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setLoadedMeetups(meetups);
      }
      setIsLoading(false);
    });
  }, []);

  

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};


