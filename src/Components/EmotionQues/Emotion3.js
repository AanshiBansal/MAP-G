import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import ReactStopwatch from 'react-stopwatch';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {emotionAns} from "../../Actions";

class Emotion3 extends Component {
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
        console.log("Emotion detected for picture 3 " + event.target.id + " at " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
       const timeAnswer = new Date().toLocaleTimeString();
        this.props.emotionAns({a:event.target.id,b:"3",c:timeAnswer,emailId:this.props.userInfo.email});
        this.setState({
            redirectstate: true,

        });

    };
    render() {

        return (
            <div>
                <ReactStopwatch
                    seconds={0}
                    minutes={0}
                    hours={0}
                    limit="00:00:30"
                    onChange={({hours, minutes, seconds}) => {
                    }}
                    onCallback={() => this._onButtonClick()}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div style={{float:'right'}}>
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 30 seconds'/>
                            </div>
                        );
                    }}
                />
                { (this.state.showComponent) ? <Redirect to="/emotion4"/> : null }
                <Card header ='3/14' style={{textAlign:'center'}}/>
                <Image src={require('./pic3.jpg')} centered/>
                <br/>
                <p>
                    <span>
                       This is a story of a woman who has just
had her ingrown toenail operated on. She
is now waiting in line to see a movie. As
another movie ends, the crowd is asked
to step back to let them through.
Someone accidentally steps on her toe.
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
                    { (this.state.redirectstate) ? <Redirect to="/emotion4"/> : null }
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {  emotionData: state.emo.emotionData, userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {emotionAns})(Emotion3);