import React, { useState } from 'react';
import axios from 'axios';

const StatusForm = ({ stageId, onStatusAdded }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/stages/${stageId}/statuses`, { name });
      onStatusAdded(response.data); // Notify parent component
      setName(''); // Clear the input
    } catch (error) {
      console.error('Error adding status:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Status Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Status</button>
    </form>
  );
};

export default StatusForm;