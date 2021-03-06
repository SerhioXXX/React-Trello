import React from 'react';
import './CardSettings.css';

const CardSettings = ({ id, deleteCard, updateCard }) => {
  let input;
  return (
    <div className='card-settings'>
      <form
        className='update-card'
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          updateCard(id, input.value);
          input.value = '';
        }}
      >
        <input
          className='input-box'
          placeholder='Enter card text...'
          ref={node => (input = node)}
        />
        <button className='update-bttn'>Update</button>
      </form>

      <button className='delete-card-bttn' onClick={() => deleteCard(id)}>
        Remove
      </button>
    </div>
  );
};

export default CardSettings;
