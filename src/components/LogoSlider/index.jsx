import Logo1 from "../../assets/img/OrganizationLogos/Image.svg";
import Logo2 from "../../assets/img/OrganizationLogos/Image-1.svg";
import Logo3 from "../../assets/img/OrganizationLogos/Image-2.svg";
import Logo4 from "../../assets/img/OrganizationLogos/Image-3.svg";
import Logo5 from "../../assets/img/OrganizationLogos/Image-4.svg";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

function InfiniteLogoSlider() {
  return (
    <div className="relative z-10 overflow-hidden bg-white py-4 border shadow-gray-400 rounded-[2rem] shadow shadow-md outline-none border-none max-w-[1280px] mx-auto">
      <h1 className="text-center m-bold-blue py-2">
        Баталгаажуулсан байгууллага
      </h1>
      <div className="whitespace-nowrap animate-scroll flex">
        {[...logos, ...logos].map((src, index) => (
          <div
            key={index}
            className="w-52 h-24 flex-shrink-0 flex items-center justify-center mx-5"
          >
            <img src={src} alt={`logo-${index}`} className="h-16" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteLogoSlider;
