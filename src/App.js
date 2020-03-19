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

  actualizarNuevoUsuario = (id, values) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
      .then(() => {
        const newData = this.state.data.map(x => x.id === id ? values : x)
        this.setState({
          data: newData,
          ruta: 'lista'
        })
      })
  }

  agregarNuevoUsuario = usuario => {
    axios.post('https://jsonplaceholder.typicode.com/users', usuario)
      .then(({ data }) => {
        const newData = this.state.data.concat(data)
        this.setState({
          data: newData,
          ruta: 'lista'
        })
      })
  }

  nuevoUsuario = () => {
    this.setState({ ruta: 'formulario' })
  }


  seleccionaUsuario = id => {
    this.setState({
      ruta: 'formulario',
      usuarioSeleccionado: id
    })
  }




  render() {
    const { ruta, data, usuarioSeleccionado } = this.state
    const valoresIniciales = usuarioSeleccionado && data.find(x => x.id === usuarioSeleccionado)

    return (
      <div className="App">
        {ruta === 'lista' && <ViewList
          data={data}
          handleClick={this.seleccionaUsuario}
          nuevoUsuario={this.nuevoUsuario}
        />}
        {ruta === 'formulario' && <UserForm
          handleUpdate={this.actualizarNuevoUsuario}
          handleSubmit={this.agregarNuevoUsuario}
          valoresIniciales={valoresIniciales || {}}
        />}
      </div>
    );
  }
}

export default App;
