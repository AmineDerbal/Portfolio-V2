import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import PropTypes from 'prop-types';

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
                className='bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300'
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

export default ServiceCard;
