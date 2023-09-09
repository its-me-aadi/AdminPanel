import Home from './Screens/Home';
import Users from "../src/Screens/Users"
import Drivers from "../src/Screens/Drivers"
import NewOrders from './Screens/NewOrders';
import Login from './Screens/Login';
import VerifyDriver from "../src/Screens/VerifyDriver"
import Courier from "../src/Screens/CourierReq"
import { initializeApp } from "firebase/app";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCt4pl45InmC646VdB9BmojzVvfju6M7qM",
    authDomain: "portfolio-a8d27.firebaseapp.com",
    databaseURL: "https://portfolio-a8d27-default-rtdb.firebaseio.com",
    projectId: "portfolio-a8d27",
    storageBucket: "portfolio-a8d27.appspot.com",
    messagingSenderId: "875679457664",
    appId: "1:875679457664:web:d2b2eace2c37f967316165"
    // https://moveazy-2004-default-rtdb.firebaseio.com/
  };
  const app = initializeApp(firebaseConfig);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home app={app} />} />
        <Route path="/users" element={<Users app={app} />} />
        <Route path="/drivers" element={<Drivers app={app} />} />
        <Route path="/new-orders" element={<NewOrders app={app} />} />
        <Route path="/login" element={<Login app={app} />} />
        <Route path="/verify-driver" element={<VerifyDriver app={app} />} />
        <Route path="/courier-req" element={<Courier app={app} />} />
      </Routes>
    </Router>
  );
}

export default App;
