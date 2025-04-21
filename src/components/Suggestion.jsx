import React from 'react'

function Suggestion(){
  return(
    <aside className='border-box'>
      <div className='md:w-[320px] md:h-[547x] bg-black p-4 h-screen flex flex-col items-center md:items-start mt-8'>
        {/* Top */}
        <div className='flex flex-row md:w-[319px] md:h-[44px] items-center justify-between px-2 py-2'>
          <div className='flex items-center'>
            {/* UserPicture */}
            <div className='rounded-full h-11 w-11 overflow-hidden mr-3'>
              <img src='./user2.PNG' className='w-full h-full object-cover'/>
            </div>
            {/* UserName */}
            <div className='flex flex-col'>
              <span className='font-semibold text-sm'>Shirleyyy116</span>
              <span className='text-gray-400 text-xs'>snow</span>
            </div>
          </div>
          {/* switcher button */}
          <button className="ml-auto border-none outline-none text-blue-400 hover:text-white focus:outline-none active:opacity-80 transition-all">
            切換
          </button>
        </div>
        
        {/* Middle */}
        <div className='flex flex-col md:w-[319px] md:h-[44px] justify-between space-y-4 px-2 py-2 mt-2'>
          <div className="flex justify-between items-center">
            <h3 className="text-sm text-gray-400 font-semibold">為你推薦</h3>
            <button className="text-base font-semibold text-white hover:text-gray-400 transition-colors">
              查看全部
            </button>
          </div>

          {/* 建議用戶清單 */}
          <div className="flex flex-col space-y-4">
            {/* 單個推薦用戶 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src="./sug1.jpg" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">alex_dev</span>
                  <span className="text-xs text-gray-400">推薦給你</span>
                </div>
              </div>
              <button className="text-xs text-blue-400 font-semibold hover:text-white">
                追蹤
              </button>
              
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src="./sug2.jpg" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">_taisuki</span>
                  <span className="text-xs text-gray-400">yichfksl 在追蹤</span>
                </div>
              </div>
              <button className="text-xs text-blue-400 font-semibold hover:text-white">
                追蹤
              </button>
              
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src="./sug3.jpg" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">hsinwang_1234</span>
                  <span className="text-xs text-gray-400">ericchu 在追蹤</span>
                </div>
              </div>
              <button className="text-xs text-blue-400 font-semibold hover:text-white">
                追蹤
              </button>
              
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src="./sug4.jpg" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">_eattpangt_</span>
                  <span className="text-xs text-gray-400">推薦給你</span>
                </div>
              </div>
              <button className="text-xs text-blue-400 font-semibold hover:text-white">
                追蹤
              </button>
              
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                  <img src="./sug5.jpg" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">travel_with_you</span>
                  <span className="text-xs text-gray-400">推薦給你</span>
                </div>
              </div>
              <button className="text-xs text-blue-400 font-semibold hover:text-white">
                追蹤
              </button>
            </div>
          </div>
          <div className="text-[12px] text-gray-500 flex flex-wrap gap-x-2 gap-y-1 mt-6 leading-snug">
            <span>關於</span>
            <span>使用說明</span>
            <span>新聞稿</span>
            <span>API</span>
            <span>工作機會</span>
            <span>隱私</span>
            <span>使用條款</span>
            <span>地點</span>
            <span>語言</span>
            <span>Meta 驗證</span>
            <p className="w-full mt-2">&copy; 2025 Instagram from Meta</p>
          </div>
        </div>
        {/* Bottom */}
      </div>
      <div className='w-[300px] bg-black text-white'>
      </div>

    </aside>

  )
};

export default Suggestion;
