import { Route, Routes } from "react-router-dom";

import { Content } from './common/Content';
import { HomePage } from './pages/Home';
import { CardPage } from "./pages/Cart";
import './scss/app.scss'
import { ErrorPage } from './pages/Error';
import { OneCard } from './pages/OneCard';







function App() {
  
  return (
              <Routes>
                <Route path="/" element={<Content/>} >
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/cart" element={<CardPage/>}/>
                  <Route path="/*" element={<ErrorPage/>}/>
                  <Route path="/food/:id" element={<OneCard/>}/>
                </Route>
              </Routes>
  );
}

export default App;
