import { Routes, Route } from 'react-router-dom';

import Details from './routes/details/details.component';
import Home from './routes/home/home.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='details' element={<Details />} />
    </Routes>
  );
}

export default App;
