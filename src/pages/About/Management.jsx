import ManagementImg from "../../assets/img/management.png";
import ManageImg1 from "../../assets/img/team/manage1.jpg";
import ManageImg2 from "../../assets/img/team/manage2.jpg";
import ManageImg3 from "../../assets/img/team/manage3.jpg";
import ManageImg4 from "../../assets/img/team/manage4.jpg";

import FacebookIcon from "../../assets/img/social/facebook.png";
import GithubIcon from "../../assets/img/social/github.png";
import LinkedInIcon from "../../assets/img/social/linkedin.png";

import WhiteButton from "../../components/Button/btnWhite.jsx";
import Users from "../../components/Icon/Home/Users";
import ClickHand from "../../components/Icon/Home/ClickHand";
import Clubs from "../../components/Icon/Home/Clubs";
import Card from "../../components/Icon/Home/Card";

function Management() {
  return (
    <div className="my-10">
      <div className="text-center">
        <h5 className="l-bold">Монсертф ХХК-ийн бүтэц, зохион байгуулалт</h5>
        <p className="s-regular-gray max-w-4xl mx-auto py-5">
          Үндэсний үйлдвэрлэгчдийн менежментийн систем нь стандартын шаардлагад
          нийцэж байгаа эсэхийг үнэлэх замаар зах зээлд өрсөлдөх чадварыг
          сайжруулах, дотоодын үйлдвэрлэлийг дэмжих, экспортын чиглэлтэй
          үйлдвэрлэлийг нэмэгдүүлэх зорилготой.
        </p>
        <div className="text-center mx-auto border border-2 border-grayOne rounded-lg max-w-4xl py-5">
          <h5 className="s-bold py-5">
            МОНСЕРТФ Тохирлын үнэлгээний байгууллагын бүтэц
          </h5>
          <img src={ManagementImg} alt="" className="max-w-3xl mx-auto" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-20">
        <div className="text-center">
          <h5 className="l-bold">Менежментийн баг</h5>
          <p className="s-regular-gray  py-5">
            We Focus on the details of everything we do. All to help businesses
            around the world Focus on what's most important to them.
          </p>
        </div>

        <div className="grid grid-cols-4 col-auto gap-4">
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Zane Sorell</h4>
            <h5 className="light-regular-none text-purple-600">CEO</h5>
            <p className="light-regular py-3">
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Maya Mathy</h4>
            <h5 className="light-regular-none text-purple-600">Founder</h5>
            <p className="light-regular py-3">
              Pop music lover, seeks joy and exciting pop concerts
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Alexis Jensen</h4>
            <h5 className="light-regular-none text-purple-600">CTO</h5>
            <p className="light-regular py-3">
              Bookworm, creative software developer with precision
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg4}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Keira Battye</h4>
            <h5 className="light-regular-none text-purple-600">
              Product Designer
            </h5>
            <p className="light-regular py-3">
              Creative painter capturing beauty with imaginative artwork
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="col-start-2 col-span-1 text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Zane Sorell</h4>
            <h5 className="light-regular-none text-purple-600">CEO</h5>
            <p className="light-regular py-3">
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="col-span-1 text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Zane Sorell</h4>
            <h5 className="light-regular-none text-purple-600">CEO</h5>
            <p className="light-regular py-3">
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-20">
        <div className="text-center">
          <h5 className="l-bold">Баталгаажуулалтын зөвлөл</h5>
          <p className="s-regular-gray  py-5">
            We Focus on the details of everything we do. All to help businesses
            around the world Focus on what's most important to them.
          </p>
        </div>

        <div className="grid grid-cols-4 col-auto gap-4">
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Zane Sorell</h4>
            <h5 className="light-regular-none text-purple-600">CEO</h5>
            <p className="light-regular py-3">
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Maya Mathy</h4>
            <h5 className="light-regular-none text-purple-600">Founder</h5>
            <p className="light-regular py-3">
              Pop music lover, seeks joy and exciting pop concerts
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Alexis Jensen</h4>
            <h5 className="light-regular-none text-purple-600">CTO</h5>
            <p className="light-regular py-3">
              Bookworm, creative software developer with precision
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg4}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Keira Battye</h4>
            <h5 className="light-regular-none text-purple-600">
              Product Designer
            </h5>
            <p className="light-regular py-3">
              Creative painter capturing beauty with imaginative artwork
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Zane Sorell</h4>
            <h5 className="light-regular-none text-purple-600">CEO</h5>
            <p className="light-regular py-3">
              Enjoys adventurous travel, seeks new cultures and offbeat
              destinations
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg2}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Maya Mathy</h4>
            <h5 className="light-regular-none text-purple-600">Founder</h5>
            <p className="light-regular py-3">
              Pop music lover, seeks joy and exciting pop concerts
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg3}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Alexis Jensen</h4>
            <h5 className="light-regular-none text-purple-600">CTO</h5>
            <p className="light-regular py-3">
              Bookworm, creative software developer with precision
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 overflow-hidden rounded-full mx-auto my-5">
              <img
                src={ManageImg4}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="s-bold">Keira Battye</h4>
            <h5 className="light-regular-none text-purple-600">
              Product Designer
            </h5>
            <p className="light-regular py-3">
              Creative painter capturing beauty with imaginative artwork
            </p>
            <i className="flex justify-center space-x-3">
              <a href="#">
                <img
                  src={FacebookIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
              <a href="#">
                <img src={GithubIcon} alt="" className="w-5 h-5 icon-gray-2" />
              </a>
              <a href="#">
                <img
                  src={LinkedInIcon}
                  alt=""
                  className="w-5 h-5 icon-gray-2"
                />
              </a>
            </i>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
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

export default Management;
