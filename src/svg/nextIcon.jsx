import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={96}
    height={94}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M35.006 69.123a4.631 4.631 0 0 1 0-6.646L50.812 47 35.006 31.523a4.631 4.631 0 0 1 0-6.646c1.874-1.836 4.914-1.836 6.788 0l19.2 18.8a4.631 4.631 0 0 1 0 6.646l-19.2 18.8c-1.874 1.836-4.913 1.836-6.788 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
