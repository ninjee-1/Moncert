import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import {
  Sunrise,
  Target,
  BookOpen,
  Package,
  Youtube,
  Archive,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
} from "react-feather";
import Logo from "../assets/img/Logo.png";

const menus = [
  {
    id: 1,
    name: "Бидний тухай",
    url: "/about",
    cols: 2,
    children: [
      {
        id: 1,
        name: "Удирдлага, Зохион байгуулалт",
        url: "/about/leadership",
        icon: <Sunrise className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 2,
        name: "Аудиторууд",
        url: "/about/auditors",
        icon: <BookOpen className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 3,
        name: "Менежментийн багийн гишүүд",
        url: "/about/management",
        icon: <Target className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 4,
        name: "Баталгаажсан байгууллагууд",
        url: "/about/approved",
        icon: <Archive className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 5,
        name: "Итгэмжлэл",
        url: "/about/accreditation",
        icon: <Package className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 6,
        name: "Дүрэм журмууд",
        url: "/about/rules",
        icon: <Youtube className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
    ],
  },
  {
    id: 2,
    name: "Баталгаажуулалт",
    url: "/confirm",
    cols: 3,
    children: [
      {
        id: 1,
        name: "Менежментийн тогтолцооны баталгаажуулалт",
        url: "/confirm/approve",
        icon: <Sunrise className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 2,
        name: "Ажилтны баталгаажуулалт",
        url: "/confirm/employee",
        icon: <Target className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 3,
        name: "Бүтээгдэхүүний үйлчилгээний баталгаажуулалт",
        url: "/confirm/product",
        icon: <Package className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
    ],
  },
  {
    id: 3,
    name: "Кибер аюулгүй байдал",
    url: "/cyber-secutiry",
    cols: 2,
    children: [
      {
        id: 1,
        name: "Мэдээллийн аюулгүй байдлын аудит",
        url: "/cyber-secutiry",
        icon: <Sunrise className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 2,
        name: "Кибер аюулгүй байдлын эрсдэлийн үнэлгээ",
        url: "/cyber-secutiry",
        icon: <Sunrise className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
    ],
  },
  {
    id: 4,
    name: "Шийдэл",
    url: "/standard",
    cols: 3,
    children: [
      {
        id: 1,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Sunrise className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 2,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Sunrise className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 3,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Sunrise className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 4,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Target className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 5,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Target className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 6,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Target className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 7,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Package className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 8,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Package className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
      {
        id: 8,
        name: "ISO 9001:2015",
        url: "/standard/iso",
        icon: <Package className="iconBlue" />,
        desc: "Demo Description - t non deserunt ullamco est sit aliqua amet sint.",
      },
    ],
  },
  {
    id: 5,
    name: "Тогтвортой хөгжил",
    url: "#",
  },
  {
    id: 6,
    name: "Мэдээ мэдээлэл",
    url: "#",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const btnName = "Үнийн санал авах";
  const mobileMenuRef = useRef(null);

  const toggleMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        menuOpen
      ) {
        setMenuOpen(false);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setOpenSubMenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full shadow text-black p-4 s-regular-gray relative">
      <div className="container xl mx-auto">
        <div className="z-50  flex top ptop lg:justify-end lg:s-regular-gray mt-5 mb-2 underline justify-center sm:text-xs text-[10px]">
          <div>+(976)-70115522</div>
          <div>Холбоо барих</div>
          <div>Нэвтрэх/Бүртгүүлэх</div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex text-xl s-regular-gray items-center">
            <a href="/" className="mr-6 z-50">
              <img src={Logo} alt="React Logo" />
            </a>

            <nav className="space-x-6 hidden nav-res">
              {menus.map((menu, index) => (
                <div key={index} className="group">
                  <a href={menu.url} className="hover:underline transition">
                    {menu.name}
                  </a>
                  {menu.children && (
                    <div className="absolute left-0 bg-white shadow-md z-30 hidden group-hover:block w-screen top-[100px] translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div
                        className={`container xl mx-auto px-14 py-10 grid grid-cols-${menu.cols}`}
                      >
                        {menu.children?.map((submenu, subindex) => (
                          <a
                            key={subindex}
                            href={submenu.url}
                            onClick={() => {
                              setMenuOpen(false);
                              setOpenSubMenu(null);
                            }}
                            className="block px-4 py-2 hover:bg-gray-100 rounded"
                          >
                            <div className="flex items-start">
                              {submenu.icon}
                              <div className="pl-3">
                                <p className="s-bold-gray">{submenu.name}</p>
                                <p>{submenu.desc}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="z-50 hidden nav-btn">
            <Button name={btnName} />
          </div>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-btn-m z-50 mobile-nav"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {menuOpen && (
          <div
            ref={mobileMenuRef}
            className="top-0 left-0 w-full  bg-white z-40 p-6 overflow-y-auto"
          >
            <nav className="space-y-5 flex flex-col container xl mx-auto">
              {menus.map((menu, index) => (
                <div key={index} className="group">
                  <a
                    href={menu.url}
                    onClick={(e) => {
                      e.preventDefault();
                      if (menu.children) {
                        toggleMenu(menu.id);
                      } else {
                        setMenuOpen(false);
                        setOpenSubMenu(null);
                      }
                    }}
                    className="hover:underline transition flex items-center space-x-2"
                  >
                    <p>{menu.name}</p>
                    <p>
                      {menu.children ? (
                        openSubMenu === menu.id ? (
                          <ArrowDown width="20px" />
                        ) : (
                          <ArrowRight width="20px" />
                        )
                      ) : (
                        ""
                      )}
                    </p>
                  </a>
                  {menu.children && (
                    <div
                      className={`mt-3 ml-4 space-y-3 ${
                        openSubMenu === menu.id ? "block" : "hidden"
                      }`}
                    >
                      {menu.children?.map((submenu, subindex) => (
                        <a
                          key={subindex}
                          href={submenu.url}
                          onClick={() => {
                            setMenuOpen(false);
                            setOpenSubMenu(null);
                          }}
                          className="block px-4 py-2 hover:bg-gray-100 rounded"
                        >
                          <div className="flex items-start">
                            {submenu.icon}
                            <div className="pl-3">
                              <p className="s-bold-gray ">{submenu.name}</p>
                              <p>{submenu.desc}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="z-50 pt-4">
                <Button name={btnName} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
