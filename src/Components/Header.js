import React, { Component } from 'react';
import {Segment, Header } from 'semantic-ui-react';
import GoogleAuth from './GoogleAuth';
import {connect} from "react-redux";

class HeaderBar extends Component{
    displayName = () =>{
        if(this.props.isSignedIn){
            const fname = this.props.userInfo.fname;
            return(
                "Hello " + fname
            )
        }
        else
            return null;
    };
    render(){
        return(

            <Segment clearing>
                    <Header as='h5' floated='right'>
                        <div>{this.displayName()}<GoogleAuth /></div>
                    </Header>
                    <Header as='h1' floated='left'>
                        MAP-G
                    </Header>
                </Segment>

        )
    }
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userInfo: state.auth.userInfo };
}

export default connect(
    mapStateToProps,null
)(HeaderBar);
