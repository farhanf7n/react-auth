import { FC } from "react";

const Loading: FC = () => {
  return (
    <>
      <section className="relative place-items-center grid h-screen w-screen gap-4">
        <div className="bg-zinc-200 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
        <div className="bg-zinc-300 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
        <div className="bg-zinc-400 w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
        <svg
          className="filter mix-blend-overlay h-16 w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" x2="20" y1="19" y2="19" />
        </svg>
      </section>
    </>
  );
};

export default Loading;
