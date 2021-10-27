import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      itemNameInput: "",
      itemList: []
    }
  }

  handleItemNameInput=(event)=>{
    this.setState({
      itemNameInput: event.target.value
    });
  }

  handleAddItem=()=>{
    this.setState({
      itemList: [...this.state.itemList, { name: this.state.itemNameInput, isComplete: false }],
      itemNameInput: ""
    })
  }

  handleIsComplete=(givenIndex)=>{

    let currentItemCopy = { ...this.state.itemList[givenIndex] };
    currentItemCopy.isComplete = !currentItemCopy.isComplete;

    let arrCopy = [ ...this.state.itemList ];
    arrCopy[givenIndex] = currentItemCopy;

    this.setState({
      itemList: arrCopy
    });



    // let newArr = this.state.itemList.map((item, itemIndex)=>{
    //   if(givenIndex === itemIndex){
    //     return {
    //       ...item,
    //       isComplete: !item.isComplete
    //     }
    //   } else {
    //     return item;
    //   }
    // });
    // this.setState({
    //   itemList: newArr
    // });
  }

  render(){
    let itemsToDisplay = this.state.itemList.map((item, index)=>{
      return (
        <div 
          key={item.name + index} 
          style={{textDecoration: item.isComplete ? "line-through" : "none"}} 
          onClick={()=>this.handleIsComplete(index)} 
          className="todo-item"
        >
            {item.name}
        </div>
      )
      });

    return (
      <div id="container">
        <div id="title">Todo App</div>
        <div id="todo-item-form">
          <input value={this.state.itemNameInput} onInput={this.handleItemNameInput}/>
          <button onClick={this.handleAddItem}>Add Item</button>
        </div>
        <div id="todo-list">
          { itemsToDisplay }
        </div>
      </div>
    );
  }
}

export default App;
