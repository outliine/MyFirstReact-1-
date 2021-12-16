import logo from '../zdrive1.png';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Runterra!
        </p>
        <p>Are you ready to experience Hextech magic?</p>
        <Button/>
        <a
          className="App-link"
          href="https://arcane.com/en-sg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LEARN MORE ABOUT ARCANE
        </a>
      </header>
    </div>
  );
}

export default Home;