import WhiteButton from "../../components/Button/btnWhite.jsx";
import ProcessImg from "../../assets/img/processTable.png";
import Users from "../../components/Icon/Home/Users";
import ClickHand from "../../components/Icon/Home/ClickHand";
import Clubs from "../../components/Icon/Home/Clubs";
import Card from "../../components/Icon/Home/Card";

export default function CyberSecurity() {
  return (
    <div>
      <div>
        <h5 className="m-bold py-5">МонСертф ХХК-ийн баталгаажуулалтын схем</h5>
        <p className="s-regular">
          “Стандартчилал, тохирлын үнэлгээний тухай” МУ-ын хуулийн хүрээнд
          менежментийн тогтолцооны баталгаажуулалтыг олон улсын MNS ISO/IEC
          17021, MNS ISO/IEC 17065 стандартын дагуу итгэмжлэгдсэн
          баталгаажуулалтын байгууллага хэрэгжүүлнэ.
        </p>
        <p className="s-regular py-5">
          Хуулийн зохицуулалт <br /> зөвлөл, төвүүдийн мэдээлэл холбоо барих{" "}
          <br /> үзүүлж байгаа үйлчилгээ <br /> Өргөдлийн маягт
        </p>
      </div>
      <div>
        <img src={ProcessImg} alt="" className="mx-auto my-10" />
      </div>

      <div className="w-[95%] mx-auto">
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
