import React from 'react';
import './Styles.css';

function ProfilePhoto(props) {
    return (
        <>
         
         <div className="circular--portrait"> <img src={props.src} alt={props.alt} /> </div>
        </>
    )
}

export default ProfilePhoto;