// PostDetailModal.js
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
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

Modal.setAppElement('#root');//app root element

const PostDetailModal = ({ isOpen, onRequestClose, post }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Post Details"
    >
      <div>
        {/* Post details UI*/}
        <h1 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">{post.title}</h1>
        <p>{post.content}</p>
        <h3>{post.author}</h3>
        <h3>Blog-Admin</h3>
        <h3>{post.date}</h3>
      </div>
    </Modal>
  );
};

export default PostDetailModal;
