import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AddService from './routes/addService/addService.component';
import EditService from './routes/editService/editService.component';
import DetailsPage from './routes/details-page/details-page.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/signIn/signIn.component';
import EditOpeningHours from './routes/editOpeningHours/editOpeningHours.component';

import { onAuthStateChangeListener } from "./utils/firebase";
import { setCurrentUser } from './store/user/user.action';
import AddPost from './routes/addPost/addPost.component';
import ServicesPage from './routes/servicesPage/servicesPage.component';
import PostsPage from './routes/postsPage/postsPage.component';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
}, []);
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='details' element={<DetailsPage />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='add-service' element={<AddService />} />
        <Route path='edit-service' element={<EditService />} />
        <Route path='edit-opening-hours' element={<EditOpeningHours />} />
        <Route path='add-post' element={<AddPost />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='posts' element={<PostsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
