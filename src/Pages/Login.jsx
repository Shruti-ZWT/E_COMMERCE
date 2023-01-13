import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import mask from "../images/mask.png";



export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    setError("");
    setUsername("");
    setPassword("");

    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: userName,
        password: password
      }
    })
      .then(res => {
        console.log(res.data.token);
        // setToken(res.data.token);
        localStorage.setItem("userToken" , res.data.token);
        localStorage.setItem("username",userName)
        navigate("/");
      })
      .catch(err => {
        console.log(err.response);
        setError(err.response.data);
      });


      if(userName === "" || password === ""){
        setError("Field Cannot Be Empty!!!")
      }
  };
  return (
    <>
    <header>
      <h1> Shopping page</h1>
    </header>
    <div className="login">
        {/* <img src="./images/mask.png" className="mask" alt="mask" /> */}
        <img src={mask} className="mask" alt="mask" />
        {/* <img 
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F007%2F033%2F146%2Foriginal%2Fprofile-icon-login-head-icon-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F7033146-profile-icon-login-head-icon&tbnid=ASh2L_WtxeFGSM&vet=12ahUKEwjuldKD9L78AhVHzqACHWQ3D5UQMygPegUIARCKAg..i&docid=KAhTaBLdHsB2fM&w=1920&h=1920&q=icon%20profile%20picture&ved=2ahUKEwjuldKD9L78AhVHzqACHWQ3D5UQMygPegUIARCKAg"
         alt="mask" className="mask" /> */}
        <h1> Login Here </h1>
        <p>UserName</p>
           <input
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Email"
      />
      <p>Password</p>
      <input
        placeholder="Enter Password"
        value={password}
        type = "password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
      {error && <strong>{error}</strong>} </div>
      <div>
      <button className="loginbtn" onClick={loginHandler}>Submit </button>
      </div>
      <p className="forget">Forget your password?</p>
    </div>
    </>
  );
}
