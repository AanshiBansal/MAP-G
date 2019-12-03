import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import ReactStopwatch from 'react-stopwatch';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import {Link, Redirect} from "react-router-dom";
import Emotion3 from "./Emotion3";

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
        console.log("Emotion detected for picture 2 " + event.target.id + " at " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
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
                { (this.state.showComponent) ? <Redirect to="/emotion3"/> : null }
                <Card header ='2/14' style={{textAlign:'center'}}/>
                <Image src={require('./pic2.jpg')} centered/>
                <br/>
                <p>

                    <span>
                        This is a story of a man who is going to a McDonalds for the first time. While
                        waiting in line, he stares up at the menu. Several people are served and without
                        realizing it he arrives at the front of the line. The cashier says, "May I help you
                        please?" The man acknowledges the cashier and returns his attention to the menu.
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
                    { (this.state.redirectstate) ? <Redirect to="/emotion3"/> : null }
                </p>
            </div>
        )
    }
}

export default Emotion1;