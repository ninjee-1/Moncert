import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Users from "../components/Icon/Home/Users";
import ClickHand from "../components/Icon/Home/ClickHand";
import Clubs from "../components/Icon/Home/Clubs";
import Card from "../components/Icon/Home/Card";
import { slideItems } from "../components/Json/SliderItem";
import HeaderImg from "../assets/img/HeaderImg.svg";
import AuditorsBg from "../assets/img/AuditorsBG.svg";
import Avatar from "../assets/img/avatar/avatar.png";
import Button from "../components/Button";
import WhiteButton from "../components/Button/btnWhite";
import InfiniteLogoSlider from "../components/LogoSlider/index";
import News from "../components/News";
import Collapse from "../components/Collapse";

function Home() {
  return (
    <div>
      {/* <div className="relative my-10 ">
        <div className="container xl mx-auto ">
          <div className="md:flex ">
            <div className="w-full md:w-7/12 flex justify-end items-center">
              <div className="container lg:max-w-[960px] md:max-w-screen-sm h-full flex items-center">
                <div className="w-full">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    allowSlidePrev={false}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="w-full"
                  >
                    {slideItems.map((item, idx) => (
                      <SwiperSlide key={idx} className="">
                        <div className="flex flex-col  items-start justify-center gap-4  text-gray-800 w-10/12 ">
                          <h2 className="gradient-text text-2xl xl-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            {item.title}
                          </h2>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsam sapiente commodi labore suscipit!
                            Aperiam assumenda numquam ipsam soluta, omnis
                            asperiores?
                          </p>

                          <div className="flex space-x-5 my-2 s-bold">
                            <Button name="Үнийн санал авах" />
                            <WhiteButton name="Дэлгэрэнгүй" />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 hidden md:block md:w-5/12 md:top-0">
          
          <img src={HeaderImg} className="w-full" alt="" />
        </div>
      </div> */}

      <div className="relative mt-10 mb-20">
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center ">
            {/* Slider - left */}
            <div className="w-full lg:w-6/12 flex justify-start md:justify-end z-10">
              <div className="w-full lg:max-w-[960px] md:max-w-screen-sm">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation
                  allowSlidePrev={false}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="w-full"
                >
                  {slideItems.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="flex flex-col items-start justify-center gap-4 text-gray-800 w-full">
                        <h2 className="gradient-text text-2xl xl-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                          {item.title}
                        </h2>
                        <p className="text-sm md:text-base">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.
                        </p>
                        <div className="flex flex-wrap gap-4 my-2 s-bold">
                          <Button name="Үнийн санал авах" />
                          <WhiteButton name="Дэлгэрэнгүй" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Image - right, overlap effect */}
            <div className="hidden lg:w-full lg:block  relative  flex justify-end z-0">
              <img
                src={HeaderImg}
                alt="Header"
                className="w-full h-auto  object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="shadow relative">
        <div className="absolute  inset-0 flex items-center bottom-[80rem] infinitySlider infinitySlider1">
          <InfiniteLogoSlider className="z-40" />
        </div>
        <div className="bg-gray-100 md:mt-28 z-0">
          {" "}
          {/* my-16 -top-40 */}
          <div className=" md:max-w-[1280px] px-4 mx-auto ">
            <div className="flex homeSection2 justify-between items-center pb-12 pt-40">
              <div>
                <img src={AuditorsBg} alt="" />
              </div>
              <div className="max-w-[500px] homeSection2Title">
                <h3 className="m-bold">
                  Олон улсад хүлээн зөвшөөрөгдсөн аудиторууд
                </h3>
                <p className="py-5">
                  Take advantage of our global employment products to hire who
                  you want, wherever you want — starting in just minutes —
                  without setting up new entities.
                </p>
                <div className="grid grid-cols-2 gap-2 w-full pt-14">
                  <a
                    href="https://facebook.com"
                    className="p-[1px] rounded-xl bg-gradient-to-r h-32 from-blue-500  to-cyan-400"
                  >
                    <div className="bg-gray-100 rounded-xl p-4 w-full h-full grid grid-rows-2 hover:bg-gray-50">
                      <div className="flex -space-x-2">
                        <img
                          src={Avatar}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                          src={Avatar}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                          src={Avatar}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      </div>
                      <div className="flex justify-between items-center ">
                        <h3 className="s-regular">Аудиторууд</h3>
                        <span className="s-regular">→</span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://facebook.com"
                    className="p-[1px] rounded-xl bg-gradient-to-r h-32 from-blue-700 to-cyan-400"
                  >
                    <div className="bg-gray-100 rounded-xl p-4 w-full h-full grid grid-rows-2 hover:bg-gray-50">
                      <div className="flex -space-x-2">
                        <img
                          src={Avatar}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                          src={Avatar}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <img
                          src={Avatar}
                          className="w-10 h-10 rounded-full border-2 border-white"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <h3 className="s-regular">Аудиторууд</h3>
                        <span className="text-gray-500 text-xl">→</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <News />

      <div className="bg-gray-100 shadow">
        <div className="text-center py-20">
          <h5 className="l-bold">
            Хамтран ажилладаг байгууллагуудын <br />
            <span className="gradient-text">Сэтгэгдлүүд</span>
          </h5>
          <div className="py-10">
            <Button name="Баталгаажсан байгууллагууд" />
          </div>
          <div className="mt-16">
            <Swiper
              // slidesPerView={4}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1820: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={30}
              // pagination={{
              //   clickable: true,
              // }}
              autoplay={{ delay: 3000 }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/74a3be7b-c57e-49ec-8094-2bdb2d2d95f1.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Ben Tossell</h5>
                      <p className="s-regular-gray">@bentossell</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    well, an actually enjoyable way to organise my whole in and
                    out of my business, plus highlighted a bunch of things I
                    need to cancel
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/357ffeab-d844-441d-9455-c0e169c26842.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Christian Alares</h5>
                      <p className="s-regular-gray">@c_alares</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    Omg, this is so cool!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/74a3be7b-c57e-49ec-8094-2bdb2d2d95f1.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Zeno Rocha</h5>
                      <p className="s-regular-gray">@zenorocha</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    this is absolutely amazing
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/74a3be7b-c57e-49ec-8094-2bdb2d2d95f1.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Bailey Simrell</h5>
                      <p className="s-regular-gray">@baileysimrell</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    Awesome man, looks amazing 🔥
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/74a3be7b-c57e-49ec-8094-2bdb2d2d95f1.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Ben Tossell</h5>
                      <p className="s-regular-gray">@bentossell</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    well, an actually enjoyable way to organise my whole in and
                    out of my business, plus highlighted a bunch of things I
                    need to cancel
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/74a3be7b-c57e-49ec-8094-2bdb2d2d95f1.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Ben Tossell</h5>
                      <p className="s-regular-gray">@bentossell</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    well, an actually enjoyable way to organise my whole in and
                    out of my business, plus highlighted a bunch of things I
                    need to cancel
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/74a3be7b-c57e-49ec-8094-2bdb2d2d95f1.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Ben Tossell</h5>
                      <p className="s-regular-gray">@bentossell</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    well, an actually enjoyable way to organise my whole in and
                    out of my business, plus highlighted a bunch of things I
                    need to cancel
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/74a3be7b-c57e-49ec-8094-2bdb2d2d95f1.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Ben Tossell</h5>
                      <p className="s-regular-gray">@bentossell</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    well, an actually enjoyable way to organise my whole in and
                    out of my business, plus highlighted a bunch of things I
                    need to cancel
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white border rounded-xl p-8 space-y-8">
                  <div className="flex items-center space-x-5">
                    <div className="">
                      <img
                        src="https://cdn.e-mongolia.mn/uploads/122/2025/7/29/74a3be7b-c57e-49ec-8094-2bdb2d2d95f1.jpg"
                        className="h-16 w-16 rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="text-start">
                      <h5 className="m-regular">Ben Tossell</h5>
                      <p className="s-regular-gray">@bentossell</p>
                    </div>
                  </div>
                  <p className="text-start s-regular-gray">
                    well, an actually enjoyable way to organise my whole in and
                    out of my business, plus highlighted a bunch of things I
                    need to cancel
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className=" py-6 shadow">
        <div className="max-w-7xl mx-auto mb-5">
          <h2 className="l-bold font-bold text-center py-8">
            Frequently Asked Questions
          </h2>
          <Collapse />
        </div>
      </div>

      <div className="container xl mx-auto">
        <div className="flex items-center flex-wrap justify-between space-x-6 my-28">
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

      {/* <div className="bg-gray-100 pt-24 pb-32 relative my-16">
        <div className="">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-10 max-w-[1280px] mx-auto">
            <InfiniteLogoSlider />
          </div>

          <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-xl font-bold text-black mb-2">
              Олон улсад хүлээн зөвшөөрөгдсөн аудиторууд
            </h3>
            <p className="text-gray-700">
              Take advantage of our global employment products to hire who you
              want...
            </p>
          </div>
        </div>
      </div> */}
      {/* <div>
        <InfiniteLogoSlider />
        <div className="bg-gray-100">
          <h1 class="text-black text-2xl font-bold">
            Энэ бол тунгалаг background бүхий блок
          </h1>
          <p class="text-black">
            Текст нь бүрэн тод, харин background нь 60% opacity.
          </p>
        </div>
      </div> */}
    </div>
  );
}
export default Home;
