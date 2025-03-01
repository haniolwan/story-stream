const HeadphonesSvg = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7C3 4.23858 5.23858 2 8 2C10.7614 2 13 4.23858 13 7V8H10V15H12C13.6569 15 15 13.6569 15 12V7C15 3.13401 11.866 0 8 0C4.13401 0 1 3.13401 1 7V12C1 13.6569 2.34315 15 4 15H6V8H3V7Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default HeadphonesSvg;
