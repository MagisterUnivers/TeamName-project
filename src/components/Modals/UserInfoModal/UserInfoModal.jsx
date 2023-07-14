import React, { useState } from 'react';
import { ModalWrapper, CloseButton, UserWrapper } from './UserInfoModal.styled';

const UserInfoModal = ({ onClose }) => {
  const [photo, setPhoto] = useState('');
  const [username, setUsername] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'photo') {
      setPhoto(e.target.value);
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
    }
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <ModalWrapper className="modal" onClick={handleModalClick} onKeyDown={handleKeyDown}>
         <CloseButton onClick={onClose}>
        <img src="../../../../public/images/close.svg" alt="Close" />
      </CloseButton>
      <UserWrapper className="modal-content">
        <h2>Add/Change User</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            id="photo"
            name="photo"
            value={photo}
            onChange={handleInputChange}
          />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
          />

          <button type="submit">Submit</button>
        </form>
      </UserWrapper>
    </ModalWrapper>
  );
};

export default UserInfoModal;
