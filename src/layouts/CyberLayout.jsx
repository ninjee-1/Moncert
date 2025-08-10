import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CyberLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container xl mx-auto border-l border-r">
        <h5 className="text-center py-20 l-bold border-b">
          Төгс төгөлдөрийг хэвшил болгож 
          <br />
          <span className="gradient-text border-b-4">ДЭЛХИЙД ӨРСӨЛДӨНӨ!</span>
          <p className="s-regular-gray py-8 w-[90%] mx-auto">
            Standards give you the framework to implement change and improve
            your products, processes and people. Our certification services
            cover codes of practice, national, international and sector specific
            standards.
          </p>
        </h5>
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        {/* <main className="flex-grow">{children}</main> */}
      </div>
      <Footer />
    </div>
  );
}

export default CyberLayout;
