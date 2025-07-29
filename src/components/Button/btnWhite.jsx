export default function Button({ name }) {
  return (
    <>
      <button className="bg-white focus:outline-none hover:ring-0 hover:outline-0 hover:border-gray-200 border border-transparent outline-non text-grayOne rounded-full px-7 shadow-md hover:shadow-lg shadow-gray-500 transition duration-300">
        {name}
      </button>
    </>
  );
}
