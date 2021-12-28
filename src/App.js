import React, { Component } from 'react'
// CSS
import './App.css'
import Admin from './components/Admin'
import Header from './components/Header'
import recettes from './recettes'
import Card from './components/Card'
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }
  
  componentDidMount(){
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`,{
      context: this,
      state: 'recettes'
    })
  }
  
  componentWillUnmount(){
    base.removeBinding(this.ref)
  }
  chargerExemple = () => this.setState({recettes})

  render () {
     const cards = Object.keys(this.state.recettes)
     .map(key => <Card key={key} details={this.state.recettes[key]}/>)
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        <div className='cards'>
          <div className='card'>
            {cards}
          </div>
        </div>
        <Admin chargerExemple={this.chargerExemple}>
        </Admin>
      </div>
    )
  }
}

export default App
