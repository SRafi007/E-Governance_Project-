import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SessionCheck from './components/sessionCheck';
import CustomNavbar from './components/CustomNavbar';

function AddPostPage() {
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [myid, setId]=useState("");
  const router=useRouter();
  useEffect(()=>{
    setId(sessionStorage.getItem('id'));
    },[]);

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!caption || !file) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('caption', caption);
      formData.append('file', file);

      await axios.post('http://localhost:3000/citizen/addPost/'+myid, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Clear form fields after successful submission
      setCaption('');
      setFile(null);
      setErrorMessage('');
      alert('Post added successfully!');
    } catch (error) {
      console.error(error);
      setErrorMessage('Error adding post. Please try again.');
    }
  };
  function handleClick() {
  
    if ( router.back()) {
     
    } else {
      // Handle the case where there is no previous page
    }
  }



  return (
    <>
    <SessionCheck/>
    <CustomNavbar/>
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-yellow-100 to-green-100">
      <div className="w-96 bg-white shadow-md rounded p-6 bg-gradient-to-r from-gray-300 to-green-300">
        <h2 className="text-2xl font-bold mb-6">Add New Post</h2>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="caption" className="block text-gray-700 font-semibold mb-2">
              Caption
            </label>
            <input
              type="text"
              id="caption"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={caption}
              onChange={handleCaptionChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="file" className="block text-gray-700 font-semibold mb-2">
              Photo
            </label>
            <input
              type="file"
              id="file"
              accept="image/png, image/jpeg"
              className="w-full"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="w-full bg-blue-400 hover:bg-green-700 text-white py-2 rounded">
            Add Post
          </button>
          <button onClick={handleClick} className="w-full bg-red-400 hover:bg-pink-600 text-white py-2    rounded mt-2">
            Back
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default AddPostPage;
