import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import DebtsPage from "./page/DebtsPage";
import Transaction from "./page/Transaction";
import { ToastContainer } from "react-toastify";
import HomePage from "./page/HomePage";
import Layout from "./components/layout";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route element={<Layout/>}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/debts" element={<DebtsPage />} />
        <Route path="/transaction" element={<Transaction />} />
      </Route>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
