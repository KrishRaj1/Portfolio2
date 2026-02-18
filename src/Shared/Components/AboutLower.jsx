import { Icon } from "@iconify/react";
import PropTypes from 'prop-types';

function AboutLower({ icon, fontSize, style, text }) {
  return (
    <div className="flex items-center justify-center gap-3 min-w-0">
      <Icon icon={icon} fontSize={fontSize} style={style} />
      <div className="text-sm md:text-base lg:text-lg span text-center">
        {text}
      </div>
    </div>
  );
}



export default AboutLower;
