import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ServiceCard } from '../components';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import resume from '../../download';

const About = () => {
  const changeBackground = (e) => {
    e.target.closest('button').style.transform = 'scale(1.2)';
  };

  const resetBackground = (e) => {
    e.target.closest('button').style.transform = 'scale(1)';
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Full stack developer with experience in building and maintaining web applications, I am
        adept at working remotely and have the necessary communication and collaboration skills to
        excel in a virtual work environment.
      </motion.p>
      <motion.div variants={fadeIn('', '', 0.1, 1)} className='mt-4'>
        <button
          className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex items-center'
          onMouseOver={changeBackground}
          onMouseOut={resetBackground}
          onClick={handleDownload}
        >
          <svg
            className='fill-current w-4 h-4 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' />
          </svg>
          <span>Get my resume</span>
        </button>
      </motion.div>
      <div className='mt-20 flex flex-wrap w-full justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
