import './App.scss';
import { Goals } from './components/Goals/Goals';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Goals />
    </div>
  );
}

export default App;
