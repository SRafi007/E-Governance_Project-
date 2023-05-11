import React from 'react';
import { useRouter } from "next/router";

const BlogsCard = ({ doctorName, blogTitle, blogContent, redirectTo }) => {
  const handleClick = () => {
    window.location.href = redirectTo;
  };

  return (
    <div className="bg-gray-600 max-w-20p text-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:bg-green-500 transition duration-300 cursor-pointer" onClick={handleClick}>
      <h3 className="text-xl font-semibold mb-2">{doctorName}</h3>
      <h4 className="text-lg font-medium mb-4">{blogTitle}</h4>
      <p className="text-white">{blogContent}</p>
    </div>
  );
};

const DoctorCard = ({ doctorName, blogTitle, blogContent, redirectTo }) => {
  const handleClick = () => {
    window.location.href = redirectTo;
  };

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://health.gov/sites/default/files/styles/600_wide/public/2022-06/cadqt.jpg?itok=zn27s5mX" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  );
};

const DoctorCardList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <DoctorCard
        doctorName="Dr. John Doe"
        blogTitle="Blog 1"
        blogContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        redirectTo="/blog/1"
      />
      <DoctorCard
        doctorName="Dr. Jane Smith"
        blogTitle="Blog 2"
        blogContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        redirectTo="/blog/2"
      />
      <DoctorCard
        doctorName="Dr. Michael Johnson"
        blogTitle="Blog 3"
        blogContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        redirectTo="/blog/3"
      />
      <DoctorCard
        doctorName="Dr. Michael Johnson"
        blogTitle="Blog 3"
        blogContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        redirectTo="/blog/3"
      />
    </div>
  );
};

const BlogCard = () => {
  const router= useRouter();
  const handleViewAllClick = () => {
     router.push('citizen/blogs')
  };

  return (
    <div className="pt-6 pb-8  py-2">
      
      <div className="flex justify-center mt-8 pt-6 pb-8" >
        <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded focus:outline-none" onClick={handleViewAllClick}>
          View All Blogs
        </button>
      </div>
      <DoctorCardList />
    </div>
  );
};

export default BlogCard;
