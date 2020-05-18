import React, { Component } from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import HeaderBar from './Header';
import Footer from './Footer';
import {connect} from "react-redux";

class Home extends Component {
    handleClick=(event)=>{
        if(this.props.isSignedIn === false){
            event.preventDefault();
            alert("Please Login First");
        }
        else{
        const id = event.target.id;
        if(this.props.disable[id]) {
            event.preventDefault();
            alert("You have already played this game.");
        }
        }
    };
    render() {
        return (
            <div>
                <HeaderBar/>
                <div className="container">
                    <nav>
                        <Card.Group itemsPerRow={2}>
                            {/*<Card>*/}
                            {/*    <Card.Content>*/}
                            {/*        <Link to="/card-matching">Card Matching</Link>*/}
                            {/*    </Card.Content>*/}
                            {/*</Card>*/}
                            <Card>
                                <Card.Content>
                                    <Link to="/listening" id='1' onClick={this.handleClick}>Sharpness in Listening</Link>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Link to="/pile-choosing" id='2' onClick={this.handleClick}>Earn Maximum</Link>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Link to="/balloon-blow" id='3' onClick={this.handleClick}>Blow the Balloon</Link>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Link to="/emotion-sensing" id='4' onClick={this.handleClick}>Emotion Predictor</Link>

                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </nav>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userInfo: state.auth.userInfo, disable:state.home.disable };
};

export default connect(
    mapStateToProps,null
)(Home);