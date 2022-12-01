import React from 'react';

import Image from "next/image";



const About = () => {
  return (
    <section>
    <div id="about">
      <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
      I am a driven South African Indian professional with experience in the Manufacturing and 
Business fields and keen interest in Software Development. I am extremely hardworking, 
motivated, organized and dependable. I wish to expand my career by developing new skills
as well as contributing ideas to potential employers. I am a strong believer in teamwork, have 
a passion for quality, solid planning skills and strong analytical abilities I am committed to 
continuous improvement and am always willing to learn and grow.
        <br></br>
      </p>

      <h3 className="text-3xl py-1 dark:text-white ">
        Why you want to be a developer at SovTech ?
      </h3>
      
      <div>
      
         <p>Customer Service Development</p>
         <p>Mobile and Cross-Platform App Development</p>
         <p>Product and Interface Design</p>
         <p>Elite Cloud Hosting</p>
         <p>Software and App Maintaince</p>

     
     
      </div>


      <div>
      <ul classname='lowercase'>
         <li><p>Mentor Support For The Duration Of The Programme</p></li>
         <li><p>Continued Support</p></li>
         <li>Product Diversity And The Opportunity To Take Full Responsibility</li>
        
      </ul>
     
      </div>

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
      I am a hard worker and able to work on my own or in a team. I am always willing to learn and can become familiar with new languages and concepts easily. 
      My main strengths come from always having a “can-do” attitude and being able to do the necessary research needed to learn new things and figure out solutions to problems. 
      </p>

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Secondly, I see this as an opportunity for me to grow in IT. I
        want to join Sovtech because I have a strong passion for joining
        your development team, and team- working as become one of my
        passions by working together to build a goal for the company.
      </p>

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Also, Another that got interested because it is a IT Graduate
        position, and love creating a application such as a web
        application, desktop app both frontend and backend C#, Java and
        other programming language am really good in that as well at
        SovTech is a company that works well with the team, and I love
        working as a team-working because I believe once we come together
        as one we make the dreams work. I really want to provide the best
        with my skill in transforming SovTech to meet the future goal and
        that’s my dream
      </p>

      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        <b>I offer from a wide range of services, including brand design,
        programming and teaching.</b>
        
      </p>
    </div>
  
  </section>
  );
};

export default About;