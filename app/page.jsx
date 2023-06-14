import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'
import useState from 'react'
// import Image from 'next/image'
// import profilePic from './me.jpg'

export default function Page() {

  // const [darkMode, setDarkMode] = React.useState(false);

  return (
    <main className="bg-white px-10 md:px-20 lg:px-60">

      <section className="min-h-screen">

        <nav className=' py-10 mb-12 flex justify-between'>
          <h1 className=' text-xl'>Ryan</h1>
          <ul className=' flex items-center gap-5'>
            <li><BsFillMoonStarsFill className=' cursor-pointer text-xl'></BsFillMoonStarsFill></li>
            <li><a href="#" className=' bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white px-4 py-2 rounded-md'>resume</a></li>
          </ul>
        </nav>

        <div className=' text-center p-10 gap-5'>
          <h2 className='text-4xl py-5 font-medium'>Ryan Fadhilah</h2>
          <h3 className='text-2xl py-5'>Software Engineer</h3>
          <p className='text-md py-5 leading-8 text-gray-500'>A full stack web developer that specialized in Front-End development. Interested in long term commitment remote job</p>
        </div>

        <div className='text-4xl flex justify-center gap-3 text-gray-400'>
          <AiFillLinkedin></AiFillLinkedin>
          <AiFillGithub></AiFillGithub>
          <AiFillTwitterSquare></AiFillTwitterSquare>
        </div>

        <div className='flex justify-center'>
          <div className='bg-gray-500 h-64 w-64 flex justify-center items-center rounded-full my-20'>test

            {/* <Image
            // src="/profile.png"
            src={profilePic}
            width={500}
            height={500}
            alt="Picture of the author"
          /> */}
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1'>About Me</h3>
          <p className='text-md py-5 leading-8 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente quam mollitia explicabo deleniti impedit corrupti illum, amet vel maxime provident eligendi eveniet nisi dolor quae non natus? Accusamus, sed!
          </p>
        </div>

        <div className=' shadow-lg p-10 rounded-xl my-5'>
          <div>
            {/* <Image></Image> */}
            <h3 className='text-lg font-medium pb-2'>About Me</h3>
            <p className='py-2 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi et quam, impedit nihil accusantium aliquid praesentium corrupti blanditiis in quos, velit dolore iusto? Nesciunt nulla perspiciatis reprehenderit velit. Adipisci, aliquid.

            </p>
            <h4 className='py-4 text-teal-600 font-bold'>Front-End</h4>
            <ul>
              <li className='text-grey-400 py-1'>Tailwind</li>
              <li className='text-grey-400 py-1'>React</li>
              <li className='text-grey-400 py-1'>Next</li>
            </ul>
          </div>
        </div>

        <div className=' shadow-lg p-10 rounded-xl my-5'>
          <div>
            {/* <Image></Image> */}
            <h3 className='text-lg font-medium pb-2'>About Me</h3>
            <p className='py-2 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi et quam, impedit nihil accusantium aliquid praesentium corrupti blanditiis in quos, velit dolore iusto? Nesciunt nulla perspiciatis reprehenderit velit. Adipisci, aliquid.

            </p>
            <h4 className='py-4 text-teal-600 font-bold'>Front-End</h4>
            <ul>
              <li className='text-grey-400 py-1'>Tailwind</li>
              <li className='text-grey-400 py-1'>React</li>
              <li className='text-grey-400 py-1'>Next</li>
            </ul>
          </div>
        </div>

        <div className=' shadow-lg p-10 rounded-xl my-5'>
          <div>
            {/* <Image></Image> */}
            <h3 className='text-lg font-medium pb-2'>About Me</h3>
            <p className='py-2 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi et quam, impedit nihil accusantium aliquid praesentium corrupti blanditiis in quos, velit dolore iusto? Nesciunt nulla perspiciatis reprehenderit velit. Adipisci, aliquid.

            </p>
            <h4 className='py-4 text-teal-600 font-bold'>Front-End</h4>
            <ul>
              <li className='text-grey-400 py-1'>Tailwind</li>
              <li className='text-grey-400 py-1'>React</li>
              <li className='text-grey-400 py-1'>Next</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1'>Portofolio</h3>
          <p className='text-md py-5 leading-8 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente quam mollitia explicabo deleniti impedit corrupti illum, amet vel maxime provident eligendi eveniet nisi dolor quae non natus? Accusamus, sed!
          </p>
        </div>
      </section>

    </main>
  )


}