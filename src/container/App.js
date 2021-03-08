import React, { Component } from 'react';
import CardList from '../component/CardList';
//import {robots} from "./robots";
import SearchBox from "../component/SearchBox";
import './App.css'
import Scroll from '../component/Scroll'
class App extends Component{
    constructor() {
        super();
        this.state = {
            robots : [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))

    }
    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
    }
    render(){
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (!robots.length){
                    return(
                    <div>
                        <h1 className='tc title f2'>Loading ...</h1>
                    </div>
                )
            }
            else
            {
                return(
                    <div className= 'tc'>
                        <h1 className='title f2'>Robot friends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filterRobots} />
                        </Scroll>
                    </div>
            )
        }
    }
 }

export default App;