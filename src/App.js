import './App.css';
import Keyparent from './components/keycheck/keyparent';
import Vikas from './components/Hoc/vikas';
import Ajay from './components/Hoc/ajay';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Keyparent /> */}
        <Vikas />
        <Ajay />
      </header>
    </div>
  );
}

export default App;
