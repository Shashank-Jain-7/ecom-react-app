import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home';
import { About } from './components/pages/About';
import ViewProduct from './components/module/ViewProduct';
import LearnHooks from './components/module/LearnHooks';
function App() {
  return (
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/viewproduct" element={<ViewProduct/>} />
            <Route path="/learn" element={<LearnHooks/>} />
   

          </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
