import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export function TableTest ({date, total_hr, total_min, stories}) {
  const calculateHoursDuration = (startDateTime, endDateTime) =>  {
    const differenceMs = endDateTime - startDateTime;
    const hours = Math.floor(differenceMs / (1000 * 60 * 60)); // 1 hour = 3600000 milliseconds
    const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60)); // 1 minute = 60000 milliseconds
    return hours;
  }

  const calculateMinutesDuration = (startDateTime, endDateTime) =>  {
    const differenceMs = endDateTime - startDateTime;
    const hours = Math.floor(differenceMs / (1000 * 60 * 60)); // 1 hour = 3600000 milliseconds
    const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60)); // 1 minute = 60000 milliseconds
    return minutes;
  }
  return (
    
    <div>
    
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography>DATE: {date}</Typography>
          <Typography>TOTAL HR: {total_hr}</Typography>
          <Typography>TOTAL MIN: {total_min}</Typography>
        </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {/* Table component inside the ExpansionPanelDetails */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Timeline ID</TableCell>
                  <TableCell>Story Title</TableCell>
                  <TableCell>Task Name</TableCell>
                  <TableCell>Etart Time</TableCell>
                  <TableCell>End Time</TableCell>
                  <TableCell>Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stories.map((row, index) => (
                  // const startDateTime = new Date(startTime); // Example start date and time
                  // const endDateTime = new Date(endTime);
                  // const duration = calculateDuration(startDateTime, endDateTime)
                  // const hrs = duration.hours
                  // const min = duration.minutes
                  <TableRow key={index}>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.story.storyTitle}<br></br>{row.story._id}</TableCell>
                    <TableCell>{row.task.taskName}<br></br>{row.task._id}</TableCell>
                    <TableCell>{row.startTime}</TableCell>
                    <TableCell>{row.endTime}</TableCell>
                    <TableCell>
                    {calculateHoursDuration(new Date(row.startTime), new Date(row.endTime))} Hr<br></br>
                    {calculateMinutesDuration(new Date(row.startTime), new Date(row.endTime))} Min
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default TableTest;