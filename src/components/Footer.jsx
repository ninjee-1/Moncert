import Logo from "../assets/img/Logo.png";
import Logo1 from "../assets/img/Logo1.png";
import Logo2 from "../assets/img/Logo2.png";
import Logo3 from "../assets/img/Logo3.png";
import Logo4 from "../assets/img/Logo4.png";
import Logo5 from "../assets/img/Logo5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

function Footer() {
  const btnName = "Итгэмжлэл";
  return (
    <footer className="bg-gray-100 text-center p-4 s-regular-gray">
      <div className="container xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 my-6 border-b border-grayOne pb-12">
          <div className="text-left">
            <img src={Logo} alt="Logo img" />
            <h6 className="footer-title">Монсертф ТҮБ ХХК</h6>
            <ul className="space-y-5">
              <li>Хаяг</li>
              <li>
                Улаанбаатар, Сүхбаатар дүүрэг, 7-р хороо, Хоймор оффис, 15
                давхар, 1505 тоот
              </li>
              <li className="space-x-2 icon-color">
                <a href="#" className="text-3xl hover:text-blue-500">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#" className="text-3xl hover:text-red-500">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#" className="text-3xl hover:text-gray-400">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-left">
            <h6 className="footer-title">Баталгаажуулалт</h6>
            <ul className="space-y-5">
              <li>Менежментийн тогтолцооны баталгаажуулалт</li>
              <li>Ажилтны баталгаажуулалт</li>
              <li>Бүтээгдэхүүн, үйлчилгээ, үйл явцын баталгаажуулалт</li>
            </ul>
          </div>
          <div className="text-left">
            <h6 className="footer-title">Шийдэл</h6>
            <ul className="space-y-5">
              <li>ISO 9001:2015 ЧМТ </li>
              <li>ISO 14001:2015 БОМТ</li>
              <li>ISO 45001:2018 ХЭМАБ</li>
              <li>ISO 22000:2018 ХАБ</li>
              <li>ISO 37001:2018</li>
              <li>Бусад</li>
            </ul>
          </div>
          <div className="text-left">
            <h6 className="footer-title">Хамтын ажиллагаа</h6>
            <ul className="space-y-5">
              <li>Итгэмжлэл</li>
              <li>Аудиторууд</li>
              <li>Баталгаажсан байгууллагууд</li>
            </ul>
          </div>
          <div className="text-left">
            <h6 className="footer-title">Монсертф</h6>
            <ul className="space-y-5">
              <li>Бидний тухай</li>
              <li>Кибер аюулгүй байдал</li>
              <li>Тогтвортой хөгжил</li>
              <li>Мэдээ, мэдээлэл</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-evenly border-b border-grayOne pb-12 mb-5 mt-12">
          <div className="text-left space-y-5">
            <h6 className="m-bold">
              Баталгаажуулалт хийх Олон Улсын итгэмжлэл
            </h6>
            <p>
              Scan your Google Drive company account and
              <br /> get a full risk report for your company in minutes
            </p>
            <Button name={btnName} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center">
            <img src={Logo1} alt="Logo1" />
            <img src={Logo2} alt="Logo2" />
            <img src={Logo3} alt="Logo3" />
            <img src={Logo4} alt="Logo4" />
            <img src={Logo5} alt="Logo5" />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div>© 2025. Бүх эрх хуулиар хамгаалагдсан</div>
          <div className="flex space-x-6">
            <div>Үйлчилгээний нөхцөл</div>
            <div>Бодлого</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
