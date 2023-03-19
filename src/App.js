import { Routes, Route } from 'react-router-dom';

import AddService from './routes/addService/addService.component';
import EditService from './routes/editService/editService.component';
import DetailsPage from './routes/details-page/details-page.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/signIn/signIn.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='details' element={<DetailsPage />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='add-service' element={<AddService />} />
        <Route path='edit-service' element={<EditService />} />
      </Route>
    </Routes>
  );
}

export default App;
