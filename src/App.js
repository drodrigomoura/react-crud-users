import React, { Component } from 'react';
import './App.css';
import ViewList from './components/ViewList'
import UserForm from './components/UserForm'



class App extends Component {
  state = {
    ruta: 'lista'
  }

  render() {
    const { ruta } = this.state
    return (
      <div className="App">
        {ruta === 'lista' && <ViewList />}
        {ruta === 'formulario' && <UserForm />}
      </div>
    );
  }
}

export default App;
