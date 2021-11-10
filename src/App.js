import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         hello peepol!
        </p>
        <p>
         -Jennard
        </p>
        <Greet name = "Peter" heroName="Spider man"/>
        <Message/>
        <Greet/>
        <Button/>
        <Greet name = "Tony" heroName="Iron man"/>
        <Greet name = "Thor" heroName="Son of Odin"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"   
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

