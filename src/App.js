import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import ViewList from './components/ViewList'
import UserForm from './components/UserForm'



class App extends Component {
  state = {
    data: [],
    ruta: 'lista'
  }

  constructor() {
    super()
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => this.setState({ data }))
  }

  seleccionaUsuario = id => {
    this.setState({
      ruta: 'formulario',
      usuarioSeleccionado: id
    })
  }

  render() {
    const { ruta, data } = this.state
    return (
      <div className="App">
        {ruta === 'lista' && <ViewList
          data={data}
          handleClick={this.seleccionaUsuario}
        />}
        {ruta === 'formulario' && <UserForm />}
      </div>
    );
  }
}

export default App;
