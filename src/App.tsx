import React from 'react';
// import MyCard from './pages/ChatPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from 'pages/DashboardPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage/>}/>
      </Routes>
    </Router>
    </>
    // <Provider store={store}>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginForm/>} />
    //     {/* <Route path="/signup" element={<SignupForm/>} /> */}
    //     <Route path="/chatSection" element={<MyCard/>} />
    //     <Route path="/orderSection" element={<OrderPage/>} />
    //     <Route path="/productSection" element={<ProductPage/>} />
    //     {/* <Route path="/" element={<LoginForm/>} /> */}
    //   </Routes>
    // </Router>
    // </Provider>
  );
}

export default App;
