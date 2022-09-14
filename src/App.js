
import './App.css';
import SignUp from './Components/Register';
import Landing from './Components/Landing';
import { NavLink, Routes, Route, Link } from "react-router-dom";
import FoodCard from './Components/FoodCard';
import ResponsiveAppBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <ResponsiveAppBar />
      <FoodCard />
      <Routes>
      <Route
          path="signup"
          element={<SignUp/>}
        />
      </Routes>
    </div>
  );
}

export default App;
