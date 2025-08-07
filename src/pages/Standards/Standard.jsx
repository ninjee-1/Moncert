import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import AuditBg from "../../assets/img/AuditBg.png";
import News1 from "../../assets/img/news1.png";
import WhiteButton from "../../components/Button/btnWhite.jsx";

import Users from "../../components/Icon/Home/Users";
import ClickHand from "../../components/Icon/Home/ClickHand";
import Clubs from "../../components/Icon/Home/Clubs";
import Card from "../../components/Icon/Home/Card";

const mockData = [
  {
    id: "iso-27001",
    title: "ISO/IEC 27001:2022",
    description:
      "ISO 27001:2022 is the international standard that provides a framework for Information Security Management Systems (ISMS) to provide continued confidentiality, integrity and availability of information as well as legal compliance. ISO 27001 certification is essential for protecting your most vital assets like employee and client information, brand image and other private information. The ISO standard includes a process-based approach to initiating, implementing, operating and maintaining your ISMS.",
    steps: [
      {
        title: "What is ISO 27001?",
        content: [
          { type: "heading", text: "Welcome to ISO 27001" },
          {
            type: "paragraph",
            text: "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu. ",
          },
          { type: "heading", text: "How To Get Certified To ISO 27001" },
          { type: "image", url: "https://i.postimg.cc/DwvznJjm/stat.webp" },
          {
            type: "paragraph",
            text: "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu: ",
          },
          {
            type: "list",
            items: [
              "Symbol maps — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.",
              "Line charts — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam.",
              "Pie charts — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna.",
              "Tables — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl.",
              "Histograms — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor.",
              "Scatter plots — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.",
            ],
          },
          { type: "heading", text: "Benefits of ISO 27001 Certification" },
          { type: "image", url: "https://i.postimg.cc/DwvznJjm/stat.webp" },
          {
            type: "paragraph",
            text: "Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu. Phasellus sed venenatis leo. Cras pulvinar, eros sed dictum semper, orci ipsum scelerisque tortor, at euismod sem lectus sed ex. Praesent purus orci, rutrum ac aliquet nec, egestas sit amet nibh.",
          },
        ],
      },
      {
        title: "How To Get Certified To ISO 27001",
        content: [
          { type: "heading", text: "Key Requirements" },
          {
            type: "list",
            items: ["Risk assessment", "Security policies", "Access control"],
          },
        ],
      },
      {
        title: "Benefits of ISO 27001 Certification",
        content: [
          { type: "heading", text: "Key Requirements" },
          {
            type: "list",
            items: ["Risk assessment", "Security policies", "Access control"],
          },
        ],
      },
      {
        title: "RELATED ISO 27001 CONTENT",
        content: [
          { type: "heading", text: "Key Requirements" },
          {
            type: "list",
            items: ["Risk assessment", "Security policies", "Access control"],
          },
        ],
      },
    ],
  },
  {
    id: "iso-9001",
    title: "ISO/IEC 27001:2015",
    description:
      "ISO 27001:2022 is the international standard that provides a framework for Information Security Management Systems (ISMS) to provide continued confidentiality, integrity and availability of information as well as legal compliance. ISO 27001 certification is essential for protecting your most vital assets like employee and client information, brand image and other private information. The ISO standard includes a process-based approach to initiating, implementing, operating and maintaining your ISMS.",
    steps: [
      {
        title: "Overview",
        content: [
          { type: "heading", text: "About ISO 9001" },
          { type: "paragraph", text: "Focuses on quality management systems." },
        ],
      },
    ],
  },
];

// 📦 Component to render individual section item
const RenderSection = ({ section }) => {
  switch (section.type) {
    case "heading":
      return <h2 className="l-bold mb-2">{section.text}</h2>;
    case "paragraph":
      return <p className="py-10 s-regular-gray">{section.text}</p>;
    case "image":
      return (
        <img
          src={section.url}
          alt=""
          className="w-full py-10 rounded-lg mb-4"
        />
      );
    case "list":
      return (
        <ul className="list-disc pl-6 mb-4 s-regular-gray">
          {section.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

function Standard() {
  const { id } = useParams();
  const [pageData, setPageData] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    let data;

    if (id) {
      data = mockData.find((item) => item.id.toString() === id.toString());
    }

    // Хэрвээ олдоогүй бол эсвэл `id` байхгүй бол эхний элементийг сонгоно
    if (!data && mockData.length > 0) {
      data = mockData[0];
    }

    if (data) {
      setPageData(data);
      setActiveStep(0);
    }
  }, [id]);

  if (!pageData)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  return (
    <div className="container xl mx-auto border-l border-r">
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${AuditBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex flex-col space-y-6 justify-center h-full p-20">
          <h1 className="">
            <span className="gradient-text l-bold border-b-4">
              {pageData.title}
            </span>
          </h1>
          <p className="s-regular-white">{pageData.description}</p>
          <div className="space-x-4">
            <button className="bg-white focus:outline-none hover:ring-0 hover:outline-0 hover:border-gray-200 border border-transparent outline-non text-grayOne rounded-full px-7 transition duration-300">
              Аудитороор бүртгүүлэх
            </button>
            <button className="bg-primaryBlue focus:outline-none outline-none text-white  rounded-full px-7 transition duration-300">
              Аудитор хайх
            </button>
            {/* <WhiteButton name="" /> */}
            {/* <BlueButton name="Аудитор хайх" /> */}
          </div>
        </div>
      </div>

      <div className="flex my-5">
        <aside className="w-1/4 p-4 h-screen overflow-y-auto">
          {/* <h1 className="text-2xl font-semibold mb-4">{pageData.title}</h1> */}
          <ul className="">
            {pageData.steps.map((step, index) => (
              <div>
                <li
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer px-3 py-4 overflow-hidden group hover:bg-blue-100 relative ${
                    index === activeStep ? "s-bold" : "s-regular"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full rounded-sm
                    ${
                      index === activeStep
                        ? "w-1 bg-blue-600"
                        : "w-1 bg-blue-300"
                    } 
                    transition-all `}
                  ></span>
                  {step.title}
                </li>
                {/* {index === activeStep && (
                  <div className="absolute left-[-24px] top-0 h-full w-2 bg-blue-300 z-0"></div>
                )} */}
              </div>
            ))}
          </ul>
        </aside>
        <main className="w-3/4 p-6 space-y-4">
          {pageData.steps[activeStep].content.map((section, idx) => (
            <RenderSection key={idx} section={section} />
          ))}
        </main>
      </div>

      <div className="py-10">
        <h5 className="px-5 m-bold">Related Post</h5>
        <div className="grid grid-cols-3">
          <div className="p-5">
            <img src={News1} alt="" />
            <p className="light-regular py-5">22 June 2022</p>
            <h5 className="m-bold">Successful businesses of the future</h5>
            <p className="s-regular-gray py-5">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </p>
          </div>
          <div className="p-5">
            <img src={News1} alt="" />
            <p className="light-regular py-5">22 June 2022</p>
            <h5 className="m-bold">Successful businesses of the future</h5>
            <p className="s-regular-gray py-5">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </p>
          </div>
          <div className="p-5">
            <img src={News1} alt="" />
            <p className="light-regular py-5">22 June 2022</p>
            <h5 className="m-bold">Successful businesses of the future</h5>
            <p className="s-regular-gray py-5">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas. Quis autem vel eum iure...
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
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

export default Standard;
