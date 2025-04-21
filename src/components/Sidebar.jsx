import { FaYoutube, FaSearch, FaHeart, FaEnvelope, FaInstagram } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BiMessageRounded } from "react-icons/bi";
import { MdOutlineExplore, MdOutlineAddBox } from "react-icons/md";
import { BsClipboardData } from "react-icons/bs";
import { BsThreads } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

function Sidebar() {
  return(
    <div className='border-box'>
      <aside className='w-[73px] md:w-[220px] bg-black p-4 h-screen flex flex-col items-center md:items-start'>
        {/* instagram icon */}
        <div className="h-[73px] flex items-center justify-center md:justify-start px-2">
          <span className="hidden md:flex items-center h-full text-2xl font-[satisfy] font-bold leading-none transform translate-y-[2px] transition duration-500 ease-in-out opacity-30 md:opacity-100 scale-90 md:scale-100">
            Instagram
          </span>
          <FaInstagram className="inline-block md:hidden h-6 w-6 transform transition duration-500 ease-in-out opacity-100 md:opacity-0 scale-100 md:scale-90" />
        </div>

        {/* others */}
        <div className="flex flex-col space-y-1 mt-4 w-full">
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <GoHomeFill className='w-6 h-6 text-white mr-4' />
            <span className="hidden md:inline text-white text-l font-bold">首頁</span>
          </div>
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <FaSearch className='w-6 h-6 text-white mr-4' />
            <span className="hidden md:inline text-white text-l font-bold">搜尋</span>
          </div>
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <MdOutlineExplore className='w-6 h-6 text-white mr-4' />
            <span className="hidden md:inline text-white text-l font-bold">探索</span>
          </div>
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <FaYoutube className='w-6 h-6 text-white mr-4' />
            <span className="hidden md:inline text-white text-l font-bold">連續短片</span>
          </div>
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <BiMessageRounded className='w-6 h-6 text-white mr-4' />
            <span className="hidden md:inline text-white text-l font-bold">訊息</span>
          </div>
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <FaHeart className='w-6 h-6 text-white mr-4' />
            <span className="hidden md:inline text-white text-l font-bold">通知</span>
          </div>
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <MdOutlineAddBox className='w-6 h-6 text-white mr-4' />
            <span className="hidden md:inline text-white text-l font-bold">建立</span>
          </div>
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <BsClipboardData className='w-6 h-6 text-white mr-4' />
            <span className="hidden md:inline text-white text-l font-bold">主控板</span>
          </div>
          <div className="flex items-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer">
            <div className='w-6 h-6 rounded-full overflow-hidden mr-4'>
              <img src="/user1.jpg" alt="user1" />
            </div>
            <span className="hidden md:inline text-white text-l font-bold">個人檔案</span>
          </div>

        </div>
          <div className='flex flex-col space-y-1 mt-auto w-full'>
            <div className='flex itmes-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer'> 
              <BsThreads className='w-6 h-6 mr-4' />
              <span className='hidden md:inline text-white text-l font-bold'>Threads</span>
            </div>
            <div className='flex itmes-center w-full px-3 py-3 hover:bg-[#1a1a1a] rounded-lg transition duration-300 cursor-pointer'> 
              <CgDetailsMore className='w-6 h-6 mr-4' />
              <span className='hidden md:inline text-white text-l font-bold'>更多</span>
            </div>

          </div>
        {/* bottom */}
      </aside>
    </div>
  )
}

export default Sidebar;