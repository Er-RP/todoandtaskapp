'use client';
import { changeMode, changeTheme } from '@/utils/helper'

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-secondary text-typography transition-colors ease-in-out duration-1000">
      {/* <div className='h-screen grid place-items-center'> */}
      <div className='min-h-[85vh]'>
        <h4>HEADING</h4>
        <div className='m-10 flex justify-between'>
          <div className='px-2'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci dignissimos magnam</p>
            <p>eos quas voluptates possimus dolore sunt velit eveniet eaque eius exercitationem aut, eum fuga neque, incidunt aliquid porro!</p>
          </div>
          <div className='px-2 text-2xl text-typography'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, recusandae nostrum pariatur dolor, porro optio ratione voluptates illum, ipsum excepturi natus delectus earum in. Quod nemo molestiae optio numquam beatae.</div>
          <div className='px-2'>
            <button className='p-2 rounded bg-primary text-secondary'>NEXT</button>
          </div>
        </div>
      </div>
    <div>
      <button className='py-2 px-8 bg-buttons  m-2' onClick={() => changeTheme("")}>Default</button>
      <button className='py-2 px-8 bg-buttons m-2' onClick={() => changeTheme("green")}>green</button>
      <button className='py-2 px-8 bg-buttons  m-2' onClick={() => changeMode()}>dark</button>
    </div>
   {/* </div> */}
    </main>
  )
}
