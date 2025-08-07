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

function Header() {
  const btnName = "Үнийн санал авах";
  return (
    <header className="w-full shadow text-black p-4 s-regular-gray relative">
      <div className="container xl mx-auto">
        <div className="flex space-x-6 justify-end mt-5 mb-2 underline">
          <div>+(976)-70115522</div>
          <div>Холбоо барих</div>
          <div>Нэвтрэх/Бүртгүүлэх</div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex text-xl s-regular-gray items-center">
            <a href="/" className="mr-6 z-50">
              <img src={Logo} alt="React Logo" />
            </a>

            <nav className="space-x-6 flex">
              <div className="group">
                <a href="/about" className="hover:underline transition">
                  Бидний тухай
                </a>
                {/* Submenu - Initially hidden, shown on hover */}
                <div className="absolute left-0 bg-white shadow-md z-40 hidden group-hover:block w-screen top-[110px]">
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
              </div>
              <div className="group">
                <a href="/contact" className="hover:underline">
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


              </div>
              <div className="group">
                <a href="/standard" className="hover:underline">
                  Шийдэл
                </a>
                {/* Submenu - Initially hidden, shown on hover */}
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
              </div>
              {/* <a href="/contact">Шийдэл</a> */}
              <a href="/contact">Тогтвортой хөгжил</a>
              <a href="/contact">Мэдээ мэдээлэл</a>
            </nav>
          </div>
          <div className="z-50">
            <Button name={btnName} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
