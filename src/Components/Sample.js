import React,{Component}  from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Modal, Header, Icon } from 'semantic-ui-react'

export default class Sample extends Component{
    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
    }

    handleOpen = () => this.setState({ modalOpen: true });
    handleClose = () => this.setState({ modalOpen: false });

    componentDidMount() {
        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleOpen();

    }

    componentWillUnmount() {

    }

    render() {
        return(
            <div>
                <Modal
                    //trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size='small'
                >
                    <Header icon='browser' content='Game name' />
                    <Modal.Content>
                        <h3>instructions</h3>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='checkmark' /> Start Game
                        </Button>
                    </Modal.Actions>
                </Modal>
                <div>GAME</div>
            </div>
        )
    }
}
