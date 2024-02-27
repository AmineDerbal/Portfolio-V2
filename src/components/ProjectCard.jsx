import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import { fadeIn } from '../utils/motion';
import { github, liveIcon, gitlab } from '../assets';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_code_gitlab,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 gap-2 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer-center
              items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            {source_code_gitlab && (
              <div
                onClick={() => window.open(source_code_gitlab, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer-center
              items-center cursor-pointer"
              >
                <img
                  src={gitlab}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
            {live_link && (
              <div
                onClick={() => window.open(live_link, '_blank')}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer-center
              items-center cursor-pointer"
              >
                <img
                  src={liveIcon}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]"> {description} </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  source_code_link: PropTypes.string,
  source_code_gitlab: PropTypes.string,
  live_link: PropTypes.string,
};

export default ProjectCard;
