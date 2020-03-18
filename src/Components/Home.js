import React, { Component } from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Header from './Header'

class Home extends Component {
    state={
        disable:[false,false,false,false,false]
    };
    handleClick=(event)=>{
        //console.log(this.state.disable);
        const id = event.target.id;
        if(this.state.disable[id])
            event.preventDefault();
        else {
            //console.log("Hi");
            let data = [];
            for (let i = 0; i < this.state.disable.length; i++)
                data.push(this.state.disable[i]);
            data[id] = true;
            this.setState({disable: data});
            //console.log(data);
            //console.log(this.state.disable);
        }

        //console.log(this.state.disable);
    };
    render() {
        return (
            <div>
                <Header/>
                <div class="container">
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
            </div>
        )
    }
}
export default Home;