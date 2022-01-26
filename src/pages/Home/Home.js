import React from 'react'
import CardList from '../../components/Card-List/Card-List.component';
import Search from '../../components/Search/Search.component';
import './Home.styles.css'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters: []
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }
   
    render(){
        var {monsters} = this.state
        return(
            <>
            <div className='App'>
                <h1>Monsters Rolodex</h1>
               
                <p>{this.state.monsters.map(monster => monster.id)}</p>
                <CardList monsters={monsters} />
                
            </div>
            </>
        )
    }
}

export default Home