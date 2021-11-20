import React, { useContext,useState } from 'react';
import logo from '../jpg 1.png';
import { MainContext } from '../context/MainContext';
import User from './User';
import './ShowMore.css';

const ShowMore = () => {


    const { search,setSearch, show, setShow, filteredUsers} = useContext(MainContext);

    const [orderby,setOrderby]=useState("Name Ascending");


    const handleSubmit= (e) => {

        e.preventDefault();
      };

    const handleChange = (e) =>
      setOrderby(e.target.value);  

    return (
        <>
        <div className="showshow">
                <div className="logoss">
                    <img src={logo} alt="tesodevs" />
                    
                </div>
                <div className="inputss">
                    <form onSubmit={handleSubmit}>
                        <input onChange={e=>setSearch(e.target.value)} value={search} type="text" placeholder="Name - Surname" />
                        <button value="Submit" onClick={()=>setShow(false)}>Search</button>
                    </form>

                </div>
            </div>
            <div className="selected">
                <form onSubmit={handleSubmit}>
                    <select value={orderby.value} onChange={handleChange} id="Order by" name="Order by">
                        <option value="Name Ascending">Name Ascending</option>
                        <option value="Name Descending">Name Descending</option>
                        <option value="Year Ascending">Year Ascending</option>
                        <option value="Year Descending">Year Descending</option>
                    </select>
                </form>
            
            </div>
            <div className="userss">
                {

                    
                    orderby==="Name Ascending" ?
                    (
                    show ? null :
                    filteredUsers.sort((a, b) => (a[0] > b[0]) ? 1 : -1)
                            .map((userr, index) =>
                                <User key={index} userr={userr} />)):null
                }
                {   
                   orderby==="Name Descending" ?
                   (
                   show ? null :
                   filteredUsers.sort((a, b) => (a[0] > b[0]) ? -1 : 1)
                           .map((userr, index) =>
                               <User key={index} userr={userr} />)):null
                        
                
                }
                {
                    
                    orderby==="Year Ascending" ?
                    (
                        show ? null :
                        filteredUsers.sort((a, b) => (a[3] > b[3]) ? 1 : -1)
                                .map((userr, index) =>
                                    <User key={index} userr={userr} />)):null
                                

                }
                {
                    
                    orderby==="Year Descending" ?
                    (
                        show ? null :
                        filteredUsers.sort((a, b) => (a[3] > b[3]) ? -1 : 1)
                                .map((userr, index) =>
                                    <User key={index} userr={userr} />)):null
                                

                }




            </div>
       
        </>
    )
}

export default ShowMore
