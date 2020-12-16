import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // state = {
  //   isLoading: false
  // }
  // const logout = () => {
  //   axiosWithAuth()
  //     .post("/logout", {
  //       userToken:localStorage.getItem('token')
  //     })
  //     .then((res) => {
  //       localStorage.removeItem("token");
  //       window.location.href = "/login";
  //     })
  //     .catch((err) => console.log(err));
  // };



  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link onClick={logout}>Logout</Link>
          </li> */}
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
          <li>
            <Link to="/addfriend">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute exact path="/addfriend" component={AddFriend} />

          {/* <PrivateRoute exact path="/addfriend" render={(props) => {
          return(<AddFriend {...props} />);
          }} /> */}


          <Route path="/login" render={(props) => {
            return(<Login {...props} setIsLoading={setIsLoading} />);
          }} />
          <Route render={(props) => {
            return(<Login {...props} setIsLoading={setIsLoading} />);
          }} />
        </Switch>
        {isLoading ? <p>Loading</p> : null}
      </div>
    </Router>
  );
}

export default App;





    {/* <PrivateRoute exact path="/addfriend" render={(props) => {
            <AddFriend {...props}  />}} /> */}


          {/* <Route exact path="/protected" component={GasPrices} /> 
          */}
 {/* <Route path="/login" component={Login} /> */}
          {/* <Route component={Login} /> */}

// i<3Lambd4
{/* <p>Loading</p> */}
// {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import Login from './components/Login';
// import GasPrices from './components/GasPrices';
// import PrivateRoute from './components/PrivateRoute';

// import { axiosWithAuth } from './utils/axiosWithAuth';

// function App() {
//   const logout = () => {
//     axiosWithAuth()
//       .post("/logout", {
//         userToken:localStorage.getItem('token')
//       })
//       .then((res) => {
//         localStorage.removeItem("token");
//         window.location.href = "/login";
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Router>
//       <div className="App">
//         <ul>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link onClick={logout}>Logout</Link>
//           </li>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>
//         <Switch>
//           {/* <Route exact path="/protected" component={GasPrices} /> 
//           */}
//           <PrivateRoute exact path="/protected" component={GasPrices} />
//           <Route path="/login" component={Login} />
//           <Route component={Login} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

