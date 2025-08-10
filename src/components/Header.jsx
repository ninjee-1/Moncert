import { useState } from "react";
import Button from "./Button";
import {
  Sunrise,
  Target,
  BookOpen,
  Package,
  Youtube,
  Archive,
  Menu,
  X,
} from "react-feather";
import Logo from "../assets/img/Logo.png";

const menus = [
  {
    id: 1,
    name: "Бидний тухай",
    url: "/about",
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

  const toggleMenu = (id) => {
    setOpenSubMenu(openSubMenu === id ? null : id); // нэг дарвал нээж/хаана
  };
  return (
    <header className="w-full shadow text-black p-4 s-regular-gray relative">
      <div className="container xl mx-auto">
        <div className="z-50  flex top space-x-6 lg:justify-end lg:s-regular-gray mt-5 mb-2 underline justify-center sm:text-xs text-[10px]">
          <div>+(976)-70115522</div>
          <div>Холбоо барих</div>
          <div>Нэвтрэх/Бүртгүүлэх</div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex text-xl s-regular-gray items-center">
            <a
              href="/"
              className={`mr-6 z-50 ${
                menuOpen ? "left-0 top-0 fixed m-5" : ""
              }`}
            >
              <img src={Logo} alt="React Logo" />
            </a>

            <nav className="space-x-6 hidden nav-res">
              <div className="group">
                <a href="/about" className="hover:underline transition">
                  Бидний тухай
                </a>
                {/* Submenu - Initially hidden, shown on hover */}
                <div className="absolute left-0 bg-white shadow-md z-30 hidden group-hover:block w-screen top-[110px]">
                  <div className="container xl mx-auto px-14 py-10 grid grid-cols-2">
                    <a
                      href="/about/leadership"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Удирдлага, Зохион байгуулалт
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/auditors"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <BookOpen className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">Аудиторууд</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/management"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Менежментийн багийн гишүүд
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/approved"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Archive className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Баталгаажсан байгууллагууд
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/accreditation"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">Итгэмжлэл</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/rules"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Youtube className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">Дүрэм журмууд</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group">
                <a href="/confirm" className="hover:underline">
                  Баталгаажуулалт
                </a>
                {/* Submenu - Initially hidden, shown on hover */}
                <div className="absolute left-0 bg-white shadow-md z-30 hidden group-hover:block w-screen top-[110px]">
                  <div className="container xl mx-auto px-14 py-10 grid grid-cols-3">
                    <a
                      href="/confirm/approve"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Менежментийн тогтолцооны баталгаажуулалт
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/confirm/employee"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">Ажилтны баталгаажуулалт</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/confirm/product"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Бүтээгдэхүүний үйлчилгээний баталгаажуулалт
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group">
                <a href="/cyber-secutiry" className="hover:underline">
                  Кибер аюулгүй байдал
                </a>
                <div className="absolute left-0 bg-white shadow-md z-30 hidden group-hover:block w-screen top-[110px]">
                  <div className="container xl mx-auto px-14 py-10 grid grid-cols-3">
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Мэдээллийн аюулгүй байдлын аудит
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Кибер аюулгүй байдлын эрсдэлийн үнэлгээ
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group">
                <a href="/standard" className="hover:underline">
                  Шийдэл
                </a>
                {/* Submenu - Initially hidden, shown on hover */}
                <div className="absolute left-0 bg-white shadow-md z-30 hidden group-hover:block w-screen top-[110px]">
                  <div className="container xl mx-auto px-14 py-10 grid grid-cols-3">
                    <a
                      href="/standard/iso"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* <a href="/contact">Шийдэл</a> */}
              <a href="/contact">Тогтвортой хөгжил</a>
              <a href="/contact">Мэдээ мэдээлэл</a>
            </nav>
          </div>
          <div className="z-50 hidden nav-btn">
            <Button name={btnName} />
          </div>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className={`nav-btn-m z-50  ${
              menuOpen ? "fixed right-0 top-0 m-5" : ""
            }`}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-[100vh] bg-white z-40 p-6 overflow-y-auto ">
            <nav className="space-y-5 flex flex-col mt-20">
              {menus.map((menu, index) => (
                <div key={index} className="group">
                  <a
                    href={menu.url}
                    onClick={() => toggleMenu(menu.id)}
                    className="hover:underline transition"
                  >
                    {menu.name}
                  </a>
                  <div
                    className={` left-0 bg-white shadow-md z-40  group-hover:block ${
                      openSubMenu == menu.id ? "" : "hidden"
                    }`}
                  >
                    <div className=" mx-auto px-14 py-10 grid grid-cols-1 sm:grid-cols-2 ">
                      {menu.children?.map((submenu, subindex) => (
                        <a
                          key={index + subindex}
                          href={submenu.url}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          <div className="flex">
                            {submenu.icon}
                            <div className="pl-3">
                              <p className="s-bold-gray">{submenu.name}</p>
                              <p>{submenu.desc}</p>
                            </div>
                          </div>
                        </a>
                      ))}
                      {/* <a
                        href="/about/leadership"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <Sunrise className="iconBlue" />
                          <div className="pl-3">
                            <p className="s-bold-gray">
                              Удирдлага, Зохион байгуулалт
                            </p>
                            <p>
                              Demo Description - t non deserunt ullamco est sit
                              aliqua amet sint.
                            </p>
                          </div>
                        </div>
                      </a> */}
                      {/* <a
                        href="/about/auditors"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <BookOpen className="iconBlue" />
                          <div className="pl-3">
                            <p className="s-bold-gray">Аудиторууд</p>
                            <p>
                              Demo Description - t non deserunt ullamco est sit
                              aliqua amet sint.
                            </p>
                          </div>
                        </div>
                      </a> */}
                      {/* <a
                        href="/about/management"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <Target className="iconBlue" />
                          <div className="pl-3">
                            <p className="s-bold-gray">
                              Менежментийн багийн гишүүд
                            </p>
                            <p>
                              Demo Description - t non deserunt ullamco est sit
                              aliqua amet sint.
                            </p>
                          </div>
                        </div>
                      </a> */}
                      {/* <a
                        href="/about/approved"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <Archive className="iconBlue" />
                          <div className="pl-3">
                            <p className="s-bold-gray">
                              Баталгаажсан байгууллагууд
                            </p>
                            <p>
                              Demo Description - t non deserunt ullamco est sit
                              aliqua amet sint.
                            </p>
                          </div>
                        </div>
                      </a> */}
                      {/* <a
                        href="/about/accreditation"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <Package className="iconBlue" />
                          <div className="pl-3">
                            <p className="s-bold-gray">Итгэмжлэл</p>
                            <p>
                              Demo Description - t non deserunt ullamco est sit
                              aliqua amet sint.
                            </p>
                          </div>
                        </div>
                      </a> */}
                      {/* <a
                        href="/about/rules"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <div className="flex">
                          <Youtube className="iconBlue" />
                          <div className="pl-3">
                            <p className="s-bold-gray">Дүрэм журмууд</p>
                            <p>
                              Demo Description - t non deserunt ullamco est sit
                              aliqua amet sint.
                            </p>
                          </div>
                        </div>
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="group">
                <a href="/about" className="hover:underline transition">
                  Бидний тухай &gt;
                </a>
                <div className=" left-0 bg-white shadow-md z-40  group-hover:block ">
                  <div className="container xl mx-auto px-14 py-10 grid grid-cols-1 sm:grid-cols-2 ">
                    <a
                      href="/about/leadership"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Удирдлага, Зохион байгуулалт
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/auditors"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <BookOpen className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">Аудиторууд</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/management"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Менежментийн багийн гишүүд
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/approved"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Archive className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Баталгаажсан байгууллагууд
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/accreditation"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">Итгэмжлэл</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/about/rules"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Youtube className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">Дүрэм журмууд</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="group">
                <a href="/confirm" className="hover:underline">
                  Баталгаажуулалт
                </a>
                <div className="absolute left-0 bg-white shadow-md z-40 hidden group-hover:block w-screen top-[110px]">
                  <div className="container xl mx-auto px-14 py-10 grid grid-cols-3">
                    <a
                      href="/confirm/approve"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Менежментийн тогтолцооны баталгаажуулалт
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/confirm/employee"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">Ажилтны баталгаажуулалт</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/confirm/product"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Бүтээгдэхүүний үйлчилгээний баталгаажуулалт
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="group">
                <a href="/cyber-secutiry" className="hover:underline">
                  Кибер аюулгүй байдал
                </a>
                <div className="absolute left-0 bg-white shadow-md z-40 hidden group-hover:block w-screen top-[110px]">
                  <div className="container xl mx-auto px-14 py-10 grid grid-cols-3">
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Мэдээллийн аюулгүй байдлын аудит
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">
                            Кибер аюулгүй байдлын эрсдэлийн үнэлгээ
                          </p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div className="group">
                <a href="/standard" className="hover:underline">
                  Шийдэл
                </a>
                <div className="absolute left-0 bg-white shadow-md z-40 hidden group-hover:block w-screen top-[110px]">
                  <div className="container xl mx-auto px-14 py-10 grid grid-cols-3">
                    <a
                      href="/standard/iso"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Sunrise className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Target className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/company"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <div className="flex">
                        <Package className="iconBlue" />
                        <div className="pl-3">
                          <p className="s-bold-gray">ISO 9001:2015</p>
                          <p>
                            Demo Description - t non deserunt ullamco est sit
                            aliqua amet sint.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <a href="/contact">Тогтвортой хөгжил</a>
              <a href="/contact">Мэдээ мэдээлэл</a> */}
              <div className="z-50 ">
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
