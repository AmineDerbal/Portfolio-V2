import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon, skills }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='xs:w-[350px] w-full h-auto'
    >
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full  green-pink-gradient p-[1px] h-full rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-5 min-h-[300px] h-full flex gap-5 items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />

          <h3 className='text-white text-[20px] min-h-[80px] xs:w-[150px] font-bold text-center'>
            {title}
          </h3>
          <div className='flex flex-wrap justify-center gap-3'>
            {skills.map((skill) => (
              <span
                key={`${skill.name}-{index}`}
                className='bg-indigo-100 text-indigo-800 text-xs font-medium mr-.5 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400'
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Full stack developer with experience in building and maintaining web applications, I am
        adept at working remotely and have the necessary communication and collaboration skills to
        excel in a virtual work environment.
      </motion.p>
      <div className='mt-20 flex flex-wrap w-full justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string,
  skills: PropTypes.shape([
    {
      name: PropTypes.string,
    },
  ]),
};

export default SectionWrapper(About, 'about');
