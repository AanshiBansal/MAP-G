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
        balColor:[],
        clicksCollect:[],
        clicksBurst:[],
        genScore:[],
        total:0,
        src:red
    };
    imgSrc=[[red,blue,yellow],[redBlast,blueBlast,yellowBlast]];
    imgSize=['mini','tiny','small','medium','large','big'];
    val=[[3,4,4,3,4,3,3,4,3,4,4,3],[5,6,6,5,6,5,5,6,5,6,6,5],[2,3,2,2,3,2,2,3,2,2,2,3]];
    clickCount=0;
    clickLimit=3;
    handleBlow=()=>{
        this.clickCount=this.clickCount+1;
        this.setState({size:this.state.size+1});
        if(this.clickCount===this.clickLimit){

            //display blast for 2 secs
            this.state.clicksBurst.push(this.clickCount);
            this.state.clicksCollect.push(0);
            this.state.balColor.push(this.state.balloonColour);
            this.state.genScore.push(0);
            this.props.balloonClicked({
                emailId: this.props.userInfo.email,
                color: this.state.balColor,
                clicksBursted: this.state.clicksBurst,
                clicksCollected: this.state.clicksCollect,
                amountCollected:this.state.genScore,
                total: this.state.total
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
            document.getElementById("balloon").src = this.imgSrc[1][this.state.balloonColour];
            setTimeout(() => {
                this.setState({balloonColour:balloonColour,count:this.state.count+1,src:this.imgSrc[0][balloonColour],Balloon:data,countBalloon:counter,size:0});
            }, 500);

        }
    };
    handleCollect=()=>{
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
        this.state.clicksCollect.push(this.clickCount);
        this.state.clicksBurst.push(0);
        this.state.balColor.push(this.state.balloonColour);
        this.state.genScore.push(current-this.state.total);
        this.props.balloonClicked({
            emailId: this.props.userInfo.email,
            color: this.state.balColor,
            clicksBursted:this.state.clicksBurst,
            clicksCollected: this.state.clicksCollect,
            amountCollected:this.state.genScore,
            total: current
        });
        this.setState({balloonColour:balloonColour,count:this.state.count+1,src:this.imgSrc[0][balloonColour],Balloon:data,countBalloon:counter,total:current,size:0});

    };


    render() {
        return(
            <div>
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
