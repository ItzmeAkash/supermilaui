import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import profileImage from '../../Assets/profile.png';

const NavBar = () => {
  return (
    <nav className="NavBar navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="NavBar-left navbar-brand">
          <h1>Hi,Akash</h1>
        </div>
       
          <div className="NavBar-right ml-auto d-flex align-items-center">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <button className="logout-button btn btn-outline-light" >Logout</button>
          </div>
      
      </div>
    </nav>
  );
}

export default NavBar;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './NavBar.css';
// import profileImage from '../../Assets/profile.png';

// const NavBar = () => {
//   return (
//     <nav className="NavBar navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">Hi, Akash</a>
//         <div className="NavBar-right d-flex align-items-center">
//           <img src={profileImage} alt="Profile" className="profile-image rounded-circle" />
//           <button className="logout-button btn btn-outline-light ms-2">Logout</button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
