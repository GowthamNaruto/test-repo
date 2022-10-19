import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './containers/Home/Home';
import CentralBank from './containers/CentralBank/CentralBank';
// import CentralBank from ''
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/central-bank" component={CentralBank} />
    </Routes>
  );
}

export default App;
