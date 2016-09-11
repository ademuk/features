import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  handleAddProjectClick = () => {
    const projects = this.state.projects;
    this.setState({
      'projects': projects.concat([{
        id: Math.random(),
        name: 'foo'
      }])
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Features</h1>
        </header>
        <Projects projects={this.state.projects} onAddProjectClick={this.handleAddProjectClick}></Projects>
      </div>
    );
  }
}

export default App;
