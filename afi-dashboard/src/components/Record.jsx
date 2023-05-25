import React from "react";
import TableCell from "@mui/material/TableCell";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const Record = ({ record, deleteCallback, updateCallback }) => {
  const deleteClick = () => {
    deleteCallback(record);
  };

  const updateClick = () => {
    updateCallback(record);
    
  };

  return (
    <>
      <TableCell>{record.arrival}</TableCell>
      <TableCell>{record.departure}</TableCell>
      <TableCell>{record.name}</TableCell>
      <TableCell>{record.surname}</TableCell>
      <TableCell>{record.email}</TableCell>
      <TableCell>{record.guests}</TableCell>
      <TableCell>{record.pets}</TableCell>
      <TableCell>{record.room}</TableCell>
      <TableCell>
        {" "}
        <button onClick={() => updateClick(record)}><EditIcon/></button>
      </TableCell>
      <TableCell>
        <button onClick={() => deleteClick(record)}><DeleteForeverIcon/></button>
      </TableCell>
    </>
  );
};

export default Record;
