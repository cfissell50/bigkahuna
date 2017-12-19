import React, { Component } from 'react';
import logo from './Pokeball.png';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const styleText = {
  textTransform: 'uppercase',
  color: 'red',
  fontFamily: 'Chalkduster',
}
class App extends Component {
  state = {
    characters: null
  };



  componentDidMount(){
   const that = this;
   fetch('https://pokeapi.co/api/v2/pokemon-form/?limit=151&offset=0')
       .then((response) => response.json())
       .then((responseJson) => {
           that.setState({characters: responseJson.results})
       })
       .catch((error) => {
           console.error(error);
       });
  }

  constructor(props) {
     super(props);
     this.state = {open: false};
   }

  //
  renderCharacters(){
      const { characters } = this.state;
      const RaisedButtonExampleSimple = () => (
        <div>
          <RaisedButton label="Default" style={style} />
          <RaisedButton label="Primary" primary={true} style={style} />
          <RaisedButton label="Secondary" secondary={true} style={style} />
          <RaisedButton label="Disabled" disabled={true} style={style} />
          <br />
          <br />
          <RaisedButton label="Full width" fullWidth={true} />
        </div>
  );

      if(characters && characters.length > 0){
          return characters.map((obj, key) =>{
              return <a href={'https://en.wikipedia.org/wiki/' + obj.name}><p style={styleText} key={key}>{obj.name}</p></a>


          })
      }
  }

   render() {
     return (
       <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Pokemon Info</h1>
         </header>
           {this.renderCharacters()}
       </div>

     );
   }
 }

export default RaisedButtonExampleSimple;
export default App;
