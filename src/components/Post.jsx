import React, { useState } from 'react';
import {
  FaRegHeart, FaHeart, FaComment, FaRegComment,
  FaRegBookmark, FaBookmark
} from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react'; // 引入 emoji picker


function Post({ image, username, postImage, caption }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const images = Array.isArray(postImage) ? postImage : [postImage];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comment, setComment] = useState(""); // 用來儲存用戶的評論
  const [comments, setComments] = useState([]); // 儲存所有評論
  const [showAllComments, setshowAllComments] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false); // 控制表情符號選擇器的顯示
  const displayedComments = showAllComments ? comments : comments.slice(-3);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value); // 更新輸入框的內容
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]); // 新增評論到列表
      setComment(""); // 清空評論輸入框
    }
  };

  const handleEmojiClick = (emoji) => {
    setComment(comment + emoji.emoji); // 在評論框中插入表情符號
  };

  return (
    <div className='w-[630px] bg-black text-white justify-center p-4 rounded-lg'>
      {/* top */}
      <div className='w-[470px] h-[46px] flex flex-row items-center space-x-3'>
        <div className='rounded-full h-[32px] w-[32px] overflow-hidden'>
          <img src={image} alt={username} className='w-full h-full object-cover' />
        </div>
        <div className='flex flex-col justify-center'>
          <span className='font-semibold text-sm'>{username}</span>
          <span className='text-gray-400 text-xs'>5 mins ago</span>
        </div>
      </div>

      {/* picture + controls */}
      <div className='w-[468px] max-h-[585px] overflow-hidden my-3 relative'>
        <img
          src={images[currentIndex]}
          alt="post"
          className='w-full object-cover rounded-md'
        />
        {/* show arrows only if multiple images */}
        {images.length > 1 && currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1 text-white"
          >
            <FaCircleChevronLeft className='text-2xl opacity-75 hover:opacity-100 transition' />
          </button>
        )}
        {images.length > 1 && currentIndex < images.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-1 text-white"
          >
            <FaCircleChevronRight className='text-2xl opacity-75 hover:opacity-100 transition'/>
          </button>
        )}
      </div>

      {/* bottom icon row  */}
      <div className='w-[630px] h-[40px] flex items-center justify-between text-2xl mt-2 px-2'>
        <div className='flex space-x-4'>
          {liked ? (
            <FaHeart
              className='hover:scale-100 transition-transform duration-200 cursor-pointer text-red-500'
              onClick={() => setLiked(false)} />
          ) : (
            <FaRegHeart
              className='hover:scale-110 transition-transform duration-200 cursor-pointer'
              onClick={() => setLiked(true)} />
          )}
          <FaRegComment className='hover:scale-110 transition-transform duration-200 cursor-pointer' />
          <LuSend className='hover:scale-110 transition-transform duration-200 cursor-pointer' />
          {saved ? (
            <FaBookmark
              className='hover:scale-100 cursor-pointer transition-transform duration-200'
              onClick={() => setSaved(false)} />
          ) : (
            <FaRegBookmark
              className='hover:scale-100 cursor-pointer transition-transform duration-200'
              onClick={() => setSaved(true)} />
          )}
        </div>
      </div>

      {/* Caption */}
      <div className='mt-4 text-sm text-white'>
        <span className="font-semibold">{username}</span> {caption}
      </div>
      
      {/* Direct Comment place */}
      <div className='mt-4'>
        <div className="flex items-center space-x-2">
          <textarea
            value={comment}
            onChange={handleCommentChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleCommentSubmit();
              }
            }}
            placeholder="留言..."
            className="text-white p-2 w-[450px] min-h-[40px] resize-none rounded-md overflow-hidden"
          />
          <button 
            onClick={() => setShowEmoji(!showEmoji)} 
            className='text-white text-2xl bg-black'>
            <FaRegSmile />
          </button>
        </div>
        
        {/* Emoji */}
        {showEmoji && (
          <div className='emoji-picker p-2 rounded-md mt-2 w-[450px]'>
            <EmojiPicker onEmojiClick={handleEmojiClick} height={300} width={250}/>
          </div>
        )}
        
        {comments.length > 0 && (
          <div className="mt-4 text-sm space-y-2 text-white w-[450px]">
            {/* If there are more than 3 comments, show the toggle button */}
            {comments.length > 3 && (
              <div
                className="text-gray-400 cursor-pointer hover:underline"
                onClick={() => {
                  setshowAllComments(!showAllComments);
                }}
              >
                {showAllComments ? '收起留言' : '更多留言...'}
              </div>
            )}
            <div
              className={`w-full ${showAllComments ? 'h-auto' : 'h-[150px]'} overflow-y-auto border p-2 rounded-md bg-gray-800 mt-2 transition-all duration-300`}
              style={{
                maxHeight: showAllComments ? 'none' : '100px', // 如果顯示更多則不限高度，否則設為200px
                minHeight: '100px',
              }}
            >
              {displayedComments.map((c, i) => (
                <div key={i} className="p-2 rounded-md">
                  <span className="font-semibold mr-2">用戶：</span>{c}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
