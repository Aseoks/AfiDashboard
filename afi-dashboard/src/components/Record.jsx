import React from "react";
import TableCell from "@mui/material/TableCell";

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
        <button onClick={() => updateClick}>Update</button>
      </TableCell>
      <TableCell>
        <button onClick={() => deleteClick(record)}>delete</button>
      </TableCell>
    </>
  );
};

export default Record;
