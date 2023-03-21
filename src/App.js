import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import SearchPage from './Components/Search/SearchPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/search" element={<SearchPage/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
      </BrowserRouter>
  );
}

export default App;
