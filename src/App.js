import React , {Component}from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="header">
            <h1>React Clocks</h1>
        </header>

        <main className="main">
          <Clock timezone="0" country ="Rome" img= "https://images.unsplash.com/photo-1552076170-3b3f5c8fe1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80.svg"/>
          <Clock timezone="-6" country ="New York" img ="https://images.unsplash.com/photo-1532554394935-2fa23ee0f559?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80"/>
          <Clock timezone="9" country ="Tokyo" img="https://images.unsplash.com/photo-1576909367324-d257727c4f20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/> 
        </main>
      </div>
    );
  }
}

export default App;
