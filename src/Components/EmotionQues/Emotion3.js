import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import ReactStopwatch from 'react-stopwatch';
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import Emotion2 from "./Emotion2";
import {Link} from "react-router-dom";

class Emotion3 extends Component {
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
                    onCallback={() => console.log('Finish')}
                    render={({formatted, hours, minutes, seconds}) => {
                        return (
                            <div >
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 30 seconds'/>
                            </div>
                        );
                    }}
                />
                <img src={require('./pic3.jpg')} />
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
                    <Button><Link to="/emotion4">Anger</Link></Button>
                    <Button><Link to="/emotion4">Determination</Link></Button>
                    <Button><Link to="/emotion4">Disgust</Link></Button>
                    <Button><Link to="/emotion4">Happiness</Link></Button>
                    <Button><Link to="/emotion4">Hope</Link></Button>
                    <Button><Link to="/emotion4">Fear</Link></Button>
                    <Button><Link to="/emotion4">Sadness</Link></Button>
                    <Button><Link to="/emotion4">Pain</Link></Button>
                    <Button><Link to="/emotion4">Surprise</Link></Button>
                    <Button><Link to="/emotion4">Puzzke element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion3;