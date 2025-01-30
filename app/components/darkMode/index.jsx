import OutlinedMoonSvg from "@/app/icons/outlined-moon";
import FilledMoonSvg from "@/app/icons/filled-moon";
import { useDarkTheme } from "@/app/context/DarkTheme";

const DarkMode = () => {
  const { isDark, setIsDark } = useDarkTheme();
  return (
    <button
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      {isDark ? (
        <FilledMoonSvg className={"text-dark text-black"} height={"30"} />
      ) : (
        <OutlinedMoonSvg className={"text-dark text-black"} height={"30"} />
      )}
    </button>
  );
};

export default DarkMode;
