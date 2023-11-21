import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ServiceCard } from '../components';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Full stack developer with experience in building and maintaining web
        applications, I am adept at working remotely and have the necessary
        communication and collaboration skills to excel in a virtual work
        environment.
      </motion.p>
      <div className="mt-20 flex flex-wrap w-full justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
