import { useState } from "react";
import "./App.css";
import SignupForm from "./signupform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Signup Form</h1>
      <SignupForm />
    </>
  );
}

export default App;
