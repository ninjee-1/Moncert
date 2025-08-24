import { ArrowRight } from "react-feather";
import NewsList from "./news.json";
function News() {
  const lastNews = (news) => {
    return news[0];
  };
  const latest = lastNews(NewsList);
  return (
    <div className="container xl mx-auto">
      <div className="py-20">
        <h5 className="text-center l-bold">Мэдээ, мэдээлэл</h5>
        <p className="text-center py-10">
          We’re proud of the progress we’ve made — and the heads that we <br />
          talent around the world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5 px-4">
          <div>
            <div className="md:w-[80%] border border-solid rounded-2xl overflow-hidden hover:bg-gray-50">
              <div>
                <img src={latest.img} alt="" className="w-full" />
              </div>
              <div className="p-7">
                <p>Featured</p>
                <div className="m-regular py-5">{latest.title}</div>
                <div className="flex justify-between items-center ">
                  <h3 className="s-regular">Дэлгэрэнгүй</h3>
                  <span className="s-regular">→</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 flex flex-col justify-between">
            {NewsList.map((el, index) => (
              <div
                key={index}
                className="border-b flex justify-between items-center "
              >
                {/* <img src={el.img} alt="" /> */}
                <p className="m-regular pr-5">{el.title}</p>
                <div className="px-5 py-2 border rounded-full">
                  <ArrowRight size={24} className="iconBlue" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
