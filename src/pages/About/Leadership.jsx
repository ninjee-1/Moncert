import Leader from "../../assets/img/leader.jpg";
import RocketIcon from "../../assets/img/shuttle.png";
import EyeIcon from "../../assets/img/eye.png";
import Puzzle from "../../assets/img/puzzle.jpg";
import Bulb from "../../assets/img/bulb.png";

import WhiteButton from "../../components/Button/btnWhite.jsx";
import Users from "../../components/Icon/Home/Users";
import ClickHand from "../../components/Icon/Home/ClickHand";
import Clubs from "../../components/Icon/Home/Clubs";
import Card from "../../components/Icon/Home/Card";

import Team1 from "../../assets/img/team/team1.png";
import Team2 from "../../assets/img/team/team2.png";
import Team3 from "../../assets/img/team/team3.png";
import Team4 from "../../assets/img/team/team4.png";
import Team5 from "../../assets/img/team/team5.png";
import Team6 from "../../assets/img/team/team6.png";
import Team7 from "../../assets/img/team/team7.png";
import Team8 from "../../assets/img/team/team8.png";
import Team9 from "../../assets/img/team/team9.png";
import Team10 from "../../assets/img/team/team10.png";
import Team11 from "../../assets/img/team/team11.png";
import Team12 from "../../assets/img/team/team12.png";
import Team13 from "../../assets/img/team/team13.png";
import Team14 from "../../assets/img/team/team14.png";
import Team15 from "../../assets/img/team/team15.png";
function Leadership() {
  return (
    <div>
      <div className="relative mb-60">
        <div className="relative bg-gradient-to-b from-primaryBlue to-blue-300 rounded-3xl p-6 md:p-10 max-w-4xl mx-auto my-20 clip-diagonal">
          <p className="s-regular-white md:text-base leading-relaxed pb-24 ">
            “МонСертф” ХХК нь 2016 оны 01 сарын 27-нд менежментийн тогтолцооны
            олон улсын стандартуудаар баталгаажуулалт явуулах гэрчилгээжүүлэх,
            стандартын сургалт зохион байгуулах зорилготойгоор байгуулагдсан.
            <br />
            <br />
            Манай компани нь{" "}
            <strong>
              “ТӨГС ТӨГӨЛДРИЙГ ХЭВШИЛ БОЛГОЖ, БИД ДЭЛХИЙД ӨРСӨЛДӨНӨ”
            </strong>{" "}
            гэсэн уриан дор байгууллагдсан цагаасаа тасралтгүй үйл ажиллагаа
            явуулж, хэрэглэгч, үйлчлүүлэгчийн итгэлийг хүлээсэн МонСертф Групп
            болон үйл ажиллагаагаа өргөжүүлэн ажиллаж байна.
          </p>
        </div>
        {/* skew-тэй зураг */}
        <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 clip-diagonal-img">
          <div className="overflow-hidden rounded-xl shadow-lg ">
            <img
              src={Leader} // path-аа тохируулаарай
              alt="Leadership"
              className="w-[400px]"
              // className="-rotate-[2deg]" // дотор зургийг тэгшлэх
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 my-14">
        <div className=" ">
          <div className="mt-5">
            <div>
              <img src={Puzzle} alt="" className="w-40" />
              <p className="l-bold gradient-text">Үйл ажиллагаа</p>
            </div>
            <p className="light-regular my-5">
              Mонсертф ХХК нь менежментийн тогтолцооны стандартуудаар үндэсний
              зөвлөх, аудитор, багш нарыг бэлтгэх зорилтоо олон улсын
              байгууллагуудын дэмжлэгтэйгээр 2016-2018 онуудад амжилттай
              хэрэгжүүлж хүний нөөцийн чадавхийг бэхжүүлэн 67 аудитор, 8 сургагч
              багшийг бүртгэлжүүлээд байна
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="p-5 bg-gray-100">
            <div className="flex items-center justify-end space-x-3 text-right ">
              <h5 className="l-bold gradient-text ">Алсын хараа</h5>
              <div className="relative  ">
                <img src={RocketIcon} className="icon-primary-color w-14" />
              </div>
            </div>
            <p className="light-regular py-7 ">
              Монгол оюун ухаан, мэдлэгийг дэлхийн зах зээлд гаргах, олон улсын
              менежментийн тогтолцоогоор мэргэшсэн Монгол аудитор, сургагч багш,
              зөвлөхүүдийн оюуныг экспортлох, тэдний үнэлэмжийг олон улсын
              жишигт хүргэх
            </p>
          </div>
          <div className="p-5 bg-gray-100">
            <div className="flex items-center justify-end space-x-3 text-right ">
              <h5 className="l-bold gradient-text ">Эрхэм зорилго</h5>
              <div className="relative  ">
                <img src={EyeIcon} className="icon-primary-color w-14" />
              </div>
            </div>
            <p className="light-regular py-7 ">
              Үндэсний үйлдвэрлэгч аж ахуйн нэгж, байгууллагуудын менежментийн
              тогтолцоо нь стандартын шаардлагад нийцсэн эсэхэд үнэлгээ хийх
              замаар менежментийг олон улсын жишигт хүргэх, сайжруулах, зах
              зээлд өрсөлдөх чадварыг дээшлүүлэх, дотоодын үйлдвэрлэлийг
              хөгжүүлэх, экспортын чиг баримжаатай үйлдвэрлэлийг нэмэгдүүлэхэд
              оршино.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="text-center">
          <h5 className="l-bold-none text-primaryBlue">
            Биднийг сонгох шалтгаан
          </h5>
          <p className="s-regular-gray max-w-3xl mx-auto py-10">
            We bring our members high quality commercial investment
            opportunities that are normally hidden away in country clubs or
            investment firms. Investors through Equity Street Capital get access
            to
          </p>
        </div>
        <div className="grid grid-cols-3 space-x-5 gap-y-10 [&>*:nth-child(odd)]:bg-gray-100">
          <div className="text-center">
            <div>
              <img
                src={Bulb}
                alt=""
                className="w-14 mx-auto icon-gray-2 pt-2"
              />
            </div>
            <h5 className="m-bold-none text-grayOne py-2">
              Invest Alongside The Experts
            </h5>
            <p className="light-regular px-14">
              We bring our members high quality commercial investment
              opportunities that are normally hidden away in country clubs or{" "}
            </p>
          </div>
          <div className="text-center">
            <div>
              <img
                src={Bulb}
                alt=""
                className="w-14 mx-auto icon-gray-2 pt-2"
              />
            </div>
            <h5 className="m-bold-none text-grayOne py-2">
              Invest Alongside The Experts
            </h5>
            <p className="light-regular px-14">
              We bring our members high quality commercial investment
              opportunities that are normally hidden away in country clubs or{" "}
            </p>
          </div>
          <div className="text-center">
            <div>
              <img
                src={Bulb}
                alt=""
                className="w-14 mx-auto icon-gray-2 pt-2"
              />
            </div>
            <h5 className="m-bold-none text-grayOne py-2">
              Invest Alongside The Experts
            </h5>
            <p className="light-regular px-14">
              We bring our members high quality commercial investment
              opportunities that are normally hidden away in country clubs or{" "}
            </p>
          </div>
          <div className="text-center">
            <div>
              <img
                src={Bulb}
                alt=""
                className="w-14 mx-auto icon-gray-2 pt-2"
              />
            </div>
            <h5 className="m-bold-none text-grayOne py-2">
              Invest Alongside The Experts
            </h5>
            <p className="light-regular px-14">
              We bring our members high quality commercial investment
              opportunities that are normally hidden away in country clubs or{" "}
            </p>
          </div>
          <div className="text-center">
            <div>
              <img
                src={Bulb}
                alt=""
                className="w-14 mx-auto icon-gray-2 pt-2"
              />
            </div>
            <h5 className="m-bold-none text-grayOne py-2">
              Invest Alongside The Experts
            </h5>
            <p className="light-regular px-14">
              We bring our members high quality commercial investment
              opportunities that are normally hidden away in country clubs or{" "}
            </p>
          </div>
          <div className="text-center">
            <div>
              <img
                src={Bulb}
                alt=""
                className="w-14 mx-auto icon-gray-2 pt-2"
              />
            </div>
            <h5 className="m-bold-none text-grayOne py-2">
              Invest Alongside The Experts
            </h5>
            <p className="light-regular px-14">
              We bring our members high quality commercial investment
              opportunities that are normally hidden away in country clubs or{" "}
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-11 my-10 gap-2 row-span-1">
          <div className="col-span-4 bg-red-50 row-span-1">
            <img src={Team1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-red-100 grid grid-cols-7 col-span-4 row-span-1 gap-2">
            <img
              src={Team2}
              alt=""
              className="col-span-3 w-full h-full object-cover"
            />
            <img
              src={Team3}
              alt=""
              className="col-span-4 w-full h-full object-cover"
            />
            <img
              src={Team4}
              alt=""
              className="col-span-2 w-full h-full object-cover"
            />
            <img
              src={Team5}
              alt=""
              className="col-span-3 w-full h-full object-cover"
            />
            <img
              src={Team6}
              alt=""
              className="col-span-2 w-full h-full object-cover"
            />
          </div>
          <div className="col-span-3 bg-red-200">
            <div className="grid grid-cols-2 gap-2">
              <img src={Team7} alt="" className="w-full h-full object-cover" />
              <img src={Team8} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <img src={Team9} alt="" className=" w-full h-full object-cover" />
              <img
                src={Team10}
                alt=""
                className="col-span-1 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-4">4</div>
          <div className="col-span-4">5</div>
          <div className="col-span-2">6</div>
        </div> */}

        <div className="grid grid-cols-12 gap-2 my-14">
          <div className="col-span-5 row-span-4">
            <img src={Team1} className="w-full h-full object-cover " />
          </div>

          <div className="col-span-2 row-span-3">
            <img src={Team2} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-3 row-span-3">
            <img src={Team3} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-1 row-span-1">
            <img src={Team7} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-1 row-span-1">
            <img src={Team8} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 row-span-3">
            <img src={Team9} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src={Team4} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src={Team5} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-1 row-span-1">
            <img src={Team6} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src={Team11} className="w-full h-full object-cover " />
          </div>

          <div className="col-span-2 row-span-1">
            <img src={Team12} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src={Team13} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src={Team14} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src={Team15} className="w-full h-full object-cover" />
          </div>

          <div className="col-span-2 row-span-1">
            <img src={Team10} className="w-full h-full object-cover " />
          </div>
        </div>

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
export default Leadership;
