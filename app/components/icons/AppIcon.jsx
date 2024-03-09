import './icon.style.scss';

import PropTypes from 'prop-types';

export const AppIcon = (props) => {
  const { className, name } = props;

  return (
    /*    <>
                      <svg className={className} version="1.1"  xmlns="http://www.w3.org/2000/svg"
                     x="0px"
                     y="0px"
                     viewBox="0 0 512 512"  >
                    <polygon className="svg-elem-1" points="410.1,3 324.2,113 14,113 14,3 "/>
                    <polygon className="svg-elem-2" points="262.6,191.8 192.9,281 15,281 15,124 315.5,124 "/>
                    <polygon className="svg-elem-3" points="333.2,281 216.9,281 274.4,206.8 275,206 276.4,207.8 "/>
                    <polygon className="svg-elem-4" points="184.3,292 83.6,421 16,421 16,292 "/>
                    <polygon className="svg-elem-5" points="442.6,421 108.3,421 208.3,292 341.7,292 376.5,336.8 376.8,337.3 "/>
                    <polygon className="svg-elem-6"  points="75.8,431 15,508.8 15,431"/>
                    <polygon className="svg-elem-7" points="40.3,510 45,504 44,504 100.6,431 450.5,431 512.6,510"/>
                </svg>

                    </>*/

    <>
      <svg
        className={className}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
      >
        <polygon
          className={`fill-blue-500`}
          points="410.1,3 324.2,113 14,113 14,3 "
        />
        <polygon
          className={`fill-blue-500`}
          points="262.6,191.8 192.9,281 15,281 15,124 315.5,124 "
        />
        <polygon
          className={`dark:fill-white`}
          points="333.2,281 216.9,281 274.4,206.8 275,206 276.4,207.8 "
        />
        <polygon
          className={`fill-blue-500`}
          points="184.3,292 83.6,421 16,421 16,292 "
        />
        <polygon
          className={`dark:fill-white`}
          points="442.6,421 108.3,421 208.3,292 341.7,292 376.5,336.8 376.8,337.3 "
        />
        <polygon
          className={`fill-blue-500`}
          points="75.8,431 15,508.8 15,431"
        />
        <polygon
          className={`dark:fill-white`}
          points="40.3,510 45,504 44,504 100.6,431 450.5,431 512.6,510"
        />
      </svg>
      {name && <h1 className=" text-black">{process.env.companyName}</h1>}
    </>
  );
};

AppIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.bool,
};
