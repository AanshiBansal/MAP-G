import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {emotionAns} from "../../Actions";

class Emotion6 extends Component {
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
        console.log("Emotion detected for picture 6 " + event.target.id + " at " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
       const timeAnswer = new Date().toLocaleTimeString();
        this.props.emotionAns({a:event.target.id,b:"6",c:timeAnswer,emailId:this.props.userInfo.email});
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
                { (this.state.showComponent) ? <Redirect to="/emotion7"/> : null }
                <Card header ='6/14' style={{textAlign:'center'}}/>
                <Image src={require('./pic6.jpg')} centered/>
                <br/>
                <p>
                    <span>
                        This is a story of a man who went to the
cinema to see a movie. He is now waiting
in line to see the movie. Just as they are
letting the audience into the cinema, a
pair of individuals rudely push their way
through the crowd bumping the man and
stepping on his bruised toe.

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
                    { (this.state.redirectstate) ? <Redirect to="/emotion7"/> : null }
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {  emotionData: state.emo.emotionData, userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {emotionAns})(Emotion6);