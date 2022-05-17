import './App.css';
import Basket from './component/basket';
import Header from './component/header';
import Main from './component/main';


function App() {
  return (
    <div className="App">
    <Header></Header>
      <div>
      <Main></Main>
      <Basket></Basket>
        
      </div>
    </div>
  );
}

export default App;
