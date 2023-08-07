import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Typed from 'react-typed';
import { styles } from '../styles';
import { socialLinks } from '../constants';

const SocialLink = ({ name, url, icon }) => {
  return (
    <div
      onClick={() => window.open(url, '_blank')}
      className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer-center
    items-center cursor-pointer'
    >
      <img src={icon} alt={name} className='w-1/2 h-1/2 object-contain' />
    </div>
  );
};

const Hero = () => {
  const [firstTypingComplete, setFirstTypingComplete] = useState(false);
  const [secondTypingComplete, setSecondTypingComplete] = useState(false);
  const [thirdTypingComplete, setThirdTypingComplete] = useState(false);
  const [forthTypingComplete, setForthTypingComplete] = useState(false);

  return (
    <section
      className='relative w-full h-screen
    mx-auto'
    >
      <div
        className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-5xl mx-auto flex flex-row
      items-start gap-5`}
      >
        <div
          className='flex flex-col justify-center items-center
        mt-5'
        >
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <Typed
              strings={['Hi, I&apos;m&nbsp;']}
              typeSpeed={40}
              showCursor={false}
              onComplete={() => setFirstTypingComplete(true)}
            />
            {firstTypingComplete && (
              <span className='text-[#915eff]'>
                <Typed
                  strings={['Amine']}
                  typeSpeed={40}
                  showCursor={false}
                  onComplete={() => setSecondTypingComplete(true)}
                />
              </span>
            )}
          </h1>

          {secondTypingComplete && (
            <p
              className={`${styles.heroSubText} mt-2
          text-white-100`}
            >
              <Typed
                strings={['I am a Software developer']}
                typeSpeed={40}
                showCursor={false}
                onComplete={() => setThirdTypingComplete(true)}
              />
            </p>
          )}

          {thirdTypingComplete && (
            <p className='mt-3 text-secondary text-[17px] max-w-2xl leading-[30px]'>
              <Typed
                strings={[
                  'I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.',
                ]}
                typeSpeed={40}
                showCursor={false}
                onComplete={() => setForthTypingComplete(true)}
              />
            </p>
          )}
          {forthTypingComplete && (
            <div className=' mt-10 flex gap-5 items-center justify-center'>
              {socialLinks.map((link) => (
                <SocialLink key={link.id} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div
        className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center items-center'
      >
        <a href='#about'>
          <div
            className='w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary
              mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

SocialLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Hero;
