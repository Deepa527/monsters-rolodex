import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();
    this.state= {
      monsters: [],
      searchField: '',
      title: ''
    }; 
  }
  handleChange = (e) => this.setState({searchField: e.target.value, title: e.target.value});
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => {this.setState({monsters: user})});
  }
  render() {
    const {monsters, searchField,title} = this.state;
    // const filteredMonsters = monsters.filter( monster => 
    //   monster.name.toLowerCase().includes(searchField.toLowerCase())
    // );
    return (
    <div className="App">
      <h1>{title}</h1>
      <SearchBox placeholder='search here..' 
                handleChange= {this.handleChange}>
      </SearchBox>
      <CardList monsters= {monsters}/>   
    </div>
  );}
}

export default App;
