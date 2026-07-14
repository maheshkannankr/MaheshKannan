'use client';

import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  return (
    <section className='w-full py-16'>
      {/* TITLE */}
      <h2 className='text-3xl sm:text-4xl font-bold text-black/60 mb-10 px-10'>
        Projects
      </h2>

      {/* GRID */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24'>
        <ProjectCarousel />
      </div>
    </section>
  );
}
