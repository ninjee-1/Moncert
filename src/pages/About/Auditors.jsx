import React, { useState } from "react";
import { Radio, Select, Space, Form, Input, InputNumber } from "antd";
import WhiteButton from "../../components/Button/btnWhite.jsx";
import BlueButton from "../../components/Button/index.jsx";
import Routine from "../../assets/img/routine.png";
import Popup from "../../components/Modal/index.jsx";
import WhiteModal from "../../components/Modal/WhiteModal.jsx";

import Users from "../../components/Icon/Home/Users";
import ClickHand from "../../components/Icon/Home/ClickHand";
import Clubs from "../../components/Icon/Home/Clubs";
import Card from "../../components/Icon/Home/Card";
import AuditorImg from "../../assets/img/auditor.png";

const { TextArea } = Input;

const options = [
  { value: "ISO 9001:2015", label: "ISO 9001:2015" },
  { value: "ISO 14001:2015", label: "ISO 14001:2015" },
  { value: "ISO 45001:2018", label: "ISO 45001:2018" },
  { value: "ISO 22000:2018", label: "ISO 22000:2018" },
  { value: "ISO 27001:2022", label: "ISO 27001:2022" },
  //   "ISO 14001:2015",
  //   "ISO 45001:2018",
  //   "ISO 27001:2013",
  //   "ISO 22000:2018",
  //   "ISO 37001:2013 Тэргүүлэх аудитор",
  //   "Баг ахлагч аудитор",
  //   "Олон улсын код: 8470",
];

const options1 = [
  {
    value: "Баталгаажуулалтын газрын дарга",
    label: "Баталгаажуулалтын газрын дарга",
  },
  {
    value: "Баг ахлах тэргүүлэх аудитор",
    label: "Баг ахлах тэргүүлэх аудитор",
  },
  //   { value: "ISO 45001:2018", label: "ISO 45001:2018" },
  //   { value: "ISO 22000:2018", label: "ISO 22000:2018" },
  //   { value: "ISO 27001:2022", label: "ISO 27001:2022" },
  //   "ISO 14001:2015",
  //   "ISO 45001:2018",
  //   "ISO 27001:2013",
  //   "ISO 22000:2018",
  //   "ISO 37001:2013 Тэргүүлэх аудитор",
  //   "Баг ахлагч аудитор",
  //   "Олон улсын код: 8470",
];
// for (let i = 10; i < 36; i++) {
//   options.push({
//     value: i.toString(36) + i,
//     label: i.toString(36) + i,
//   });
// }

