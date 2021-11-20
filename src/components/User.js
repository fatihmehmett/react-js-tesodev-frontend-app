import './User.css';


const User = ({userr}) => {
  
    return (
        <>
        <div className="hovers">
        <div className="ilMail">
            <p className="il">
                {`${userr[5]} - ${userr[4]}`}
            </p>
            <p className="mail">
                {`${userr[2]}`}
            </p>
        </div>

        <div className="name">
            {`${userr[0]} - ${userr[3]}`}
        </div>
        <div className="br">
            
        </div>
        </div>
        
    

        </>
    )
}

export default User
