import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const tabs = [
  { label: "Менежментийн тогтолцооны баталгаажуулалт", value: "approve" },
  { label: "Ажилтны баталгаажуулалт", value: "employee" },
  {
    label: "Бүтээгдэхүүн үйлчилгээний баталгаажуулалт",
    value: "product",
  },
];

function ConfirmationLayout({ children }) {
  const [activeTab, setActiveTab] = useState("approve");
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname.split("/").pop(); // "leadership" гэх мэт

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container xl mx-auto border-l border-r">
        <h5 className="text-center my-20 l-bold">
          <span className="gradient-text">МЕНЕЖМЕНТИЙН ТОГТОЛЦООНЫ</span> <br />
          <span className="border-b-4">БАТАЛГААЖУУЛАЛТ</span>
        </h5>
        <nav className="">
          <div className="flex justify-evenly flex-wrap border-b border-t">
            {tabs.map((tab) => (
              <div
                key={tab.value}
                onClick={() => navigate(`/confirm/${tab.value}`)}
                className={`py-2 px-4 s-bold-no-color border-t ${
                  currentPath === tab.value
                    ? "border-t-2 border-grayOne text-grayOne"
                    : "text-grayOne hover:text-grayOne"
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </nav>
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        {/* <main className="flex-grow">{children}</main> */}
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmationLayout;
