import './css/App.css';
import LoginSection from './LoginSection';
import Main from './Main';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
        <LoginSection />
        <Register />
      </header>
    </div>
  );
}

export default App;
