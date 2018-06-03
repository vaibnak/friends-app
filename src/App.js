import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



  
    function fetchactivefriends() {
        return new Promise((res, rej) => {
          const friends = [
            {
              name: 'Jordyn',
              validation: true,
            },
            {
              name: 'Mikenzi',
              validation: true,
            },
            {
              name: 'Jake',
              validation: false,
            }
          ]
          setTimeout(() => res(friends), 1000)
        })
      }
    
  
  


function Activelist(props){

  return(
    
  <ul>
    
    {
  props.listA.map((element, i) =>(
  <span key = {i}>
  <li key = {element.name}>{element.name}</li>
  <button onClick = {() => {props.delete(element.name)}}>Remove</button>
  <button onClick = {() => {props.toggle(element.name)}}>Deactivate</button>
  </span>
  
  
  )
  )
    }
    
    </ul>
    
)

  }
  
function Deactivelist(props){
  
    
  return(
  
     
      <ul>
        {
  props.listB.map((element, i) =>(
  <span key = {i}>
  <li key = {element.name}>{element.name}</li>
  <button onClick = {() => {props.toggle(element.name)}}>Activate</button>
  </span>
  )
  )
}
  </ul>
  
)
  }
/*
  function Time(props){
    return(
      
      {
    
    setTimeout(() => {this.val(props.val)
      
    }, 600);
    }
  
  
  )
    }
*/
   

class Loading extends Component {
  constructor(){
    super(),
    this.state = {
      text: 'Loading',
    }
  }

  componentWillUnmount(){
clearTimeout(this.interval)
  }
   Val() {
    console.log("time function has been called")
    this.setState((prevState) =>{
  return({
    
    text: "Ho gaya loading",
  
  
  })
  
    })
    
  }
  render(){
    const vaib = "Loading..."
    console.log(this.props.sign)
return(

  <div>
<h1>{this.state.text} </h1>

  <div>
  
  {this.interval = setTimeout(() => { console.log("RUNNING")
    this.state.text === vaib ? this.setState({text: "Loading"}):
    this.setState((currentState) => {
     return{
      text: currentState.text + '.'
     }
    })
  }, 1000)}
</div>
    </div>

)

  }
}
class App extends Component {
  
constructor(){
  super(),
  this.state = {
    name1: "Active friends",
    name2: "INActive friends",
  input: "",
  loading: true,
  activefriends : [

  ],
  }

  this.Addd = this.Addd.bind(this)
  this.toggle = this.toggle.bind(this)
  this.clear = this.clear.bind(this)
  this.activate = this.activate.bind(this)
  this.delete = this.delete.bind(this)
}

componentDidMount(){
  console.log('--componentDidMount--')
  fetchactivefriends()
    .then((friends) => {
      this.setState({
       activefriends: friends,
        loading: false,
      })
  })

}
  update = e => {
  
      this.setState(
         { input: e.target.value }
      );
  
  }

  toggle(name){
    

    this.setState((prevState) => {
      const friend = prevState.activefriends.find((nm) => nm.name === name)
return{
  
  activefriends: prevState.activefriends.filter((fr) => fr.name !== name).concat([{
name,
validation: !friend.validation, 

  }]),

    
 
}

    })

    //console.log(this.state.inactivefriends)

  }

  clear(){
 this.setState(
   {
     activefriends: [],
   }
 )
   
 

  }

  delete(name) {

this.setState((prevState) => {

return{
  activefriends: prevState.activefriends.name.filter((fr) => fr !==name),
}

})


  }
activate(name){

this.setState((currentState) => {

  return(
    {
      activefriends: currentState.activefriends.concat(name),
      inactivefriends: currentState.inactivefriends.filter((fr) => fr !== name)
    }
  )

})

}

  Addd(){

this.setState((currentState) => {

  return(
  {activefriends : this.state.activefriends.concat([{

    name: this.state.input,
    validation:true,


  }]),
  input: "",

  }
)
}
)

  }

  render() {
    if(this.state.loading === true)
    return <Loading sign = {this.state.loading}/>
    else{
    return (
      <div>
        <h1>FRIENDIPEDIA</h1>
<input type = "text" placeholder = "friend" onChange= {this.update} value= {this.state.input} />
<button onClick = {this.Addd}>Add</button>
<br/>
<button onClick = {this.clear}>Clear all</button>
<br/><br/><br/>


  <h2>Active friends</h2>

       <Activelist listA = {this.state.activefriends.filter((fr) => fr.validation === true)}
        delete = {this.delete}
        toggle = {this.toggle}
       />
       <h2>INactive friends</h2>
       <Deactivelist listB = {this.state.activefriends.filter((fr) => fr.validation === false)}
       toggle = {this.toggle}
/> 
      </div>
    )
  }
  }
}


export default App;
