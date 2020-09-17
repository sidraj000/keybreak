import React, { Component } from 'react'
import './css/Styling.css'
import * as firebase from 'firebase';

import history from './history'
export default class Home extends Component {

    state={
        gameId:"",
        name:"",
    }
    
    constructor(props) {
       
        super(props)
        this.state = { gameId: this.props.match.params.id};
       
      }
      handleChange=(e)=>{
        var str=e.target.value
        this.setState({name:str})
     }

     
     fun=(e)=>
     {
        // console.log(this.state.name);
        var cont=this;
         if(this.state.name==null || this.state.name==="")
         {
             window.alert("Please enter your name!!");
             return
         }
         if(this.state.gameId==null)
         {
            var secs =parseInt( new Date().getTime() );
            var str=secs+this.state.name;
            // axios({
            //     method:'post',
            //     url:'http://localhost:5000/api/items',
            //     data:{
            //         gameId: str,
            //         text:"lets type and break our keys",
            //         playerA:this.state.name,
            //         playerB:"waiting",
            //         startTime:secs
            //     }
            // })
            // .then(res=>console.log(res))
            // .catch(err=>console.log(err))

            firebase.database().ref('games/'+str).set({
                    gameId: str,
                    text:"lets type and break our keys",
                    playerA:this.state.name,
                    playerB:"waiting",
                    startTime:secs,
                    lenA:0,
                    lenB:0,
                    statsA:"u",
                    statsB:"u",
            }, function(err){
                if(err) console.log(err);
                else{
                    history.push({
                        pathname: `/App/${str}`,
                        state:{name:cont.state.name}
                        });
                }
            }
            
            );
        
           
         }
        else
        {
            var str=this.state.gameId;
            var secs =parseInt( new Date().getTime() );
            //  var str=seconds+this.state.name;
            console.log(str);
            
            var updates={};
            updates['games/'+str+'/'+'playerB']=this.state.name;
            updates['games/'+str+'/'+'/startTime']=secs;
            firebase.database().ref('games/'+str).update({
        
                playerB:this.state.name,
                startTime:secs
            }, function(err){
            if(err) console.log(err);
            else{
                var obj={id:123,name:"sid"}
             history.push({
                pathname: `/App/${str}`,
                state:{name:cont.state.name}
                });
            }
           }
        
        );
    
           
        }

     }

      
    render() {
      
       
        return (
            <div className="Home">
                
                <div className="yellowContainer">
                    <div className="logoContainer">
                        <p className="keyb">KeyBreak</p>
                        <p className="descText">How fast are your keys?</p>
                    </div>
                </div>
                <div className="blackContainer">
                    <div>
                        <input  className="uid" placeholder="USER ID" type="text" value={this.state.data} onChange={this.handleChange}/>
                    
                        <button className="playBtn" onClick={this.fun} > Click Me</button>
                        
                       
                    </div>
                </div>
            
            </div>
        )
    }
}
