import './App.css';
import Basket from './component/basket';
import Header from './component/header';
import Main from './component/main';
import Data from './Data';


export default function App() {
  const {products}= Data;
  return (
    <div className="App">
    <Header></Header>
      <div className='row'>
      <Main produts={products}></Main>
      <Basket></Basket>
        
      </div>
    </div>
  );
}


