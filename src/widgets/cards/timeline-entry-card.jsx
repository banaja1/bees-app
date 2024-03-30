import React, { useState, useEffect } from 'react';
import { epic_services } from "@/services/epicServices";
import { story_services } from "@/services/storyServices";
import { timeline_services } from "@/services/timelineServices";
import { user_details } from "@/data";

export function TimeLineEntry () {
  const [epicValue, setEpicValue] = useState('');
  const [storyValue, setStoryValue] = useState('');
  const [taskValue, setTaskValue] = useState('');
  const [timestamp1, setTimestamp1] = useState('');
  const [timestamp2, setTimestamp2] = useState('');
  const [error, setError] = useState('');
  const [epicList, setEpicList] = useState([]);
  const [storyList, setStoryList] = useState([]);
  const [taskList, setTaskList] = useState([]);


 useEffect(() => {
    fetchData();
  },[])

  const fetchData = () => {
    epic_services
      .getEpic(user_details.WORKSPACEID)
        .then(response => {
          setEpicList(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    story_services
        .getStory(user_details.WORKSPACEID)
          .then(response => {
            setStoryList(response.data)
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }
  const getCurrentTime = () => {
    // const now = new Date();
    // const isoString = now.toISOString().slice(0, 16); // Format as YYYY-MM-DDTHH:mm
    // return isoString;

    // Assuming currentTime is in UTC
    const currentTimeUTC = new Date();

    // Set the time zone to IST
    const timeZone = 'Asia/Kolkata';

    // Use the toLocaleString method to convert the current time to IST
    const currentTimeIST = currentTimeUTC.toLocaleString('en-US', { timeZone });
    return currentTimeIST
  };

  const handleSubmit = () => {
    const currentTime = getCurrentTime();
    if (new Date(timestamp1) >= new Date(currentTime) || new Date(timestamp2) >= new Date(currentTime)) {
      setError('Timestamps must be less than the current time.');
      return;
    }

    let data = {
      "story": storyValue,
      "task": taskValue,
      "startTime": timestamp1,
      "endTime": timestamp2,
      "workspace": user_details.WORKSPACEID
    }
    console.log(data)
    timeline_services.postTimeline(data)
      .then(response => {
        console.log(response);
        setEpicValue('')
        setStoryValue('')
        setTaskValue('')
        setTimestamp1('')
        setTimestamp2('')
      })
      .catch(error => {
        console.error(error);
      });

    // Reset error state
    setError('');
  };

  const onEpicChange = (epicValue) => {
    setEpicValue(epicValue.target.value)
    setStoryValue('')
    setTaskValue('')
    story_services
        .getStoryByEpic(workspaceId,epicValue.target.value)
          .then(response => {
            setStoryList(response.data)
          })
          .catch(error => {
            console.log(error)
            setStoryList([])
          })
    setTaskList([]) 
  }

  const onStoryChange = (event) => {
    setStoryValue(event.target.value)
    setTaskValue('')
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex].dataset.option;
    try {
      var story = JSON.parse(selectedOption)
      setTaskList(story.task_details)
    }
    catch(err) {
      setTaskList([])
    }
    
  }

  return (
    <div className="container mx-auto flex flex-wrap gap-4">
      {/* <div className="flex flex-col w-full sm:w-1/2 md:w-1/3"> */}
        <label className="mb-2">
          Epic:
          <select
            className="w-full p-2 border rounded"
            value={epicValue}
            onChange={onEpicChange}
          >
          <option value="">No Epic</option>
            {epicList.map((epic) => (
          <option key={epic._id} value={epic._id}>
            {epic.name}
          </option>
        ))}
          </select>
        </label>

        <label className="mb-2">
          Story:
          <select
            className="w-full p-2 border rounded"
            value={storyValue}
            onChange={onStoryChange}
          >
            <option value="">Select Story</option>
            {storyList.map((story) => (
          <option key={story._id} value={story._id} data-option={JSON.stringify(story)}>
            {story.title}
          </option>
        ))}
          </select>
        </label>

        <label className="mb-2">
          Task:
          <select
            className="w-full p-2 border rounded"
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
          >
            <option value="">Select Task</option>
            {taskList.map((task) => (
          <option key={task._id} value={task._id}>
            {task.task}
          </option>
        ))}
          </select>
        </label>
      {/* </div> */}

      {/* <div className="flex flex-col w-full sm:w-1/2 md:w-1/3"> */}
        <label className="mb-2">
          Start Time:
          <input
            type="datetime-local"
            className="w-full p-2 border rounded"
            value={timestamp1}
            onChange={(e) => setTimestamp1(e.target.value)}
          />
        </label>

        <label className="mb-2">
          End Time:
          <input
            type="datetime-local"
            className="w-full p-2 border rounded"
            value={timestamp2}
            onChange={(e) => setTimestamp2(e.target.value)}
          />
        </label>
      {/* </div> */}

      <div className="w-full">
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TimeLineEntry;
