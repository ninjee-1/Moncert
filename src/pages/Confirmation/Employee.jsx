import ProcessDiagram from "../../assets/img/processDiagram.png";
import WhiteButton from "../../components/Button/btnWhite.jsx";
import BlueButton from "../../components/Button/index.jsx";

import Users from "../../components/Icon/Home/Users";
import ClickHand from "../../components/Icon/Home/ClickHand";
import Clubs from "../../components/Icon/Home/Clubs";
import Card from "../../components/Icon/Home/Card";

function Employee() {
  return (
    <div className="my-10">
      <div>
        <h5 className="m-bold">
          Ажилтны баталгаажуулалт хийх төрөл болон үйл явц
        </h5>
        <div className="s-regular py-5">
          <p>
            Монсертф ХХК нь 2022  онд Казахстан улсын итгэмжлэлийн байгууллагаар
            " Тохирлын үнэлгээ.Ажилтны баталгаажуулалт явуулах байгууллагад
            тавих ерөнхий шаардлага ISO 17024:2012 стандартаар итгэмжлэгдсэн.
          </p>
          <p className="py-5">Итгэмжлэлийн хамрах хүрээ :</p>
          <ul>
            <li>
              Чанарын менежментийн тогтолцоо ISO 9001:2015 стандартын Аудитор,
              Зөвлөх, Сургагч багш, Менежер
            </li>
            <li>
              Байгаль орчны менежментийн тогтолцоо ISO 14001:2015
              стандартын Аудитор, Зөвлөх, Сургагч багш, Менежер
            </li>
            <li>
              Хөдөлмөрийн эрүүл мэнд аюулгүй байдлын менежментийн тогтолцоо ISO
              45001: 2018 стандартын Аудитор, Зөвлөх, Сургагч багш, Менежер 
              төрлөөр  нийт 12 схемээр ажилтныг баталгаажуулж байна.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <img src={ProcessDiagram} alt="" className="mx-auto" />
      </div>

      <div>
        <div className="flex items-center justify-between space-x-6 my-28">
          <div className="space-y-5">
            <h5 className="l-bold-gray">
              Helping a local{" "}
              <span className="text-primaryBlue">business reinvent itself</span>
            </h5>
            <p className="s-regular-gray">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center">
              <div className="">
                <Users />
              </div>
              <div className="px-3">
                <h5 className="l-bold-gray">2,245,341</h5>
                <p className="s-regular-gray">Members</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <ClickHand />
              </div>
              <div className="px-3">
                <h5 className="l-bold-gray">828,867</h5>
                <p className="s-regular-gray">Event Bookings</p>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center">
              <div className="">
                <Clubs />
              </div>
              <div className="px-3">
                <h5 className="l-bold-gray">46,328</h5>
                <p className="s-regular-gray">Clubs</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="">
                <Card />
              </div>
              <div className="px-3">
                <h5 className="l-bold-gray">1,926,436</h5>
                <p className="s-regular-gray">Payments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-24 space-y-10">
          <h5 className="l-bold ">
            Төгс төгөлдөрийг хэвшил болгож  <br />
            <span className="gradient-text">ДЭЛХИЙД ӨРСӨЛДӨНӨ!</span>
          </h5>
          <WhiteButton name="Санал хүсэлт илгээх" />
        </div>
      </div>
    </div>
  );
}

export default Employee;
