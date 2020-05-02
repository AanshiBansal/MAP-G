import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from "react-redux";

class Footer extends Component{
    checkDisable=()=>{
        let check=true;
        const {disable}=this.props;
        if(disable && disable[1]===true && disable[2]===true && disable[3]===true && disable[4]===true)
            check=false;
        return check;
    };
    render(){
        const check=this.checkDisable();
        return(
            <Button primary floated='right' style={{margin:'20px'}} disabled={check}>View Report</Button>
        )
    }
}

const mapStateToProps = (state) => {
    return { disable:state.home.disable};
};

export default connect(
    mapStateToProps,null
)(Footer);
