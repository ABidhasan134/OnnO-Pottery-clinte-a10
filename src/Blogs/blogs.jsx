import React from "react";

const Blogs = ({ blog }) => {
  console.log(blog);
  return (
    <div className="bg-base-100 p-6 shadow-sm sm:mx-10 mx-4 sm:mb-10 mb-4 border-2 border-gray-100 rounded-sm">
      <div className="sm:flex grid items-center gap-4 p-4">
        <h2 className="card-title">{blog.title}</h2>        
        <p className="opacity-60">Writen by: {blog.writer}</p>
        <p className="opacity-60">Publishing Year: {blog.writenyear}</p>
      </div>
      <div className="p-4 h-10 ">
        <p className="text-ellipsis whitespace-nowrap overflow-hidden">{blog.blog}</p>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn mt-4 ml-4 bg-sky-400 hover:bg-sky-700 hover:text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Read More</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-gray-800 text-white">
    <h3 className="font-bold text-lg">{blog.title}</h3>
    <h1>{blog.genre}</h1>
    <h1>Autor: {blog.author}</h1>
    <h1>year of writen: {blog.year}</h1>
    <hr className="border-1 border-gray-400 my-4 w-max-auto" />
    <p className="py-4">{blog.blog}</p>
    <hr className="border-1 border-gray-400 my-4 w-max-auto" />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
      
    </div>
  </div>
</dialog>
    </div>
  );
};

export default Blogs;
