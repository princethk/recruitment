import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatusForm from './StatusForm';
import UpdateStageForm from './UpdateStageForm';
import UpdateStatusForm from './UpdateStatusForm'; // Import the UpdateStatusForm

const StageList = () => {
  const [stages, setStages] = useState([]);

  // Fetch all stages and their statuses
  const fetchStages = async () => {
    try {
      const response = await axios.get('/api/stages');
      const stagesWithStatuses = await Promise.all(
        response.data.map(async (stage) => {
          const statusesResponse = await axios.get(`/api/stages/${stage.id}/statuses`);
          return { ...stage, statuses: statusesResponse.data };
        })
      );
      setStages(stagesWithStatuses);
    } catch (error) {
      console.error('Error fetching stages:', error);
    }
  };

  // Delete a stage
  const handleDeleteStage = async (stageId) => {
    try {
      await axios.delete(`/api/stages/${stageId}`);
      fetchStages(); // Refresh the list
    } catch (error) {
      console.error('Error deleting stage:', error);
    }
  };

  // Update a stage
  const handleUpdateStage = async (stageId, updatedName) => {
    try {
      await axios.put(`/api/stages/${stageId}`, { name: updatedName });
      fetchStages(); // Refresh the list
    } catch (error) {
      console.error('Error updating stage:', error);
    }
  };

  // // Add a status under a stage
  // const handleAddStatus = async (stageId, status) => {
  //   try {
  //     await axios.post(`/api/stages/${stageId}/statuses`, status);
  //     fetchStages(); // Refresh the list
  //   } catch (error) {
  //     console.error('Error adding status:', error);
  //   }
  // };

  // Delete a status
  const handleDeleteStatus = async (statusId) => {
    try {
      await axios.delete(`/api/statuses/${statusId}`);
      fetchStages(); // Refresh the list
    } catch (error) {
      console.error('Error deleting status:', error);
    }
  };

  // Update a status
  const handleUpdateStatus = async (statusId, updatedName) => {
    try {
      await axios.put(`/api/statuses/${statusId}`, { name: updatedName });
      fetchStages(); // Refresh the list
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  useEffect(() => {
    fetchStages();
  }, []);

  return (
    <div>
      <h2>Stages</h2>
      {stages.map((stage) => (
        <div key={stage.id}>
          <h3>{stage.name}</h3>
          <button onClick={() => handleDeleteStage(stage.id)}>Delete Stage</button>
          {/* Add the UpdateStageForm */}
          <UpdateStageForm
            stageId={stage.id}
            currentName={stage.name}
            onUpdate={handleUpdateStage}
          />
          <StatusForm stageId={stage.id} onStatusAdded={fetchStages} />
          <ul>
            {stage.statuses && stage.statuses.map((status) => (
              <li key={status.id}>
                {status.name}
                <button onClick={() => handleDeleteStatus(status.id)}>Delete Status</button>
                {/* Add the UpdateStatusForm */}
                <UpdateStatusForm
                  statusId={status.id}
                  currentName={status.name}
                  onUpdate={handleUpdateStatus}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StageList;