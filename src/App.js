import React, { Component } from 'react'
// CSS
import './App.css'
import Admin from './components/Admin'
import Header from './components/Header'
import recettes from './recettes'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {}
  }

  chargerExemple = () => this.setState({recettes})

  render () {
    return (
      <div className='box'>
        <Header pseudo={this.state.pseudo}/>
        <div className='cards'>
          <div className='card'>
            <h2>Une Carte</h2>
          </div>
        </div>
        <Admin chargerExemple={this.chargerExemple}>
        </Admin>
      </div>
    )
  }
}

export default App
