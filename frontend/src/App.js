import React from 'react';
import StageForm from './components/StageForm';
import StageList from './components/StageList';
import axios from 'axios';

const App = () => {
  const handleAddStage = async (stage) => {
    try {
      await axios.post('/api/stages', stage); // Use relative path
    } catch (error) {
      console.error('Error adding stage:', error);
    }
  };

  return (
    <div>
      <h1>Recruitment App</h1>
      <StageForm onSubmit={handleAddStage} />
      <StageList />
    </div>
  );
};

export default App;