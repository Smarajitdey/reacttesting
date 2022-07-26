import './App.css';
//import Keyparent from './components/keycheck/keyparent';
//import Vikas from './components/Hoc/vikas';
//import Ajay from './components/Hoc/ajay';
//import Akash from './components/Hoc/Akash';
//import Ajay from './components/Hoc2/Ajay';
import { Parent } from './components/pureComponent/Parent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Keyparent /> */}
        {/* <Vikas />
        <Ajay />
        <Akash /> */}
        {/* <Ajay /> */}
        <Parent />
      </header>
    </div>
  );
}

export default App;
