import { Avatar } from "@ui";
import { Bars3, Terminal } from "@icons";

export const Header = () => {
  return (
    <header
      className={
        "flex h-16 items-center justify-between gap-x-2 px-4 shadow-xl sm:gap-x-8 sm:px-0"
      }
    >
      <div className={"flex items-center gap-2"}>
        <Bars3 className={"size-8"} />
        <Terminal className={"size-9"} />
      </div>
      <Avatar
        src={
          "https://lh3.googleusercontent.com/a/ACg8ocIFuSfHPfFN-pjPzaYeRvOtOGW9vPGYqonh_MFR3ITNKQ6f5jQr=s96-c"
        }
      />
    </header>
  );
};
