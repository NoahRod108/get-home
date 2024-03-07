import { FaShare } from "react-icons/fa";

const ShareButtons = () => {
  return (
    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
      <FaShare className="mr-2" /> Share Property
    </button>
  );
};

export default ShareButtons;
