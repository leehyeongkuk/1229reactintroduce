import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Route, Routes, Link } from 'react-router-dom';
import Header from './component/Hd';
import Lhkswiper from './component/Lhkswiper';
import About from './component/About';
import Preinterview from './component/Preinterview';
import Contact from './component/Contact';
import Foam from './component/Foam';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App" id="top">
      <Header></Header>
      <Lhkswiper></Lhkswiper>
      <About></About>      
      <Preinterview contentid="preInterview" objnm="preinterview" title="사전인터뷰" ></Preinterview>
      <Contact></Contact>
      <Foam></Foam>
      <Footer></Footer>
    </div>
  );
}
export default App;