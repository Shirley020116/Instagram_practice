import './App.css';
import { useRef, useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Story from './components/Story.jsx';
import Suggestion from './components/Suggestion.jsx';
import Post from './components/Post.jsx';
import Database from './components/database.jsx';
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

function App() {
  const storyRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = storyRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scrollLeft = () => {
    storyRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const scrollRight = () => {
    storyRef.current.scrollBy({ left: 100, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = storyRef.current;
    if (!el) return;

    updateScrollButtons(); // 初始化
    el.addEventListener('scroll', updateScrollButtons);
    return () => {
      el.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  return (
    <div className="grid grid-cols-12 gap-4 h-screen bg-black text-white">
      
      {/* Sidebar */}
      <div className="hidden md:block md:col-span-2 border-r border-white bg-black">
        <Sidebar />
      </div>

      {/* Main */}
      <div className="col-span-12 md:col-span-6 border-x border-neutral-800 overflow-y-auto no-scrollbar">
          {/* Story Sticky 區塊 */}
          <div className="sticky top-0 z-10 bg-black bg-opacity-90 backdrop-blur-md p-2">
            <div
              className="relative"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              {/* Left Button */}
              {hovering && canScrollLeft && (
                <button
                  onClick={scrollLeft}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
                  >
                  <FaCircleChevronLeft className='text-white text-2xl opacity-75 hover:opacity-100 transition'/>
                </button>
              )}

              {/* Story 列 */}
              <div
                ref={storyRef}
                className="flex space-x-0 overflow-x-auto no-scrollbar px-4 mt-4"
              >
                {Database.map((story, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Story image={story.image} username={story.username} />
                  </div>
                ))}
              </div>

              {/* Right Button */}
              {hovering && canScrollRight && (
                <button
                  onClick={scrollRight}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-75"
                >
                  <FaCircleChevronRight className="text-white text-2xl opacity-75 hover:opacity-100 transition" />
                </button>
              )}
            </div>

          {/* Posts */}
          <div className="flex flex-col space-y-4 p-4 md:pl-14">
            {Database.map((poster, index) => (
              <Post
                key={index}
                image={poster.image}
                username={poster.username}
                postImage={poster.postImage}
                caption = {poster.caption}
              />
            ))}
          </div>
        </div>
      </div>
        {/* Rihgt side Suggestions */}
        <div className="hidden md:block md:col-span-3 p-4">
          <Suggestion />
        </div>
      </div>
  );
}

export default App;
