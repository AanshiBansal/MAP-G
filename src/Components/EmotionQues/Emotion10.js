import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import ReactStopwatch from 'react-stopwatch';
import {Link} from "react-router-dom";

class Emotion10 extends Component {

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
                <img src={require('./pic10.jpg')} />
                <p>
                    <span>
                       This is a story about a man who had
worked very hard and made it onto the
Olympic rowing team. He is now in the
race for the gold medal. Halfway through
the race he is in first place out of five
boats.


                    </span>
                </p>
                <p>
                    What kind of emotion is it displaying? <br />
                    <Button><Link to="/emotion11">Anger</Link></Button>
                    <Button><Link to="/emotion11">Determination</Link></Button>
                    <Button><Link to="/emotion11">Disgust</Link></Button>
                    <Button><Link to="/emotion11">Happiness</Link></Button>
                    <Button><Link to="/emotion11">Hope</Link></Button>
                    <Button><Link to="/emotion11">Fear</Link></Button>
                    <Button><Link to="/emotion11">Sadness</Link></Button>
                    <Button><Link to="/emotion11">Pain</Link></Button>
                    <Button><Link to="/emotion11">Surprise</Link></Button>
                    <Button><Link to="/emotion11">Puzzle element</Link></Button>
                </p>
            </div>
        )
    }
}

export default Emotion10;