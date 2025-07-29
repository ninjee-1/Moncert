export default function Button({ name }) {
  return (
    <>
      <button className="bg-primaryBlue focus:outline-none outline-none text-white shadow-md shadow-gray-500 hover:shadow-lg rounded-full px-7 transition duration-300">
        {name}
      </button>
    </>
  );
}
