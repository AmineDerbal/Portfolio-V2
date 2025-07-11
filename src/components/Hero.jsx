import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { TypeAnimation } from 'react-type-animation';
import { styles } from '../styles';
import { socialLinks } from '../constants';

const SocialLink = ({ name, url, icon }) => {
  return (
    <div
      onClick={() => window.open(url, '_blank')}
      className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
    >
      <img
        src={icon}
        alt={name}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
  );
};

const Hero = () => {
  const [firstTypingComplete, setFirstTypingComplete] = useState(false);
  const [secondTypingComplete, setSecondTypingComplete] = useState(false);
  const [thirdTypingComplete, setThirdTypingComplete] = useState(false);
  const [forthTypingComplete, setForthTypingComplete] = useState(false);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-5xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#38ef7d]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <TypeAnimation
              sequence={["Hi There, I'm ", () => setFirstTypingComplete(true)]}
              speed={40}
              cursor={false}
              wrapper="span"
              repeat={0}
            />
            {firstTypingComplete && (
              <TypeAnimation
                sequence={[
                  '',
                  500,
                  'Amine',
                  () => setSecondTypingComplete(true),
                ]}
                speed={40}
                cursor={false}
                wrapper="span"
                className="text-[#38ef7d]"
              />
            )}
          </h1>

          {secondTypingComplete && (
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <TypeAnimation
                sequence={[
                  '',
                  500,
                  'I am a Software developer',
                  () => setThirdTypingComplete(true),
                ]}
                speed={40}
                cursor={false}
                wrapper="span"
              />
            </p>
          )}

          {thirdTypingComplete && (
            <p className="mt-3 sub-text text-secondary text-[17px] max-w-2xl leading-[30px]">
              <TypeAnimation
                sequence={[
                  '',
                  500,
                  'I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.',
                  () => setForthTypingComplete(true),
                ]}
                speed={40}
                cursor={false}
                wrapper="span"
              />
            </p>
          )}

          {forthTypingComplete && (
            <div className="mt-10 flex gap-5 items-center justify-center">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.id}
                  {...link}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute xs:bottom-8 bottom-14 w-full flex justify-center items-center">
        <a href="#work">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mt-20">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
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
