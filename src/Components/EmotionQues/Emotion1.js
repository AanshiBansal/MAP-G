import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import Emotion2 from "./Emotion2";
import {Link} from "react-router-dom";

class Emotion1 extends Component {
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
                    <Button><Link to="/emotion2">Anger</Link></Button>
                    <Button><Link to="/emotion2">Determination</Link></Button>
                    <Button><Link to="/emotion2">Disgust</Link></Button>
                    <Button><Link to="/emotion2">Happiness</Link></Button>
                    <Button><Link to="/emotion2">Hope</Link></Button>
                    <Button><Link to="/emotion2">Fear</Link></Button>
                    <Button><Link to="/emotion2">Sadness</Link></Button>
                    <Button><Link to="/emotion2">Pain</Link></Button>
                    <Button><Link to="/emotion2">Surprise</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion1;