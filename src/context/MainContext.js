import React, { createContext,useState } from 'react';
import { data } from '../components/mockData.json';


export const MainContext = createContext();

const MainContextProvider = (props) => {

    const [search,setSearch]=useState("");
    const [show,setShow]=useState(true);
  
    let filteredUsers= data.filter(
      (users)=>{
          return users[0].toLowerCase().indexOf(search.toLowerCase()) !== -1
      }
  )

  


    return (
        <div>
            <MainContext.Provider value={{search,setSearch,show,setShow,filteredUsers}}>
                {props.children}
            </MainContext.Provider>
        </div>
    )
}

export default MainContextProvider