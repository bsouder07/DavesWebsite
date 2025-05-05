import React from 'react';

function About() {
  return (
    <section id="about" className="about py-20 px-6 text-center text-orange-500 drop-shadow-[2px_2px_0_black]">
      <div className='relative z-10 top-3'>
        <div className='inline-block bg-black bg-opacity-60 px-4 py-4 rounded shadow-lg'>
      {/* Header */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-orange-500 drop-shadow-[2px_2px_0_black]">
        About Me
      </h1>
      </div>
      <br/>
      <br/>
      {/* Story Text */}
      <p className="about-text max-w-7xl mx-auto text-xl md:text-5xl leading-relaxed text-orange-500 drop-shadow-[2px_2px_0_black]">
        Dave was born and raised here in the Lehigh Valley. You can say carpentry runs in his blood, 
        as his dad once owned his own construction business. So, when the company Dave was working for 
        closed operations here in PA, Dave decided to follow in his dad's footsteps by doing something 
        he loved. Dave's mission is to offer you his knowledge and craftsmanship while delivering quality work. 
        When Dave is not working, he can be found camping and enjoying time with his family.
      </p>
      </div>
    </section>
  );
}

export default About;
