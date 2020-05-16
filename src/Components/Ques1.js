import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react'
import {connect} from "react-redux";
import {listeningClicked} from "../Actions";

class Ques1 extends Component{
        state = {};
    handleChange = (e, { value }) =>
    {
        console.log("Question 1: Option " + value.toUpperCase() + " is selected at "+ new Date().toLocaleTimeString());
        this.setState({ value });
        const time = new Date().toLocaleTimeString();
        const email=this.props.userInfo.email;
        this.props.onSelectAnswer(email,value.toUpperCase(),time);
    };
    render() {
        return (
            <Form>
                <Form.Field>
                    <b>Question 1 : How many vegetarian dishes did the waiter list?</b>
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='One'
                        name='radioGroup'
                        value='a'
                        checked={this.state.value === 'a'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Three'
                        name='radioGroup'
                        value='b'
                        checked={this.state.value === 'b'}
                        onChange={this.handleChange}
                    />

                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Five'
                        name='radioGroup'
                        value='c'
                        checked={this.state.value === 'c'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {  listeningData: state.list.listeningData, userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, {listeningClicked})(Ques1);