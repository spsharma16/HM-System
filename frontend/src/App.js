import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import about from "./about";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import ManageUsers from "./Pages/admin/ManageUsers";
import PatientDashboard from './Pages/patient/PatientDashboard';
import BookAppointment from "./Pages/patient/BookAppointment";
import DoctorDashboard from './Pages/Doctor/DoctorDashboard';
import Profile from "./Pages/Profile";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import { ProvideAuth } from "./hooks/useAuth";


const App = ()=> {
  return (
    
    <ProvideAuth>
    <Router>
        <Navbar/>
      <Switch>
         <Route path='/' exact component={Home}/>
         <Route path= "/login" component={Login}/>
         <Route path="/register" component ={Register}/>
         <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
                <PrivateRoute path="/admin/users" component={ManageUsers} />
                <PrivateRoute path="/patient/dashboard" component={PatientDashboard} />
                <PrivateRoute path="/patient/book-appointment" component={BookAppointment} />
                <PrivateRoute path="/doctor/dashboard" component={DoctorDashboard} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/about" component={about}/>
               
      </Switch>
      <Footer/>
    </Router>
    </ProvideAuth>
    
  );
};

export default App;
