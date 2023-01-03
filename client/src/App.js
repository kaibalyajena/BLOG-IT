import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </Router>
  );
}

export default App;
