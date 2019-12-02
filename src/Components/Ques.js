import React, { Component } from 'react';
import { Form, Radio } from 'semantic-ui-react'

class Ques extends Component{
    state = {};
    handleChange = (e, { value }) => {console.log("Question 1: Option " + value.toUpperCase() + " is selected at "+ new Date().toLocaleTimeString());this.setState({ value })};

    render() {
        return (
            <Form>
                <Form.Field>
                    <b>Question 1 : Where is the man?</b>
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Near a school'
                        name='radioGroup'
                        value='a'
                        checked={this.state.value === 'a'}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Near a museum'
                        name='radioGroup'
                        value='b'
                        checked={this.state.value === 'b'}
                        onChange={this.handleChange}
                    />

                </Form.Field>
                <Form.Field>
                    <Radio
                        label='Near townhall'
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

export default Ques;