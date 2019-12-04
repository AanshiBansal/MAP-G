import React, { Component } from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Home extends Component {
    state={
        disable:[]
    };
    handleClick=(event)=>{
        const id = event.target.id;
        const data =[];
        for(let i=0;i<this.state.disable.length;i++)
            data.push(this.state.disable[i]);
        data[id]="";
        this.setState({disable:data});
    };
    render() {
        return (
            <div>
                <div style={{textAlign: 'center', justifyContent:'center'}}>
                    <h1><b><br /> MAP-G <br /><br /></b> </h1>
                </div>
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