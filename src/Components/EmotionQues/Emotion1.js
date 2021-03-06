import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {emotionAns} from "../../Actions";

class Emotion1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            redirectstate: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,

        });
    }
    handleClick = (event)=>{
        const timestamp = Date.now(); // This would be the timestamp you want to format
        console.log("Emotion detected for picture 1 " + event.target.id + " at " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
        const timeAnswer = new Date().toLocaleTimeString();
        this.props.emotionAns({a:event.target.id,b:"1",c:timeAnswer,emailId:this.props.userInfo.email});
        this.setState({
            redirectstate: true,

        });

    };
    render() {
        return (
            <div>
                <Card header ='1/14' style={{textAlign:'center'}}/>
                <Image src={require('./pic1.jpg')} centered/>
                <br/>
                <p>
                    <span>
                        This is a story about a woman who made it onto the Olympic rowing team.
                        She is now in the race for the gold medal. Halfway through the race she is third, but gaining on second.
                        Two thirds of the way through the race she sees that she is in position to pass the boat in first. She rows
                        as fast as she ever has in her life.
                    </span>
                </p>
                <p>
                    What kind of emotion is it displaying? <br />

                    <Button id='Anger' onClick={this.handleClick}>Anger</Button>
                    <Button id='Determination' onClick={this.handleClick}>Determination</Button>
                    <Button id='Disgust' onClick={this.handleClick}>Disgust</Button>
                    <Button id='Happiness' onClick={this.handleClick}>Happiness</Button>
                    <Button id='Hope' onClick={this.handleClick}>Hope</Button>
                    <Button id='Fear' onClick={this.handleClick}>Fear</Button>
                    <Button id='Sadness' onClick={this.handleClick}>Sadness</Button>
                    <Button id='Pain' onClick={this.handleClick}>Pain</Button>
                    <Button id='Surprise' onClick={this.handleClick}>Surprise</Button>
                    <Button id='Puzzle' onClick={this.handleClick}>Puzzle element</Button>
                    { (this.state.redirectstate) ? <Redirect to="/emotion2"/> : null }
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {  emotionData: state.emo.emotionData, userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {emotionAns})(Emotion1);