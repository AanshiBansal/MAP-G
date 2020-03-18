import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () =>{
    return(
        <div>
            <div >
                <GoogleAuth />
            </div>
            <div style={{textAlign: 'center', justifyContent:'center'}}>
                <h1><b><br /> MAP-G <br /><br /></b> </h1>
            </div>

        </div>
    )
};

export default Header;
