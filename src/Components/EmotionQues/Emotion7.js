import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import {Link} from "react-router-dom";

class Emotion7 extends Component {

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
                                <Card header = {'Time spent '+ seconds + ' seconds'} meta ='Total time : 60 seconds'/>
                            </div>
                        );
                    }}
                />
                <img src={require('./pic7.jpg')} />
                <p>
                    <span>
                       This is a story of a woman who went to
the horse races to bet five hundred
dollars. She bet it all on horse number 7.
For her to win, the horse has to finish first
or second. She is now watching the
horses make the final turn down the
stretch to the finish line. Horse number 7
is in second place

                    </span>
                </p>
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion8">Anger</Link></Button>
                    <Button><Link to="/emotion8">Determination</Link></Button>
                    <Button><Link to="/emotion8">Disgust</Link></Button>
                    <Button><Link to="/emotion8">Happiness</Link></Button>
                    <Button><Link to="/emotion8">Hope</Link></Button>
                    <Button><Link to="/emotion8">Fear</Link></Button>
                    <Button><Link to="/emotion8">Sadness</Link></Button>
                    <Button><Link to="/emotion8">Pain</Link></Button>
                    <Button><Link to="/emotion8">Surprise</Link></Button>
                    <Button><Link to="/emotion8">Puzzle element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion7;