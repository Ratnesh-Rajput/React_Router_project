import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Github from './components/Github'
import User from './components/User/User'

// const router =createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path : "",
//         element: <Home />
//       },
      
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       },

//     ],
//   }
// ])

 const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element= {<Layout/>} >
        <Route path='' element={<Home/>}/>
        <Route path='about' element={ <About/>}/>
        <Route path='contact' element ={<Contact/>}/>
        <Route path='github' element ={<Github/>}/>
        <Route path='user/:userid' element ={<User/>}/>
      </Route>
  )
 ) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
