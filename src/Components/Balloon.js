import React, { Component } from 'react';
import {Button, Card, Image} from "semantic-ui-react";
import { connect } from 'react-redux';
import blue from '../Content/blue.png';
import blueBlast from '../Content/blueblast.png';
import red from '../Content/red.png';
import redBlast from '../Content/redblast.png';
import yellow from '../Content/yellow.png';
import yellowBlast from '../Content/yellowBlst.png';
import balloonPump from '../Content/balloonPump.jpg';
import {balloonClicked} from "../Actions";

class Balloon extends Component{
    state = {
        size:0,
        balloonColour:0,
        count:0,
        countBalloon : [0,0,0],
        Balloon:[],
        clicksBurst:[],
        clicksCollect:[],
        amountCollected:[],
        total:0,
        src:red
    };
    imgSrc=[[red,blue,yellow],[redBlast,blueBlast,yellowBlast]];
    imgSize=['mini','tiny','small','medium','large','big'];
    val=[[3,4,4,3,4,3,3,4,3,4,4,3],[5,6,6,5,6,5,5,6,5,6,6,5],[2,3,2,2,3,2,2,3,2,2,2,3]];
    clickCount=0;
    clickLimit=3;
//add timestamp
    handleBlow=()=>{
        // const timestamp = Date.now();
        this.clickCount=this.clickCount+1;
        this.setState({size:this.state.size+1});
        if(this.clickCount===this.clickLimit){

            //display blast for 2 secs
            // eslint-disable-next-line
           // console.log("Balloon busted after "+this.clickCount +" clicks without collecting the potential amount"+ " at " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
            this.props.balloonClicked({
                emailId: this.props.userInfo.email,
                color: this.state.balloonColour,
                clicksCollected: this.clickCount,
                score:0,
                total: current
            });
            const balloonColour=(this.state.balloonColour+1)%3;
            const data = [];
            for(let i=0;i<this.state.Balloon.length;i++)
                data.push(this.state.Balloon[i]);
            data.push([this.state.count,this.state.balloonColour,this.clickCount,this.clickLimit]);

            const counter=[];
            for(let i=0;i<3;i++)
                counter.push(this.state.countBalloon[i]);
            counter[this.state.balloonColour]=counter[this.state.balloonColour]+1;
            this.clickCount=0;
            this.clickLimit=this.val[balloonColour][counter[balloonColour]];
           // document.querySelector('balloon').src = this.imgSrc[1][this.state.balloonColour];
            document.getElementById("balloon").src = this.imgSrc[1][this.state.balloonColour];
            setTimeout(() => {
                this.setState({balloonColour:balloonColour,count:this.state.count+1,src:this.imgSrc[0][balloonColour],Balloon:data,countBalloon:counter,size:0});
            }, 500);

        }
    };
    handleCollect=()=>{
        // eslint-disable-next-line
        //const timestamp = Date.now();
        // eslint-disable-next-line
        //console.log("After "+this.clickCount +" clicks the potential amount was collected" + " at " + new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
        const balloonColour=(this.state.balloonColour+1)%3;
        const data = [];
        for(let i=0;i<this.state.Balloon.length;i++)
            data.push(this.state.Balloon[i]);
        data.push([this.state.count, this.state.balloonColour, this.clickCount, this.clickLimit]);

        const counter=[];
        for(let i=0;i<3;i++)
            counter.push(this.state.countBalloon[i]);
        counter[this.state.balloonColour]=counter[this.state.balloonColour]+1;
        const current  = this.clickCount*5 + this.state.total;
        this.clickCount=0;
        this.clickLimit=this.val[balloonColour][counter[balloonColour]];

        this.props.balloonClicked({
            emailId:this.props.userInfo,
            color: this.state.balloonColour,
            clicksCollected: this.clickCount,
            score:this.score,
            total: current
        });
        this.setState({balloonColour:balloonColour,count:this.state.count+1,src:this.imgSrc[0][balloonColour],Balloon:data,countBalloon:counter,total:current,size:0});

    };


    render() {
        return(
            <div>
                <Card header = 'hello' description = {this.state.total}/>
                <Card header = 'Money collected' description = {this.state.total}/>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Button onClick={this.handleBlow}>Pump</Button>
                    <Button onClick={this.handleCollect}>Collect</Button>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Image src={this.state.src} id ='balloon' size = {this.imgSize[this.state.size]} onClick={this.handleClick}/>
                </div><div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Image src={balloonPump} size='small'/>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {  balloonData: state.bal.balloonData, userInfo:state.auth.userInfo };
};

export default connect(mapStateToProps, { balloonClicked })(Balloon);
