import './App.css';
import Box from './components/box';
import React,{useState, useEffect } from 'react';

// Import the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs} from '@firebase/firestore'
import { addConsoleHandler } from 'selenium-webdriver/lib/logging';
const firebaseConfig = {
  //config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const temp = [];
  const [users, setUsers] = useState([]);
  const board = [];
  //load the users from the firebase store
  const db = getFirestore(app)
  const usersData = collection(db, "users")
  
  useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersData)
      setUsers(data.docs.map(ele => ({...ele.data(), id: ele.id})))
    } 
    getUsers()
  }, [])
  for(const e in users){
    temp.push([users[e].name, users[e].score])
  }
  for(const element in temp){
    board.push(<Box arr = {temp[element]}/>)
  }
  
  return (
    <div className="App">
      <h1 id='title'>LEADERBOARD</h1>
      <ul>
        {board.map(positions => (
          <li>{positions}</li>))}
      </ul>
    </div>
  );
}
export default App;
