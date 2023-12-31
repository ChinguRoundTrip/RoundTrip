import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trips from "./components/TripsPage";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
