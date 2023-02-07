import {Route, Navigate,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage, { blogLoader } from './pages/BlogPage';
import Layout from './components/Layout';
import SinglePage, { postLoader } from './pages/SinglePage';
import CreatePost, { createPostAction } from './pages/CreatePost';
import EditPost, { updatePostAction } from './pages/EditPost';
import LoginPage from './pages/LoginPage';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import ErrorPage from './pages/Errorpage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path='about' element={<AboutPage />} />
    <Route path='about-us' element={<Navigate to="/about" replace />} />
    <Route path='posts' element={<BlogPage />} loader={blogLoader} errorElement={<ErrorPage/>}/>
    <Route path='posts/:id' element={<SinglePage/>} loader={postLoader}/>
    <Route path='posts/:id/edit' element={<EditPost />} loader={postLoader} action={updatePostAction}/>
    <Route path='posts/new' element={
      <RequireAuth>
        <CreatePost />
      </RequireAuth>
    } action={createPostAction} />
    <Route path="login" element={<LoginPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
))

function App(){
  return(
    <>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    </>
  )
}

export default App;
