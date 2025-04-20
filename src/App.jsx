
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate  } from 'react-router-dom'
import Home from "./pages/home"
import Teachers from './pages/teachers';
import Parents from './pages/Parents';
import WritingCoach from './pages/WritingCoach';
import Layout from './pages/layout';
import PageNotFound from './pages/pageNotFound';
import Learners from './pages/learners';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>

        {/* Homepage */}
        <Route index element={<Home />} />
  
        {/* Redirect /home to / */}
        <Route path='/home' element={<Navigate to='/' replace />} />
  
        {/* Other Pages */}
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/learners' element={<Learners />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/writingcoach' element={<WritingCoach />} />
  
        {/* 404 Page */}
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} fallbackElement={<h1>Loading.......</h1>} />

    </>
  )
}

export default App