function Auditors() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen1, setIsPopupOpen1] = useState(false);
  const [isImgUpload, setIsImgUpload] = useState("📷 Unggah foto*");
  const [uploadedImg, setUploadedImg] = useState(null);
  const [size, setSize] = useState("middle");
  const [componentDisabled, setComponentDisabled] = useState(false);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const [formData, setFormData] = useState({
    namaLengkap: "",
    ttl: "",
    email: "",
    noHp: "",
    statusPernikahan: "",
    alamat: "",
    kodePos: "",
    daftarRelawan: "",
    relawanCirebon: "",
    foto: null,
  });

  //   if (!isOpen) return null;

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    console.log(name, ": ", value);
    // const file = files[0];

    // if (!file) return;

    // const data = new FormData();
    // data.append("file", file);
    // data.append("upload_preset", "moncert");
    // data.append("cloud_name", "djtgckv94");

    // const res = await fetch(
    //   "https://api.cloudinary.com/v1_1/djtgckv94/image/upload",
    //   {
    //     method: "POST",
    //     body: data,
    //   }
    // );

    // const uploadedImgUrl = await res.json();

    // console.log("files " + uploadedImgUrl.url);
    // setFormData({
    //   ...formData,
    //   [name]: files ? files[0] : value,
    // });
  };

  const handleUploadImg = async (e) => {
    setIsImgUpload("Uploading....");
    const { files } = e.target;

    const file = files[0];

    if (!file) return;

    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "moncert");
      data.append("cloud_name", "djtgckv94");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/djtgckv94/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const uploadedImgUrl = await res.json();

      // Амжилттай эсэхийг шалгах
      if (res.ok && uploadedImgUrl?.url) {
        setIsImgUpload(`Uploaded: ${file.name}`);
        console.log("Uploaded URL:", uploadedImgUrl.url);
      } else {
        setIsImgUpload("Upload failed");
        console.error("Upload error:", uploadedImgUrl);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setIsImgUpload("Error during upload");
    }

    // const data = new FormData();
    // data.append("file", file);
    // data.append("upload_preset", "moncert");
    // data.append("cloud_name", "djtgckv94");

    // const res = await fetch(
    //   "https://api.cloudinary.com/v1_1/djtgckv94/image/upload",
    //   {
    //     method: "POST",
    //     body: data,
    //   }
    // );

    // const uploadedImgUrl = await res.json();

    // if (uploadedImg) {
    //   setIsImgUpload("Uploaded: ", uploadedImg.name);
    // }

    // console.log("files " + uploadedImgUrl.url);
    // setFormData({
    //   ...formData,
    //   [name]: files ? files[0] : value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    onClose();
  };

  return (
    <div>
      <div className="text-center my-10">
        <h5 className="l-bold">Аудиторын бүртгэл</h5>
        <p className="s-regular-gray max-w-3xl mx-auto py-5">
          We Focus on the details of everything we do. All to help businesses
          around the world Focus on what's most important to them.
        </p>
        <div className="space-x-4 flex justify-center">
          <div onClick={() => setIsPopupOpen1(true)}>
            <WhiteButton name="Аудитороор бүртгүүлэх" />
          </div>
          <div onClick={() => setIsPopupOpen(true)}>
            <BlueButton name="Аудитор хайх" />
          </div>
        </div>
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <div className="my-10">
          <div className="py-5">
            <h2 className="l-bold-none text-primaryBlue text-center ">
              Энхтөгс Банзрагч
            </h2>
            <div className="flex justify-center light-regular-none text-white space-x-3 my-2">
              <p className="border-r-2 pr-3">Баталгаажуулалтын газрын дарга</p>
              <p>Баг ахлах тэргүүлэх аудитор</p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-10 mb-28 gap-5">
            <div className="">
              <img src={AuditorImg} alt="" className="mx-auto w-60" />
            </div>
            <div className="space-y-3 pr-5">
              <div>
                <h5 className="s-bold-primary">Name</h5>
                <p className="s-regular">Энхтөгс Банзрагч</p>
              </div>
              <div>
                <h5 className="s-bold-primary">Position</h5>
                <p className="s-regular">
                  Баталгаажуулалтын газрын дарга, БАТА
                </p>
              </div>
              <div>
                <h5 className="s-bold-primary">Description</h5>
                <p className="s-regular">
                  ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, ISO 27001:2013,
                  ISO 22000:2018, ISO 37001:2013 Тэргүүлэх аудитор, Баг ахлагч
                  аудитор, Олон улсын код: 8470
                </p>
              </div>
            </div>
          </div>
        </div>
      </Popup>

      <WhiteModal isOpen={isPopupOpen1} onClose={() => setIsPopupOpen1(false)}>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Tabs */}
          {/* <div className="flex border-b">
            <button type="button" className="px-4 py-2 border-b-2 border-black">
              Daftar
            </button>
            <button type="button" className="px-4 py-2 text-gray-500">
              Donasi
            </button>
          </div> */}
          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-10 m-10">
            <div className="">
              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                disabled={componentDisabled}
                style={{ maxWidth: 600 }}
              >
                <Form.Item>
                  <Input
                    className="w-80"
                    bordered={false} // antd-ийн default border-ийг арилгана
                    style={{
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      paddingLeft: 0, // зүүн padding-ийг багасгах
                    }}
                    placeholder="Firstname"
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    className="w-80"
                    bordered={false} // antd-ийн default border-ийг арилгана
                    style={{
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      paddingLeft: 0, // зүүн padding-ийг багасгах
                    }}
                    placeholder="Lastname"
                  />
                </Form.Item>
                <Form.Item
                  //   label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    {
                      type: "email",
                      message: "The input is not a valid email!",
                    },
                  ]}
                >
                  <Input
                    className="w-80"
                    bordered={false} // antd-ийн default border-ийг арилгана
                    style={{
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      paddingLeft: 0, // зүүн padding-ийг багасгах
                    }}
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  //   label="Email"
                  name="phone"
                  //   rules={[
                  //     {
                  //       required: true,
                  //       message: "Please input your phone number!",
                  //     },
                  //     {
                  //       type: "number",
                  //       message: "The input is not a valid number!",
                  //     },
                  //   ]}
                >
                  <Input
                    className="w-80"
                    bordered={false} // antd-ийн default border-ийг арилгана
                    style={{
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      paddingLeft: 0, // зүүн padding-ийг багасгах
                    }}
                    placeholder="Phone number"
                  />
                </Form.Item>
                <Form.Item>
                  <TextArea
                    className="w-80"
                    showCount
                    maxLength={100}
                    rows={4}
                    bordered={false} // antd-ийн default border-ийг арилгана
                    style={{
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      paddingLeft: 0, // зүүн padding-ийг багасгах
                    }}
                    placeholder="Description"
                  />
                </Form.Item>
                <Form.Item>
                  <Select
                    // rootClassName="w-80"
                    className="w-80"
                    mode="multiple"
                    // size={size}
                    placeholder="Please select ISO standards"
                    bordered={false}
                    style={{
                      width: "20rem",
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      paddingLeft: 0,
                    }}
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>
                <Form.Item>
                  <Select
                    // rootClassName="w-80"
                    className="w-80"
                    mode="multiple"
                    // size={size}
                    placeholder="Please select positions"
                    bordered={false}
                    style={{
                      width: "20rem",
                      borderBottom: "1px solid #ccc",
                      borderRadius: 0,
                      paddingLeft: 0,
                    }}
                    onChange={handleChange}
                    options={options1}
                  />
                </Form.Item>
              </Form>
              {/* <input
                name="namaLengkap"
                placeholder="Nama Lengkap*"
                // value={formData.namaLengkap}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              />
              <input
                name="ttl"
                placeholder="TTL*"
                // value={formData.ttl}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                // value={formData.email}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              />
              <input
                name="noHp"
                placeholder="No HP*"
                // value={formData.noHp}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              />
              <input
                name="statusPernikahan"
                placeholder="Status Pernikahan*"
                // value={formData.statusPernikahan}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              />
              <input
                name="alamat"
                placeholder="Alamat*"
                // value={formData.alamat}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              />
              <input
                name="kodePos"
                placeholder="Kode Pos*"
                // value={formData.kodePos}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              /> */}
              {/* <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="middle">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
              <br />
              <br /> */}
              <Space direction="vertical" style={{ width: "100%" }}>
                {/* <Select
                  size={size}
                  defaultValue="a1"
                  onChange={handleChange}
                  style={{ width: 200 }}
                  options={options}
                /> */}

                {/* <Select
                  mode="tags"
                  size={size}
                  placeholder="Please select"
                  defaultValue={["a10", "c12"]}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                  options={options}
                /> */}
              </Space>
              {/* <select
                name="daftarRelawan"
                // value={formData.daftarRelawan}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              >
                <option value="">Daftar Jadi Relawan*</option>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select> */}
              {/* <select
                name="relawanCirebon"
                // value={formData.relawanCirebon}
                onChange={handleChange}
                className="border-b p-2 outline-none"
                required
              >
                <option value="">Jadi Relawan Cirebon*</option>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select> */}
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-md p-4">
              <input
                type="file"
                name="foto"
                onChange={handleUploadImg}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                {isImgUpload}
              </label>
              <p className="text-xs text-gray-500">
                Size file harus dibawah 10 MB
              </p>
            </div>
          </div>
          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </WhiteModal>

      <div className="mb-10">
        <h5 className="m-bold py-10">
          МОНГОЛЫН ГЭРЧИЛГЭЭЖСЭН АУДИТОРУУДЫН БҮРТГЭЛ (MГАБ) 
        </h5>
        <paragraph className="s-regular">
          <p>
            “МонСертф” ХХК нь менежментийн тогтолцооны стандартаар мэргэшсэн
            үндэсний аудитор, сургагч багш нарын бүртгэлийг олон улсын жишигт
            нийцүүлэн бүртгэх,  чадавхийг  нь  байнга  дээшлүүлж  хүний  нөөцийг
            бүрдүүлэх зорилгоор BSI-ийн ACP хөтөлбөрт хамрагдах, AFNOR болон
            ANKA GLOBAL-ийн аудиторын, EEG-ийн  сургагч багш нарын бүртгэлд
            хамруулах ажлыг эхлүүлэн орон тооны ба орон тооны бус аудитор,
            сургагч багш нарын бүртгэлийг МонСертф ХХК-ийн бүртгэлийг явуулж
            байна. Манай бүртгэлд хамрагдах, улмаар олон улсын хэмжээнд
            менежментийн тогтолцооны стандартыг нэвтрүүлэх, хэрэгжүүлэх,
            баталгаажуулах, багшлах чиглэлээр ажиллах чадавхи эзэмших зорилго
            бүхий Монголд үйл ажиллагаа явуулж байгаа аудитор, сургагч багш нар
            нь манайд хандаж бүртгэлд хамрагдах бүрэн боломжтой. “МонСертф” ХХК
            нь бүртгэлд хамрагдсан аудитор, сургагч багш нарын чадавхийг
            нэмэгдүүлэх, хөгжүүлэх чиглэлээр дараахи сургалтуудыг гадаад хамтын
            ажиллагааны хүрээнд байнга зохион байгуулж байх болно. Үүнд:
          </p>
          <ul className="list-outside list-disc py-2 mx-5">
            <li>Үндэсний аудитор бэлтгэх, мэргэшүүлэх сургалт </li>
            <li>Үндэсний сургагч багш бэлтгэх, мэргэшүүлэх сургалт</li>
          </ul>

          <p className="py-5">
            Монголын гэрчилгээжсэн аудиторуудыг МонСертф ХХК-ийн үндэсний
            хэмжээний бүртгэлд хамруулах, зэрэглэл тогтоох, кодлох, мэргэшүүлэх
            үйл ажиллагааг удирдлага, зохион байгуулалтаар хангах, олон улсын
            хэмжээнд аудиторуудыг бүртгэдэг, эрх олгодог байгууллагуудын
            бүртгэлд хамруулах, мэргэшүүлэх чиглэлээр гадаад хамтын ажиллагааг
            хөгжүүлэх, аудиторуудыг олон улс, бүс нутгийн түвшинд ажиллах нөхцөл
            бүрдүүлэхэд энэ бүртгэлийн зорилго оршино.
          </p>

          <p>Монголын гэрчилгээжсэн аудиторуудын бүртгэл нь:</p>
          <ul className="list-outside list-disc py-2 mx-5">
            <li>
              Менежментийн тогтолцооны стандартаар аудит хийхэд мэргэшсэн,
              шинээр суралцах сонирхол бүхий үндэсний орон тооны ба орон тооны
              бус аудиторуудын бүртгэлийг олон улсын жишигт нийцүүлэн МонСертф
              ХХК-нд бүртгэх, зэрэглэх, коджуулах,
            </li>
            <li>
              Менежментийн тогтолцооны стандартаар аудит хийхэд мэргэшсэн,
              шинээр суралцах сонирхол бүхий үндэсний орон тооны ба орон тооны
              бус аудиторуудын бүртгэлийг олон улсын жишигт нийцүүлэн МонСертф
              ХХК-нд бүртгэх, зэрэглэх, коджуулах,
            </li>
            <li>
              Олон улсын баталгаажуулалтын AFNOR болон ANKA GLOBAL-ийн аудиторын
              бүртгэлд хамруулан олон улс, бүс нутгийн хэмжээн ажиллах
              чадавхитай аудиторуудтай болох явдал юм.
            </li>
          </ul>
          <p>
            МонСертф ХХК нь Монгол Улсын хэмжээнд ажиллаж байгаа менежментийн
            тогтолцооны стандартуудаар аудитороор ажиллах чадавхи эзэмшиж
            гэрчилгээжсэн, шинээр суралцах зорилго бүхий бүх салбарын хүмүүсийг
            хүсэлтийнх нь дагуу бүртгэлд хамруулж мэргэшүүлэх бүрэн боломжтой.
          </p>
        </paragraph>
      </div>

      <div>
        <h5 className="m-bold uppercase py-5">
          Аудиторын ур чадварыг нэмэгдүүлэх менторшип хөтөлбөр
        </h5>
        <img src={Routine} alt="" />
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

export default Auditors;
