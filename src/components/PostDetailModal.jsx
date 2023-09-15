import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay background color
  },
  content: {
    // Other styles...
    backgroundColor: 'white', // Set the modal background color
    border: '1px solid #ccc', // Add a border
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a shadow
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
};

Modal.setAppElement('#root');

const PostDetailModal = ({ isOpen, onRequestClose, post }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
  };

  const handleUnlike = () => {
    setLiked(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Post Details"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h5 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          {post.title}
        </h5>
        <div className="p-4 overflow-y-auto">
          <p className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[20px]">{post.content}</p>
          
          <p>{post.author}</p>
          <p>{post.introduction}</p>
          <p>{post.body}</p>
          <h3 className="font-roboto font-bold text-sm text-dark-soft md:text lg:text-[14px] text-center">
            {post.date}
            <h3 className="italic font-roboto font-bold text-sm text-dark-soft md:text lg:text-[14px] text-end">
            Stanley: Blog-Admin
          </h3>
          </h3>
        </div>
        <div className="flex justify-center space-x-4">
          {liked ? (
            <button
              type="button"
              className="inline-block rounded bg-red-500 px-4 pb-1 pt-1 text-white"
              onClick={handleUnlike}
            >
              <AiFillDislike /> 
            </button>
          ) : (
            <button
              type="button"
              className="inline-block rounded bg-secondary px-4 pb-1 pt-1 text-white"
              onClick={handleLike}
            >
              <AiFillLike /> 
            </button>
          )}
          <button
            type="button"
            className="inline-block rounded bg-secondary px-4 pb-1 pt-1 text-white"
            onClick={onRequestClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PostDetailModal;
