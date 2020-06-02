import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import {connect} from "react-redux";
import { genReport } from '../Actions';

class Footer extends Component{
    checkDisable=()=>{
        let check=true;
        const {disable}=this.props;
        if(disable && disable[1]===true && disable[2]===true && disable[3]===true && disable[4]===true)
            check=false;
        return check;
    };
    handleReport = () => {
        alert("Kindly check your registered email. The report has been mailed to you.");
        this.props.genReport({
            email:this.props.userInfo.email,
        });
    };
    render(){
        const check=this.checkDisable();
        return(
            <Button primary floated='right' style={{margin:'20px'}} disabled={check} onClick={this.handleReport}>Generate Report</Button>
        )
    }
}

const mapStateToProps = (state) => {
    return { disable:state.home.disable, isReport: state.rep.isReport, userInfo: state.auth.userInfo };

};

export default connect(
    mapStateToProps,{genReport}
)(Footer);
