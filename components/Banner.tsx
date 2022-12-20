import React from 'react';

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div className="space-y-4">
        <h1 className="text-7xl">Shivang&#39;s Daily Blogs</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to Every{' '}
          <span className="underline decoration-4 decoration-yellow-400">
            Weeb&#39;s
          </span>{' '}
          favourite blog in Animesphere.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New product features | the latest in anime | Weekly Top Anime, Manga and
        more.
      </p>
    </div>
  );
};

export default Banner;
