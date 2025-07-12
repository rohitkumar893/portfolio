import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
     <>
        <div className='w-auto h-[30px] fixed left-4 top-[98%] rotate-[-90deg] origin-left hidden md:block bg-white px-[10px]'>
          <h2 className='text-black font-medium'>rkrohitkumar893@gmail.com</h2>
        </div>
      
      <div className="container3" id="home"></div>

     <div className='main w-[100%] flex flex-col'>
            
            <Navbar />
          
            <div className='flex flex-col justify-center items-center gap-[40px]' id="home">
              <div className='w-full flex items-center flex-col select-none gap-[70px] md:gap-[20px]'>
              <h1 className='namelogo drop-shadow-lg text-[110px] sm:text-[185px]  flex justify-center tracking-wide sm:mt-[120px] mt-[220px]'>Rohit</h1>
              <div class="loader"><span class="loader-text">Software Developer</span></div>

              <div className='w-full flex justify-center mt-[60px] sm:mt-[40px]'>
              <div className='bgsocials flex justify-center gap-[45px] w-[340px] h-[100px] rounded-xl'>
              <a href="resume.pdf" className='flex flex-col justify-center items-center'><img src="/resumeicon.png" className='h-[40px] drop-shadow-lg transition-transform hover:scale-110'></img><h3 className='label text-center mt-[6px]'>RESUME</h3></a>
              <a href="https://github.com/rohitkumar893" className='flex flex-col justify-center items-center'><img src="/github.png" className='h-[40px] drop-shadow-lg transition-transform hover:scale-110'></img><h3 className='label text-center mt-[6px]'>GITHUB</h3></a>
              <a href="https://www.linkedin.com/in/rohitkumar893/" className='flex flex-col justify-center items-center'><img src="/linkedin.png" className='h-[40px] drop-shadow-lg transition-transform hover:scale-110'></img><h3 className='label text-center mt-[6px]'>LINKEDIN</h3></a>
            </div>
            </div>
            </div>
            </div>
          </div>

          <div className='h-[3px]'>
            </div>

           
        <div className='aboutme text-[34px] sm:text-[40px] w-full bg-black p-[150px] px-[40px] sm:px-[120px]' id="about">
            <h1 className='text-[36px] text-center text-yellow-200 font-bold'>ABOUT ME :</h1>
            <p className='text-[20px] sm:text-[25px] mt-[50px] leading-loose'>A postgraduate in Computer Applications (MCA) with a strong passion for programming and a deep curiosity for exploring new and emerging technologies. Fueled by a passion for constant growth and innovation, I’m always looking to level up my skills and stay ahead in the ever-evolving tech world. With an ambition to become a Software Development Engineer (SDE), my aim is to use my knowledge and experience to craft scalable, impactful software solutions that truly make a difference.</p>
        </div>

        <div className='h-[3px]'>
            </div>

        <div className='projectscont bg-black text-white flex justify-center items-center h-auto p-[150px] px-[40px] sm:px-[120px] flex-col w-full' id="projects">
          <h1 className='text-[36px] text-center text-yellow-200 font-bold'>PROJECTS I'VE WORKED ON :</h1>
          <div className='projects flex flex-col flex-wrap justify-evenly gap-[0px] sm:gap-[70px] text-black mt-[50px]'>
            <a href="https://roomsley.vercel.app/"><div className='mt-[50px] md:ml-[-350px] mb-[40px] rotate-357 h-[280px] w-[360px] sm:h-[300px] sm:w-[400px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-300'>
              <img src="roomsley.png" className='w-full shadow-sm'></img>
              <h1 className='text-[20px] p-[18px]'>Roomsley</h1>
            </div></a>

            <a href=""><div className='mt-[50px] md:mr-[-350px] mb-[40px] rotate-3 h-[280px] w-[360px] sm:h-[300px] sm:w-[400px] flex flex-col justify-between items-center bg-gray-100 rounded-md hover:bg-blue-300'>
              <img src="portf.png" className='w-full shadow-sm'></img>
              <h1 className='text-[20px] p-[18px]' id="portfolio">Portfolio</h1>
            </div></a>
            </div>
          </div>

        <div className='h-[3px]'>
        </div>

        <div className='skills text-[40px] w-full bg-black p-[150px] px-[40px] sm:px-[120px] flex flex-col gap-[40px]' id="skills">
          <h1 className='text-center text-[36px] skillstext text-yellow-200 font-bold'>MY TECH STACK :</h1>
          
          <div className="languages">
            <h3 className='text-center text-[32px] mt-[20px] text-yellow-200'>LANGUAGES</h3>
            
            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <img src="typescript.png" className="h-[40px]" alt="TypeScript Logo" />
              <h3 className="text-[30px]">TYPESCRIPT</h3>
            </div>

            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <img src="javascript.png" className="h-[40px]" alt="JavaScript Logo" />
              <h3 className="text-[30px]">JAVASCRIPT</h3>
            </div>

            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <img src="html.png" className="h-[40px]" alt="HTML Logo" />
              <h3 className="text-[30px]">HTML</h3>
            </div>

            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <img src="css.png" className="h-[40px]" alt="CSS Logo" />
              <h3 className="text-[30px]">CSS</h3>
            </div>
          </div>

          <div className="frontend">
            <h3 className='text-center text-[32px] mt-[20px] text-yellow-200'>FRONTEND</h3>

            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <img src="react.png" className="h-[40px]" alt="React Logo" />
              <h3 className="text-[30px]">REACT</h3>
            </div>

            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <img src="Tailwind Logo.png" className="h-[28px]" alt="Tailwind Logo" />
              <h3 className="text-[30px]">TAILWIND CSS</h3>
            </div>
          </div>

          <div className="backend">
            <h3 className='text-center text-[32px] mt-[20px] text-yellow-200'>BACKEND</h3>
            
            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <img src="nod.png" className="h-[40px] mt-1" alt="Node.js Logo" />
              <h3 className="text-[30px]">NODE JS</h3>
            </div>


            <div className="flex justify-center items-center gap-4 mt-[20px]">
              <img src="exp.png" className="logo2 h-[40px]" alt="Express Logo" />
              <h3 className="text-[30px]">EXPRESS JS</h3>
              {/* <h3 className="text-[30px]">FIREBASE</h3> */}
            </div>
          </div>    
        </div>

        <div className='h-[3px]'>
        </div>

        <div className='certifications flex flex-col justify-center items-center gap-[90px] p-[150px] px-[40px] sm:px-[120px]' id="certifications">
            <h1 className='text-[36px] text-yellow-200 font-bold'>CERTIFICATIONS :</h1>
            
            <div>
              <a href='https://www.coursera.org/account/accomplishments/verify/LFQ94ZUI1Q7K'><img src='microsoft.jpg' className='h-[240px] md:h-[340px] rotate-357 hover:scale-95'></img></a>
              <a href='https://www.coursera.org/account/accomplishments/verify/2FGSN01B5TS3'><img src='meta.jpg' className='h-[240px] md:h-[340px] mt-[100px] rotate-3 hover:scale-95'></img></a>
            </div>
        </div>

        <div className='h-[3px]'>
        </div>

        <div className='githubstats text-[34px] sm:text-[40px] w-full bg-black p-[150px] px-[40px] sm:px-[120px] flex flex-col items-center justify-center gap-[10px]' id="github">
            <h1 className='text-[36px] text-center text-yellow-200 font-bold'>GITHUB STATS :</h1>
            <img src="https://nirzak-streak-stats.vercel.app/?user=rohitkumar893&theme=dark&hide_border=false" className='w-[350px] sm:w-[485px] mt-[50px]'></img>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=rohitkumar893&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact" alt="GitHub chart" className='w-[348px] sm:w-[480px] mt-[50px]'/>
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
