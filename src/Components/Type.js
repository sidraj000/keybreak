import React, { Component } from 'react'

import '../css/Styling.css'
export default class Type extends Component {

    getColour=(i)=>{
        if(i>=this.props.stats.length)
        {
            return {
                background:'#f4f4f4'
            }
        }
        else if(this.props.stats[i]==='u')
        {
            return {
                background:'#fff'
            }
        }
        else if(this.props.stats[i]==='c')
        {
            return {
                background:'#728C00'
            }
        }
        else if(this.props.stats[i]==='i')
        {
            return {
                background:'#FF0000'
            }
        }
    }

    render() {

        var str=this.props.data;
        var comps=[]
        for(var i=0;i<str.length;i++)
        {
            comps.push(i)        
        }
    
        return comps.map((i)=>(
              <input className="p" type="none" value={str.charAt(i)} disabled={true} style={this.getColour(i)} />            
             ));
        
    }
   
}
