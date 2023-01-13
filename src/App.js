import { useState } from "react";
import AppRoute from "./Route/AppRoute";
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return <AppRoute />;
}

export default App;