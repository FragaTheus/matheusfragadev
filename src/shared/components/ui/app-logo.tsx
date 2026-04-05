import Link from "next/link";
import { TbTerminal2 } from "react-icons/tb";

const AppLogo = () => {
  return (
    <Link href={"/"} className="flex items-center justify-center gap-2">
      <TbTerminal2 className="text-primary text-base md:text-lg" />
      <span className="text-sm md:text-base font-extrabold tracking-tighter">
        matheusfragadev
      </span>
    </Link>
  );
};

export default AppLogo;
