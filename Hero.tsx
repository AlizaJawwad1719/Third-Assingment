/* eslint-disable react/jsx-no-undef */
import Image from "next/image"
import pexelsImage from"../components/public/pexels-enes.jpg";
import pexelsdesignecologist from"../components/public/pexels-designecologist.jpg";
import pexelsella from"../components/public/pexels-ella.jpg";
import pexelscaio from"../components/public/pexels-caio.jpg"; 

const Hero = () => {
  return (
    <div className=''>

        <section className='items-center'>
            <h1 className='bg-green-200 h-screen flex items-center justify-center text-6xl p-3 m-4'> Welcome To My Portfolio </h1>
            <p className='text-center text-lg'> I want to show you my recent project. </p>
            <div className='flex items-center justify-center h-screen'>

        <Image src={pexelsImage} alt='fairytales gowns images' width={800}  height={700} className='flex-col-3'></Image>

    </div>
        </section>
        <div>
            <h1 className='text-6xl text-center'> About me </h1>
            <p> Hi ! My name is Aliza Jawwad Qureshi. I am a dedicated medical science student with a passion for leveraging technology to enhance healthcare. My journey in medicine has instilled in me a deep understanding of the complexities of human health, while my skills in web development empower me to create innovative solutions that bridge the gap between medicine and technology. I aim to develop web applications that facilitate better patient care, streamline medical processes, and promote health education. With a commitment to improving healthcare accessibility and efficiency, I am excited to explore the intersection of these two fields and contribute to advancements in medical technology.</p>
        </div>
        <div>
            <h1 className='text-6xl text-center p-10'> Skills </h1>
            <ul>
                <li className='text-lg text-center p-6'> Make-up artist. </li>
                <li className='text-lg text-center p-6'> Web developer. </li>
                <li className='text-lg text-center p-6'>  Knowledge about medical science.  </li>
                <li className='text-lg text-center p-6'> Photo and video editor. </li>
                <li className='text-lg text-center p-6'> And I am very proficient in cooking. </li>
            </ul>
        </div>
        <div>
            <h1 className='text-6xl text-center p-6'> E<span className='text-fuchsia-500'>X</span>perience</h1>
            <h1 className='text-lg text-center p-6 text-purple-500'> Make-up </h1>
            <p className='text-lg text-center p-6'> &quot;With three years of experience in the makeup industry, I have honed my skills in enhancing beauty, understanding diverse client needs, and keeping up with the latest trends and techniques.&quot; </p>
            <h2 className='text-lg text-center p-6'> Knowledge about medical science. </h2>
            <p className='text-lg text-center p-6'> &quot;With 5 to 6 years of study in medical science, I have developed a strong foundation in the complexities of human health and a passion for contributing to advancements in the field.&quot;</p>
        </div>
        <div className='text-center'>
            <h1 className='text-gray-600 text-lg text-center p-4 font-bold'> Website Developer </h1>
            <div className='flex items-center justify-center h-screen'>
                <Image src={pexelsdesignecologist} alt='website developer' width={800} height={700} className='flex-col-3'></Image>
            </div>
        </div>
        <div className='flex text-center justify-center h-screen'>
            <div>
                <Image src={pexelscaio} alt='photo and video editing image' width={800} height={700} className='flex-col-3'></Image>
    
                <h1 className='text-gray-600 text-lg text-center p-4 font-bold'> Search engine optimization </h1>
    
            </div>
        </div>

        <div className='flex text-center justify-center h-screen p-5'>
            <div className='p-10 m-5'>
                <Image src={pexelsella} alt='proficient in cooking' width={800} height={700} className='flex-col-3'></Image>
            
                <h1 className='text-gray-600 text-lg text-center p-4 font-bold'> Proficient in cooking </h1>
            
            </div>
        </div>



    </div>
  )
}

export default Hero