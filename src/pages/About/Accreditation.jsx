import Piramid from "../../assets/img/piramid.png";
import Checklist from "../../assets/img/check-list.png";
import Logo1 from "../../assets/img/Logo1.png";
import Logo2 from "../../assets/img/Logo2.png";
import Logo3 from "../../assets/img/Logo3.png";
import Logo4 from "../../assets/img/Logo4.png";
import Logo5 from "../../assets/img/Logo5.png";
import { ArrowRight } from "react-feather";

import WhiteButton from "../../components/Button/btnWhite.jsx";
import Users from "../../components/Icon/Home/Users";
import ClickHand from "../../components/Icon/Home/ClickHand";
import Clubs from "../../components/Icon/Home/Clubs";
import Card from "../../components/Icon/Home/Card";

function Accreditation() {
  return (
    <div className="my-5">
      <div>
        <h5 className="m-bold">Итгэмжлэл гэж юу вэ?</h5>
        <p className="s-regular-gray py-5">
          Unlock the full potential of your data with Tackle's intuitive yet
          powerful reporting system.
        </p>
      </div>
      <div className="grid grid-cols-2 my-10">
        <div className="space-y-4">
          <div className="flex ">
            <img
              src={Checklist}
              alt=""
              className="w-7 h-7 mx-5 mt-1 icon-green"
            />
            <p className="light-regular max-w-[400px]">
              Beautiful and easy-to-read charts, graphs, and dashboards that
              make it easy to analyze information.
            </p>
          </div>
          <div className="flex ">
            <img
              src={Checklist}
              alt=""
              className="w-7 h-7 mx-5 mt-1 icon-green"
            />
            <p className="light-regular max-w-[400px]">
              User-friendly interface that lets anyone, regardless of technical
              skills, interact with the data effectively.
            </p>
          </div>
          <div className="flex ">
            <img
              src={Checklist}
              alt=""
              className="w-7 h-7 mx-5 mt-1 icon-green"
            />
            <p className="light-regular max-w-[400px]">
              Slice and dice the data in any way you want with flexible filters
              and segments.
            </p>
          </div>
          <div className="flex ">
            <img
              src={Checklist}
              alt=""
              className="w-7 h-7 mx-5 mt-1 icon-green"
            />
            <p className="light-regular max-w-[400px]">
              Export the data and reports in different formats (Excel, CSV, PDF,
              etc.).
            </p>
          </div>
        </div>
        <img src={Piramid} alt="" className="max-w-[400px]" />
      </div>

      <div className="space-y-5">
        <div className="relative flex rounded-lg border items-center justify-evenly bg-blue-100 py-5">
          <div className="absolute bg-blue-600 w-3 h-full left-0 rounded-l-lg"></div>
          <img src={Logo1} alt="" />
          <div className="space-y-2">
            <h5 className="m-bold">International accreditation forum</h5>
            <p className="s-regular">
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
            </p>
          </div>
          <a href="#" className="flex items-center space-x-4">
            <p className="s-bold-primary">Дэлгэрэнгүй</p>
            <div>
              <ArrowRight className="iconBlue" />
            </div>
          </a>
        </div>

        <div className="relative flex rounded-lg items-center justify-evenly shadow-lg py-5">
          <div className="absolute bg-blue-600 w-3 h-full left-0 rounded-l-lg"></div>
          <img src={Logo2} alt="" className="px-7" />
          <div className="space-y-2">
            <h5 className="m-bold">International accreditation forum</h5>
            <p className="s-regular">
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
            </p>
          </div>
          <a href="#" className="flex items-center space-x-4">
            <p className="s-bold-primary">Дэлгэрэнгүй</p>
            <div>
              <ArrowRight className="iconBlue" />
            </div>
          </a>
        </div>

        <div className="relative flex rounded-lg border items-center justify-evenly bg-blue-100 py-5">
          <div className="absolute bg-blue-600 w-3 h-full left-0 rounded-l-lg"></div>
          <img src={Logo3} alt="" className="px-6" />
          <div className="space-y-2">
            <h5 className="m-bold">International accreditation forum</h5>
            <p className="s-regular">
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
            </p>
          </div>
          <a href="#" className="flex items-center space-x-4">
            <p className="s-bold-primary">Дэлгэрэнгүй</p>
            <div>
              <ArrowRight className="iconBlue" />
            </div>
          </a>
        </div>

        <div className="relative flex rounded-lg items-center justify-evenly shadow-lg py-5">
          <div className="absolute bg-blue-600 w-3 h-full left-0 rounded-l-lg"></div>
          <img src={Logo4} alt="" className="px-7" />
          <div className="space-y-2">
            <h5 className="m-bold">International accreditation forum</h5>
            <p className="s-regular">
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
            </p>
          </div>
          <a href="#" className="flex items-center space-x-4">
            <p className="s-bold-primary">Дэлгэрэнгүй</p>
            <div>
              <ArrowRight className="iconBlue" />
            </div>
          </a>
        </div>

        <div className="relative flex rounded-lg border items-center justify-evenly bg-blue-100 py-5">
          <div className="absolute bg-blue-600 w-3 h-full left-0 rounded-l-lg"></div>
          <img src={Logo5} alt="" className="px-5" />
          <div className="space-y-2">
            <h5 className="m-bold">International accreditation forum</h5>
            <p className="s-regular">
              Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
              Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
            </p>
          </div>
          <a href="#" className="flex items-center space-x-4">
            <p className="s-bold-primary">Дэлгэрэнгүй</p>
            <div>
              <ArrowRight className="iconBlue" />
            </div>
          </a>
        </div>
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
        {/* </div> */}
      </div>
    </div>
  );
}

export default Accreditation;
