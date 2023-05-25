import React, { useState, useEffect } from "react";
import {
  deleteRecord,
  getData,
  updateRecord,
} from "../MyServices/crudServices";
import Record from "./Record";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormUpdate from "./FormUpdate";

const BookingTable = () => {
  const [records, setRecords] = useState([]);

  const [recordToUpdate, setRecordToUpdate] = useState({});

  const [showUpdateForm, setShowUpdateForm] = useState(false);


  useEffect(() => {
    ShowData();
  }, []);

  const ShowData = () => {
    getData().then((x) => {
      setRecords(x);
    });

    // console.log(records);
  };



  const deleteRecordFromFireStore = (record) => {
    deleteRecord(record);
    ShowData();
  };


  const updateRecordFromFireStore = (record) => {
    setRecordToUpdate(record);
    setShowUpdateForm(true);
    // ShowData()
  };


  const updateRecordCallback = (record) => {
    record.date = new Date().toLocaleDateString();
    updateRecord(record);
    ShowData();
    setShowUpdateForm(false);
  };

  return (
    <div>
      <div className="mx-16 p-3">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Arrival</TableCell>
                <TableCell>Departure</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Surname</TableCell>
                <TableCell>E-mail</TableCell>
                <TableCell>Guests</TableCell>
                <TableCell>Pets</TableCell>
                <TableCell>Room</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>             
              {showUpdateForm ? (
                <FormUpdate
                  updateRecord={updateRecordCallback}
                  recordToUpdate={recordToUpdate}
                ></FormUpdate>
              ) : (
                <></>
              )}
              {records.map((record, index) => {
                return (
                  <TableRow key={index}>
                    <Record
                      record={record}
                      deleteCallback={deleteRecordFromFireStore}
                      updateCallback={updateRecordFromFireStore}
                    />
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BookingTable;
