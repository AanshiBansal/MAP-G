import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import {Link, Redirect} from "react-router-dom";

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
        this.setState({
            redirectstate: true,

        });

    };
    render() {
        return (
            <div>
                <img src={require('./pic1.jpg')} />
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

export default Emotion1;