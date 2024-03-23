import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export function TableTest ({date, total_hr, total_min, stories}) {

  const rows = [
    { name: 'John Doe', age: 25, city: 'New York' },
    { name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    // Add more rows as needed
  ];
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
                  <TableCell>Story Title</TableCell>
                  <TableCell>Task Name</TableCell>
                  <TableCell>Etart Time</TableCell>
                  <TableCell>End Time</TableCell>
                  <TableCell>Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stories.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.storyTitle}</TableCell>
                    <TableCell>{row.task.taskName}</TableCell>
                    <TableCell>{row.start_time}</TableCell>
                    <TableCell>{row.end_time}</TableCell>
                    <TableCell>{row.duration}</TableCell>
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