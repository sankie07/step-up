import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Feature from './Feature.jsx'
import Solution from './Solution.jsx'
import Testimonials from './Testimonials.jsx'
import YourComponent from './YourComponent.jsx'
import Blog from './Blog.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Feature />
    <Solution />
    <Testimonials />
    <YourComponent />
    <Blog />
    <Footer />
  </React.StrictMode>,
)
