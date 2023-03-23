import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import useToken from "./hooks/useToken";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  const [token] = useToken()
  const {modal} = useSelector(state => state.modal)
  return (
    <div>
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <Modal />}
        <Routes>
          <Route path="/" element={!token?.token ? <Link to={'/auth'} /> : <Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
