import React, { Component } from 'react';
import {Card, Image} from "semantic-ui-react";
import { connect } from 'react-redux';
import {addPileChoosen} from "../Actions";
import src1 from "../Content/One.jpg";
import src2 from "../Content/Two.jpg";
import src3 from "../Content/Three.jpg";
import src4 from "../Content/Four.jpg";
class Piles extends Component{
    state = {
        count:0,
        countPiles : {1:0,2:0,3:0,4:0},
        Piles:[],
        total:2000
    };

    val = [[],
        [100,-150,200,-170,100,-160,130,-140,140,-120,100,-150,200,-170,100,-160,130,-140,140,-120,100,-150,200,-170,100,-160,130,-140,140,-120],
        [50,60,40,70,80,90,-30,50,60,40,70,80,90,-30,50,60,40,70,80,90,-30,50,60,40,70,80,90,-30,50,60],
        [-60,-30,-20,-50,300,-40,-35,-40,-65,250,-60,-30,-20,-50,300,-40,-35,-40,-65,250,-60,-30,-20,-50,300,-40,-35,-40,-65,250],
        [10,5,7,12,6,4,8,11,6,9,10,5,7,12,6,4,8,11,6,9,10,5,7,12,6,4,8,11,6,9]];
//add timestamp
    handleClick = (event)=>{
        const id = event.target.id;
        console.log(id+" Pile was choosen with net change of "+ this.val[id][this.state.countPiles[id]]);
        const counter =[];
        const data = [];
        for(let i=0;i<this.state.Piles.length;i++)
            data.push(this.state.Piles[i]);
        data.push({pile:id,val:this.val[id][this.state.countPiles[id]]});

        let current = this.state.total+this.val[id][this.state.countPiles[id]];

        for(let i=0;i<5;i++)
            counter.push(this.state.countPiles[i]);
        counter[id]=counter[id]+1;

        this.setState({
            count:this.state.count+1,
            countPiles:counter,
            Piles:data,
            total:current
        })

    };


    render() {
        return(
            <div>
                <Card header = 'Money collected' description = {this.state.total}/>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Image.Group size='small'>
                    <Image src={src1} id ='1' onClick={this.handleClick}/>
                    <Image src={src2} id ='2' onClick={this.handleClick}/>
                    <Image src={src3} id ='3' onClick={this.handleClick}/>
                    <Image src={src4} id ='4' onClick={this.handleClick}/>
                </Image.Group>
                </div>
            </div>
        )
    }
}
//
// function mapStateToProps(state) {
//     return {count: state.piles.length};
//
// }

export default connect(null, { addPileChoosen  })(Piles);