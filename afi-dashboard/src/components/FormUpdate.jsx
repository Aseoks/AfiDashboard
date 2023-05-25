import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import { TableRow } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const FormUpdate = ({ recordToUpdate, updateRecord }) => {
  const [record, setRecord] = useState({
    room: "",
    arrival: "",
    departure: "",
    name: "",
    surname: "",
    email: "",
    guests: "",
    pets: "",
  });

  useEffect(() => {
    setRecord(recordToUpdate);
  }, [setRecord, recordToUpdate]);

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const update = () => {
    if (record.departure < record.arrival) {
      alert("Departure must be after arrival");
    } else if (
      record.name === "" ||
      record.arrival === "" ||
      record.departure === "" ||
      record.surname === "" ||
      record.email === "" ||
      record.guests === "" ||
      record.pets === "" ||
      record.room === ""       
    ) {
      alert("All fildes are requaired");
    } else {
      updateRecord(record);
      // console.log(record);
    }
  };

  return (
    <>
      <TableRow>
        <TableCell>Data to update:</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          {" "}
          <input
            id="arrival"
            name="arrival"
            value={record.arrival}
            onChange={(e) => handleChange(e)}
            type="date"
          />
        </TableCell>
        <TableCell>
          <input
            id="departure"
            name="departure"
            value={record.departure}
            onChange={(e) => handleChange(e)}
            type="date"
          />
          {record.departure < record.arrival ? (
            <p className="text-red-600 text-xs">
              Departure can`t be before arrival
            </p>
          ) : (
            ""
          )}
        </TableCell>
        <TableCell>
          <input
            id="name"
            name="name"
            type="text"
            value={record.name}
            onChange={(e) => handleChange(e)}
            required={true}
          />
        </TableCell>
        <TableCell>
          {" "}
          <input
            name="surname"
            type="text"
            value={record.surname}
            onChange={(e) => handleChange(e)}
          />
        </TableCell>
        <TableCell>
          {" "}
          <input
            name="email"
            type="email"
            value={record.email}
            onChange={(e) => handleChange(e)}
          />
        </TableCell>
        <TableCell>
          {" "}
          <input
            name="guests"
            value={record.guests}
            type="number"
            min="1"
            max="5"
            onChange={(e) => handleChange(e)}
            placeholder="1"
          />
        </TableCell>
        <TableCell>
          {" "}
          <input
            name="pets"
            value={record.pets}
            type="number"
            min="0"
            max="2"
            onChange={(e) => handleChange(e)}
            placeholder="0"
          />
        </TableCell>
        <TableCell>
          {" "}
          <select id="room" name="room" onChange={(e) => handleChange(e)}>          
            <option value={record.room.value}>Pet friendly room</option>
            <option value={record.room.value}>Shared room</option>
            <option value={record.room.value}>Shared room with bathroom</option>
            <option value={record.room.value}>Pet friendly private room</option>
            <option value={record.room.value}>Two people room</option>
            <option value={record.room.value}>Three people room</option>
          </select>
        </TableCell>
        <TableCell>
          <CheckIcon onClick={update} />
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    </>
  );
};

export default FormUpdate;
