import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

export class RedirectPage extends Component{
    render() {
        console.log("red");
        return(
                  <Redirect to="/"/>
        )
    };
}


