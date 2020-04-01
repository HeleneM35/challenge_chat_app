import React from 'react'
import './Contact.css'


const Contact = ({name, img, status}) => {
    return (
        <>
            <div className= "Contact">
                <img className="avatar" src={img} alt="avatar"/>
                <div>
                    <p className= "name">{name}</p>
                    <div className = "status">
                        <p className= "status-online"></p>
                        <p className= "status-text">{status}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact