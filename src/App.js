import './App.css';
import logo from './jpg 1.png';
import User from './components/User';
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import { MainContext } from './context/MainContext';

function App() {

  const {search,setSearch,show,setShow,filteredUsers} = useContext(MainContext);

  const handleSubmit= (e) => {

    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="logos">
        <img src={logo} alt="tesodev" />
        <span>Search web app</span>
      </div>
      <div className="inputs">
        <form onSubmit={handleSubmit}>
          <input onChange={e=>setSearch(e.target.value)} value={search} type="text" placeholder="Name - Surname" />
          <button value="Submit" onClick={()=>setShow(false)}>Search</button>
          </form>
      </div>
      <div className="users">
          {  

              show ? null :

            (
              
             filteredUsers.length<3 ? 
             filteredUsers
             .map((userr,index) =>
             <User key={index} userr={userr} />):

             
             filteredUsers.slice(0, 3)
             .map((userr,index) =>
             <User key={index} userr={userr} />)
             
             
      
             )
          }

          {filteredUsers.length>3 ? <Link to="/showmore" className="Show-more">Show More</Link>:null}

          
      </div>

      

    </div>
  );
}

export default App;
