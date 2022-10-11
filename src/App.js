import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import SendMessage from './components/SendMessage';

function App() {
  return (
    <div className="App">
     <Header />
     <MessageBox />
     <SendMessage />
    </div>
  );
}

export default App;
