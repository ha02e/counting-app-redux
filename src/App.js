import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "hy", password: "1234" } });
  };

  return (
    <div className="wrapper">
      <div className="login-section">
        <h3>{id}님, 안녕하세요!</h3>
        <button onClick={login}>로그인</button>
      </div>
      <div className="counter-section">
        <button onClick={decrease}>
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/stickers/100/000000/down-squared.png"
            alt="down-squared"
          />
        </button>
        <h1>{count}</h1>
        <button onClick={increase}>
          <img
            width="60"
            height="60"
            src="https://img.icons8.com/stickers/100/up-squared.png"
            alt="up-squared"
          />
        </button>
      </div>

      <Box />
    </div>
  );
}

export default App;
