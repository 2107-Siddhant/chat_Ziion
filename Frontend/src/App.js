import { Route, Routes } from "react-router";
// import HomeFeature from "./Components/Home/Home_feature";
// import LeverageChat from './Components/Home/LeverageChat'
// import Pricing from "./Components/Pricing/Pricing";
// import Footer from "./Components/Footer/Footer";
// import SignUp1 from "./Components/signUp_Login/SignUp1";
// import SignUp2 from "./Components/signUp_Login/signUp2";
import SignUpForm from "./Components/signUp_Login/signUpForm";


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <NavBar/> */}
      {/* <HomeFeature />
      <LeverageChat/>
      <Pricing/>
      <Footer/> */}

      {/* <SignUp1/> */}
      {/* <SignUp2/> */}

      <SignUpForm/>
   
      <Routes>
        <Route>
          {/* <Route path="/" element={<Navbar />} /> */}
          {/* <Route path="/apps" element= */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;