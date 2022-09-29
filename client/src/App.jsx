import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { SignupPage, SigninPage, Home, NotFound } from "./pages";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
    </div>
  );
}

export default App;
