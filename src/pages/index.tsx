import { Introduction } from "@/components/home/Introduction";

const Home = () => {
  return (
    <div
      className={
        "md:max-w-8xl flex w-full max-w-full flex-col space-y-7 self-center px-0 py-3 sm:space-y-8 sm:px-0 sm:py-3.5 md:space-y-9 md:px-0 md:py-4 lg:space-y-10 lg:px-0 lg:py-5"
      }
    >
      <Introduction />
    </div>
  );
};

export default Home;
