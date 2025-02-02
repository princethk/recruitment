import React, { useState } from 'react';

const UpdateStatusForm = ({ statusId, onUpdate }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(statusId, name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Updated Status Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Update Status</button>
    </form>
  );
};

export default UpdateStatusForm;