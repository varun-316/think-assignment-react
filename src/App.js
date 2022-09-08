import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      {/* <Home /> */}
    </div>
  );
}

export default App;
