import React, { useState, useEffect } from "react";
import './App.css';
import { db } from "./firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import Users from './components/Users'
import Create from "./components/Create";

function App() {

  const [usersData, setUsersData] = useState([]);
  const [search, setSearch] = useState('');
  const [isCreate, isSetCreate] = useState(false);
  const [isDeital, isSetDeital] = useState(false);



  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let usersArr = []
      querySnapshot.forEach((doc) => {
        usersArr.push({...doc.data(), id: doc.id})
      });
      setUsersData(usersArr);
    })
    return () => unsubscribe();
  }, [])
  return (
    <div className="App">
      <div className="header">
        <h1 className="text"><b onClick={()=> isSetCreate(!isCreate)}>C</b>ontent</h1>
      </div>
      {isCreate ?
      <Create/> :
      <Users 
        usersData={usersData} 
        search={search} 
        setSearch={setSearch}
        isDeital={isDeital}
        isSetDeital={isSetDeital} /> 
       }
      
      
    </div>
  );
}

export default App;
