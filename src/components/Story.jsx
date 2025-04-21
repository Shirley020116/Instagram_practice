import React, { useState } from 'react';

function Story({ image, username, storyContent, mode = 'contain', outlineColor = 'outline-red-500' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 頭像預覽 */}
      <div
        className="flex flex-col items-center w-20 md:max-h-[100px] cursor-pointer mt-4"
        onClick={() => setIsOpen(true)}
      >
        <div className={`w-14 h-14 rounded-full outline-2 outline-offset-2 overflow-hidden ${outlineColor}`}>
          <img src={image} alt={username} className="w-full h-full object-cover rounded-full" />
        </div>
        <span className="w-16 text-xs mt-1 overflow-hidden whitespace-nowrap text-white text-center">
          {username}
        </span>
      </div>

      {/* Story Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <div className="relative w-full h-full flex justify-center items-center">
            {/* 根據 mode 設定圖片顯示方式 */}
            <img
              src={storyContent}
              alt="story"
              className={`max-h-full max-w-full object-${mode} object-center`}  // 使用 `mode` 決定顯示方式
            />

            {/* 關閉按鈕 */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-white text-2xl bg-black bg-opacity-50 px-3 py-1 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Story;
