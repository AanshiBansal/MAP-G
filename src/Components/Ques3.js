import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react'

class Ques3 extends Component{
    state = {};
    handleChange = (e, { value }) => {
        console.log("Question 3: Option " + value.toUpperCase() + " is selected at "+ new Date().toLocaleTimeString());
        this.setState({ value });
        const timeAnswer = new Date().toLocaleTimeString();
        this.props.onSelectAnswer3(timeAnswer,value.toUpperCase());
    };


    render() {
        return (
            <Form>
                <Form.Field>
                    <b>Question 3 : Why did girl write about the poem?</b>
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Because it contains a message about nature'
                        name='radioGroup'
                        value='a'
                        checked={this.state.value === 'a'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Because her mother told her to do so'
                        name='radioGroup'
                        value='b'
                        checked={this.state.value === 'b'}
                        onChange={this.handleChange}
                    />

                </Form.Field>
                <Form.Field>
                    <Radio
                        label='As she had won a prize for this theme'
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

export default Ques3;