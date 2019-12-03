import React, { Component } from "react"
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Home extends Component {
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
                                    <Link to="/listening">Sharpness in Listening</Link>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Link to="/pile-choosing">Earn Maximum</Link>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Card.Content>
                                    <Link to="/emotion-sensing">Emotion Predictor</Link>
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