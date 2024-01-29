import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './Home/Home';
import PostDetail from './Home/components/PostDetail';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/postDetail/:id' element={<PostDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
