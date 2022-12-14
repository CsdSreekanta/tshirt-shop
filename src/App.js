import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import OrderReview from './components/OrderReview/OrderReview';
import GrandPa from './components/GrandPa/GrandPa';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
     </Routes>
    </div>
  );
}

export default App;
