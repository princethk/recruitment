import React, { useState } from 'react';

const UpdateStageForm = ({ stageId, onUpdate }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(stageId, name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Updated Stage Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Update Stage</button>
    </form>
  );
};

export default UpdateStageForm;