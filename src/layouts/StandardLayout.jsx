import AuditBg from "../assets/img/AuditBg.png";
import WhiteButton from "../components/Button/btnWhite.jsx";
import BlueButton from "../components/Button/index.jsx";

export default function StandardLayout({ children }) {
  return (
    <div className="container xl mx-auto border-l border-r">
      <div
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${AuditBg})` }}
      >
        {/* Overlay: цэнхэр өнгө + opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Text container */}
        <div className="relative z-10 flex flex-col space-y-6 justify-center h-full p-20">
          <h1 className="">
            <span className="gradient-text l-bold border-b-4">
              ISO/IEC 27001:2022
            </span>
          </h1>
          <p className="s-regular-white">
            ISO 27001:2022 is the international standard that provides a
            framework for Information Security Management Systems (ISMS) to
            provide continued confidentiality, integrity and availability of
            information as well as legal compliance. ISO 27001 certification is
            essential for protecting your most vital assets like employee and
            client information, brand image and other private information. The
            ISO standard includes a process-based approach to initiating,
            implementing, operating and maintaining your ISMS.
          </p>
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

      <main className="flex-grow">{children}</main>
    </div>
  );
}
