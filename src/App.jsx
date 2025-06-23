import './App.css'

function App() {

  return (
     <>

        <div className='w-auto h-[30px] fixed left-4 top-[98%] rotate-[-90deg] origin-left hidden md:block bg-white px-[10px]'>
          <h2 className='text-black font-medium'>rkrohitkumar893@gmail.com</h2>
        </div>
      
      <div className="container3 w-[100%]"></div>

     <div className='main h-screen w-[100%]'>
          <nav className='navbar fixed h-[120px] w-full flex p-[30px] justify-center items-center gap-[45px]'>
              <a href="resume.pdf" className='flex flex-col justify-center items-center'><img src="/resumeicon.png" className='h-[40px] drop-shadow-lg transition-transform hover:scale-110'></img><h3 className='label text-center mt-[6px]'>RESUME</h3></a>
              <a href="https://github.com/rohitkumar893" className='flex flex-col justify-center items-center'><img src="/github.png" className='h-[40px] drop-shadow-lg transition-transform hover:scale-110'></img><h3 className='label text-center mt-[6px]'>GITHUB</h3></a>
              <a href="https://www.linkedin.com/in/rohitkumar893/" className='flex flex-col justify-center items-center'><img src="/linkedin.png" className='h-[40px] drop-shadow-lg transition-transform hover:scale-110'></img><h3 className='label text-center mt-[6px]'>LINKEDIN</h3></a>
          </nav>
            
            <div className='w-full h-screen flex justify-center items-center flex-col select-none'>
              <h1 className='namelogo drop-shadow-lg text-[100px] sm:text-[185px]  flex justify-center items-center tracking-wide animate-pulse'><span className='text-yellow-200'>R</span><span className='text-yellow-200'>o</span><span className='text-yellow-200'>h</span><span className='text-yellow-100'>i</span><span className='text-yellow-100'>t</span><span>.</span></h1>
              <h3 className='text-[20px] text-white font-light flex'>WELCOME TO MY PORTFOLIO!</h3>
              
            </div>

            <div className='w-full flex justify-center items-end mt-[-130px] sm:mt-[-90px] animate-bounce '>
              <img src="downarrow.png" className='arrow h-[32px] w-[32px] drop-shadow-lg transition-transform hover:translate-y-4'></img>
            </div>
          </div>

          <div className='h-[3px]'>
            </div>

        <div className='aboutme text-[34px] sm:text-[40px] w-full bg-black p-[150px] px-[40px] sm:px-[120px]'>
            <h1 className='text-[36px] text-center text-yellow-200 font-bold'>ABOUT ME :</h1>
            <p className='text-[20px] sm:text-[25px] mt-[50px] leading-loose'>A postgraduate in Computer Applications (MCA) with a strong passion for programming and a deep curiosity for exploring new and emerging technologies. Fueled by a passion for constant growth and innovation, I’m always looking to level up my skills and stay ahead in the ever-evolving tech world. With an ambition to become a Software Development Engineer (SDE), my aim is to use my knowledge and experience to craft scalable, impactful software solutions that truly make a difference.</p>
        </div>

        <div className='h-[3px]'>
        </div>

        <div className='projectscont bg-black text-white flex justify-center items-center h-auto p-[80px] flex-col w-full'>
          <h1 className='text-[36px] text-center text-yellow-200 font-bold'>PROJECTS I'VE WORKED ON :</h1>
          <div className='projects flex flex-col flex-wrap justify-evenly gap-[0px] sm:gap-[70px] text-black mt-[50px]'>
            <a href="https://roomsley.vercel.app/"><div className='mt-[50px] md:ml-[-350px] mb-[40px] rotate-357 h-[280px] w-[360px] sm:h-[300px] sm:w-[400px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-300'>
              <img src="roomsley.png" className='w-full shadow-sm'></img>
              <h1 className='text-[20px] p-[18px]'>Roomsley</h1>
            </div></a>

            <a href=""><div className='mt-[50px] md:mr-[-350px] mb-[40px] rotate-3 h-[280px] w-[360px] sm:h-[300px] sm:w-[400px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-300'>
              <img src="portf.png" className='w-full shadow-sm'></img>
              <h1 className='text-[20px] p-[18px]'>Portfolio</h1>
            </div></a>
            </div>
          </div>

        <div className='h-[3px]'>
        </div>

        <div className='skills text-[40px] w-full bg-black p-[80px] px-[40px] sm:px-[120px] flex flex-col gap-[40px]'>
          <h1 className='text-center text-[36px] skillstext text-yellow-200 font-bold'>MY TECH STACK :</h1>
          <div className="languages">
            <h3 className='text-center text-[32px] mt-[20px] text-yellow-200'>LANGUAGES</h3>
            <h3 className='text-center text-[32px] mt-[20px]'>TYPESCRIPT</h3>
            <h3 className='text-center text-[32px] mt-[20px]'>JAVASCRIPT</h3>
            <h3 className='text-center text-[32px] mt-[20px]'>HTML</h3>
            <h3 className='text-center text-[32px] mt-[20px]'>CSS</h3>
          </div>

          <div className="frontend">
            <h3 className='text-center text-[32px] mt-[20px] text-yellow-200'>FRONTEND</h3>
            <h3 className='text-center text-[32px] mt-[20px]'>REACT</h3>
            <h3 className='text-center text-[32px] mt-[20px]'>TAILWIND CSS</h3>
          </div>

          <div className="backend">
            <h3 className='text-center text-[32px] mt-[20px] text-yellow-200'>BACKEND</h3>
            <h3 className='text-center text-[32px] mt-[20px]'>NODE JS</h3>
            <h3 className='text-center text-[32px] mt-[20px]'>EXPRESS JS</h3>
            {/* <h3 className='text-center text-[32px] mt-[20px]'>FIREBASE</h3> */}
          </div>    
        </div>

        <div className='h-[3px]'>
        </div>

        <div className='certifications flex flex-col justify-center items-center gap-[90px] p-[40px] md:p-[100px]'>
            <h1 className='text-[36px] text-yellow-200 font-bold'>CERTIFICATIONS :</h1>
            
            <div>
              <a href='https://www.coursera.org/account/accomplishments/verify/LFQ94ZUI1Q7K'><img src='microsoft.jpg' className='h-[240px] md:h-[340px] rotate-357 hover:scale-95'></img></a>
              <a href='https://www.coursera.org/account/accomplishments/verify/2FGSN01B5TS3'><img src='meta.jpg' className='h-[240px] md:h-[340px] mt-[100px] rotate-3 hover:scale-95'></img></a>
            </div>
        </div>

        <div className='h-[3px]'>
        </div>

         <div className="logos flex justify-center items-center flex-col gap-[30px] bg-black p-[40px]">
            <div className="toplogos flex gap-[65px]">
              <img src="mon.png" className='logo1 h-[50px] sm:h-[80px]'></img>
              <img src="exp.png" className='logo2 h-[50px] sm:h-[80px]'></img>
              <img src="js.png" className='logo3 h-[50px] sm:h-[80px]'></img>
            </div>
            <div className= 'bottomlogos flex gap-[65px]'>
              <img src="react.png" className='logo1 h-[50px] sm:h-[80px]'></img>
              <img src="nod.png" className='logo2 h-[50px] sm:h-[80px]'></img>
              <img src="vite.png" className='logo3 h-[50px] sm:h-[80px]'></img>
            </div>
         </div>  
    </>
  )
}


export default App
