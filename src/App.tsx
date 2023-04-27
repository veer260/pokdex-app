import { useEffect, useState } from "react";

// import "./App.css";
import Background from "./components/Background";
import Navbar from "./sections/Navbar";
// import Wrapper from "./sections/Wrapper";
import Footer from "./sections/Footer";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import About from "./pages/About";
import MyList from "./pages/MyList";
import Compare from "./pages/Compare";
import Pokemon from "./pages/Pokemon";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { clearToasts } from "./app/slices/AppSlice";

function App() {
  const { toasts } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (toasts.length) {
      const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 2000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      toasts.map((message) => {
        console.log(message);
        toast(message, toastOptions);
      });
      dispatch(clearToasts());
    }
  }, [toasts]);

  return (
    <div className="relative font-raleway ">
      <Background />

      <div className="bg-[rgba(4,6,20,0.55)] h-[100vh] text-white flex flex-col justify-between backdrop-blur-md overflow-y-hidden">
        <Navbar />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<MyList />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
        {/* <Wrapper /> */}
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
