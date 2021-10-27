import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      itemInput: "",
      itemList: []
    }
  }
  
  handleItemInput=(event)=>{
    this.setState({
      itemInput: event.target.value
    });
  }

  handleAddItem=()=>{
    this.setState({
      itemList: [...this.state.itemList, this.state.itemInput],
      itemInput: ""
    })
  }
  render(){
    let itemsToDisplay = this.state.itemList.map((item, index)=>{
      return <div key={item + index} className="todo-item">{item}</div>
    });

    return (
      <div id="container">
        <div id="title">Todo App</div>
        <div id="todo-item-form">
          <input value={this.state.itemInput} onInput={this.handleItemInput}/>
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
