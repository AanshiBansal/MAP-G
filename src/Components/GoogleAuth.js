import React,{Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from "react-router-dom";
import { signIn, signOut } from '../Actions';

class GoogleAuth extends Component{
    componentDidMount() {
        this.renderAuthButton=this.renderAuthButton.bind(this);
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'509808981872-e0e1qbiv5fotpep0fl7sbguhq7nfv165.apps.googleusercontent.com',
                scope:'profile'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                //this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            //console.log(this.auth.currentUser.get().getBasicProfile());
            this.props.signIn({
                openID:this.auth.currentUser.get().getId(),
                email:this.auth.currentUser.get().getBasicProfile().getEmail(),
                name:this.auth.currentUser.get().getBasicProfile().getName(),
                fname:this.auth.currentUser.get().getBasicProfile().getGivenName(),
                lname:this.auth.currentUser.get().getBasicProfile().getFamilyName()
            });
        }else{
            this.props.signOut();
        }
    };

    onSignOutClick =() => this.auth.signOut();

    onSignInClick = () => this.auth.signIn();

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        } else if(this.props.isSignedIn) {
            return(
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }else{
            return(
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render(){
        //console.log(this.props);
        return (
            <div>
                {this.renderAuthButton()}
                { (this.props.registered === false) ? <Redirect to="/sign-up" /> : <Redirect to="/" />
                    }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userInfo: state.auth.userInfo, registered: state.auth.registered };
};

export default connect(
    mapStateToProps,
    { signIn, signOut}
)(GoogleAuth);