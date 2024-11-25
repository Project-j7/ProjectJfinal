import { useState, useEffect } from 'react';
import './styles.css';

export function ProfilePic() {
    return (
        <div>
            <div id="user-profile">
                <img src="./assets/profile.png" alt="User Profile"/>
            </div>
        </div>
    );
}