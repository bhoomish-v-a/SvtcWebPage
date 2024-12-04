import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Nav from './Nav';
import Card from './card';
import Head from './head';
import Banner from './banner';
import Contact from './Contact';
import Product from './Product';
import About from './About';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={
          <>
            <Head name="Sree Velmurugan Trading Company" />
            <Banner />
            <Head name="Product" />
            <div className="d-flex justify-content-around flex-wrap m-2 mb-2">
              <Card title="Electrical" img="/images/kun.jpeg" dis="An electric switch is a device that controls the flow of electricity in an electrical circuit by opening and closing it" />
              <Card title="Paint" img="/images/np.png" dis="Paint is a liquid mixture of pigments and binders that dries into a solid film on a surface" />
              <Card title="Plumbing" img="/images/watertecPipe.jpeg" dis="The Plumbing Shop maintains all plumbing fixtures in restrooms, labs, and kitchen areas." />
              <Card title="Hardware" img="/images/hard.jpeg" dis="Hardware and building supplies means a building or place the principal purpose of which is the sale or hire of goods or material" />
              <Card title="Electrical Appliance" img="/images/kun cab.jpeg" dis="An electric appliance is a device that controls the flow of electricity in an electrical circuit by opening and closing it" />
              <Card title="Drip & Rain hose" img="/images/kun.jpeg" dis="Drip irrigation is a water delivery method that uses small tubes to slowly water plants at their roots." />
            </div>
            
            
          </>
        } />
        <Route path="/electrical" element={
          <>
          
            <Head name="Our Products" />
            <Product />
            
          </>
          } />
          <Route path="/about" element={
          <>
            
            <Head name="About US" />
            <About />
          </>
          } />
      </Routes>
      
    </Router>
    <Head name="Contact us" />
    <Contact />
  </React.StrictMode>
);
reportWebVitals();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Nav from './Nav';
// import Card from './card';
// import Head from './head';
// import Banner from './banner';
// import reportWebVitals from './reportWebVitals';
// import Contact from './Contact';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Nav />
//     <Head name="Sree Velmurugan Trading Company"/>
//     <Banner />
//     <Head name="Product"/>
//     <div className="d-flex justify-content-around flex-wrap m-2 mb-2">
//             <Card title="Electrical" img="/images/kun.jpeg" dis="An electric switch is a device that controls the flow of electricity in an electrical circuit by opening and closing it"/>
//             <Card title="Paint" img="/images/np.png" dis="Paint is a liquid mixture of pigments and binders that dries into a solid film on a surface"/>
//             <Card title="Plumbling" img="/images/watertecPipe.jpeg" dis="The Plumbing Shop maintains all plumbing fixtures in restrooms, labs, and kitchen areas. "/>
//             <Card title="Hardware" img="/images/hard.jpeg" dis="Hardware and building supplies means a building or place the principal purpose of which is the sale or hire of goods or materia"/>
//             <Card title="Electrical Appliance" img="/images/kun cab.jpeg" dis="An electric applience is a device that controls the flow of electricity in an electrical circuit by opening and closing it"/>
           
//             <Card title="Drip & Rain hose" img="/images/kun.jpeg" dis="Drip irrigation, also known as trickle or micro irrigation, is a water delivery method that uses small tubes to slowly water plants at their roots."/>
//         </div>
//         <Head name="Contact Us"/>
//     <Contact />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
