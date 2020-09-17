import React from 'react';
import Type from './Components/Type.js'
import './css/Styling.css'
import * as firebase from 'firebase';
import history from './history'
class App extends React.Component {
   
  state={
    currPlayer:"sid",
    gameId:"",
    type:'',
    data: "",
    lenA:0,
    statsA:'u',//u for current   c for correct i        for incorrect
    lenB:0,
    statsB:'u',
    playerA:"siddharth",
    playerB:"waiting",
    startTime:0
  }

  
    componentDidMount()
  {
   this.setState({currPlayer:this.props.history.location.state.name});
 
    var id=this.props.match.params.id;
    var cont=this
    this.setState({gameId:id})

    firebase.database().ref('games/' + id ).on('value', function(snapshot) {
      cont.setState({
        playerA:snapshot.val().playerA,
        playerB:snapshot.val().playerB,
        startTime:snapshot.val().startTime,
        type:snapshot.val().text,
        lenA:snapshot.val().lenA,
        lenB:snapshot.val().lenB,
        statsA:snapshot.val().statsA,
        statsB:snapshot.val().statsB
      })
    });

  };
  
  updateDatabase=(len,items)=>
  {
    if(this.state.currPlayer=this.state.playerA)
    {
      firebase.database().ref('games/'+this.state.gameId).update({
      
              lenA:len,
              statsA:items
            });
    }
    else{
      firebase.database().ref('games/'+this.state.gameId).update({
        lenB:len,
        statsB:items
      });
    }
  }
    handleChange=(e)=>{

      if(this.state.playerB=="waiting")
      {
        window.alert("wait for playerB to join");
      }
      else
      {
      var str=e.target.value
      var len,items
      if(this.state.currPlayer===this.state.playerA)
      {
      len=this.state.lenA
      items=this.state.statsA
      }
      else 
      {
        len=this.state.lenB
        items=this.state.statsB
      }

      console.log(len)
      if(str.length>len)
      {
       
        this.setState({data:str})
        items=items+"u"
        
        if(this.state.type[len]===str[len])
        {
          items = items.substring(0, len) + 'c' + items.substring(len + 1);

        }
        else{
          items = items.substring(0, len) + 'i' + items.substring(len + 1);
        }
        console.log(str.length)
        console.log(items)
        if(this.state.currPlayer===this.state.playerA)
        {
          firebase.database().ref('games/'+this.state.gameId).update({
          
                  lenA:str.length,
                  statsA:items
                });
        }
        else{
          firebase.database().ref('games/'+this.state.gameId).update({
            lenB:str.length,
            statsB:items
          });
        }

      }

    }
   
  }
  
  setfoc=()=>{
    this.nameInput.focus();
  }
  render()
  {
    var stats

   if(this.state.playerA==this.state.currPlayer)
    stats=this.state.statsA
    else stats=this.state.statsB
    console.log(stats);
  return (
   
    <div className="App">
    <p className="box"><Type className="p" data={this.state.type} stats={stats} /></p>
    <p className="box"> <input className="inpBox" type="text"  value={this.state.data} onChange={this.handleChange} autoFocus onBlur={this.setfoc}  ref={(input) => { this.nameInput = input; }} />  </p>

    </div>
  );
  }
}

export default App;
