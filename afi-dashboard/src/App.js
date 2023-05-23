import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChartHeader, Header, Sidebar, Navbar } from "./components";
import { Form, Bookings, Calendar, Dashboard } from "./pages";
import { useStateContext } from "./openContext";
import "./App.css"


function App() {
  

  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
        {activeMenu ? (
            <div className="w-72 fixed sidebar  bg-main-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 sidebar">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? " min-h-screen md:ml-72 w-full"
                : " w-full min-h-screen flex-2"
            }
          >
          
          <div className="fixed md:static  navbar w-full">
              <Navbar />
            </div>

            <div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </div>
          </div>
        </div>
        
      </BrowserRouter>      
    </div>
  );
}

export default App;
