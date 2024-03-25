
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Blogs from './pages/Blogs.jsx';
import BookMarks from './pages/BookMarks.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/blogs',
        loader: ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
        element: <Blogs></Blogs>
      },
      {
        path: '/bookmarks',
        element: <BookMarks></BookMarks>
      }
    ]
  }
  
]);


  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
    // <App></App>
  )
