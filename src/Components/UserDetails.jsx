import React from 'react';

const UserDetails = () => {
    return (
        <div>
            <div className="bg-white border-l border-gray-400/opacity-20 ">
  <div className="py-5 flex-col justify-start items-center gap-4 flex">
    <div className="rounded-[500px] justify-center items-center inline-flex">
      <div className="grow shrink basis-0 self-stretch rounded-[500px] justify-center items-center flex">
        <div className="" />
        <img src="/public/profile.png" alt="" className="mx-auto" />
      </div>
    </div>
    <div className="flex-col justify-start items-center gap-1 flex">
      <div className="text-center text-gray-800 text-xs font-semibold font-['Rubik'] leading-[18px]">Lucian Obrien</div>
      <div className="text-center text-gray-600 text-xs font-normal font-['Rubik'] leading-[18px]">Prius C Toyota 2012</div>
    </div>
  </div>
  <div className="w-full h-10 pl-4 pr-3 bg-gray-100 justify-between items-center inline-flex">
    <div className="text-gray-500 text-xs font-medium font-['Rubik'] uppercase leading-[18px]">Information</div>
    <div className="w-4 h-4 relative" />
  </div>
  <div className="px-4 py-5 flex-col justify-start items-start gap-4 flex">
    <div className="w-[200px] justify-start items-center gap-2 inline-flex">
      <div className="w-5 h-5 relative" />
      <div className="grow shrink basis-0 text-gray-800 text-xs font-normal font-['Rubik'] leading-[18px]">5758 Highway 39</div>
    </div>
    <div className="w-[200px] justify-start items-center gap-2 inline-flex">
      <div className="w-5 h-5 relative" />
      <div className="grow shrink basis-0 text-gray-800 text-xs font-normal font-['Rubik'] leading-[18px]">(229)538-1421</div>
    </div>
  </div>
  <div className="w-full h-10 pl-4 pr-3 bg-gray-100 justify-between items-center inline-flex">
    <div className="text-gray-500 text-xs font-medium font-['Rubik'] uppercase leading-[18px]">Attachments (8)</div>
    <div className="w-4 h-4 relative" />
  </div>
  <div className="self-stretch grow shrink basis-0 px-4 py-5 flex-col justify-start items-start gap-4 flex">
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <img className="w-10 h-10 rounded-lg" src="https://via.placeholder.com/40x40" />
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="text-gray-800 text-xs font-normal font-['Rubik'] leading-[14px]">large-news.txt</div>
        <div className="text-gray-400 text-[10px] font-normal font-['Rubik'] leading-[14px]">07 Jul 2022 11:00 AM</div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <img className="w-10 h-10 rounded-lg" src="https://via.placeholder.com/40x40" />
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="text-gray-800 text-xs font-normal font-['Rubik'] leading-[14px]">design-suriname-2015.mp3</div>
        <div className="text-gray-400 text-[10px] font-normal font-['Rubik'] leading-[14px]">18 Jul 2022 10:00 PM</div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <div className="p-2 bg-gray-100 rounded-lg justify-start items-start flex">
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute" />
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
        <div className="text-gray-800 text-xs font-normal font-['Rubik'] leading-[14px]">gustavia-entertainment-productivity.docx</div>
        <div className="text-gray-400 text-[10px] font-normal font-['Rubik'] leading-[14px]">03 Aug 2022 1:00 PM</div>
      </div>
    </div>


  
  </div>
</div>
</div>
    );
}

export default UserDetails;
