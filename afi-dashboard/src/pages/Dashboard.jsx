import React, { useState, useEffect } from "react";
import { ChartHeader, Header } from "../components";
import { Stack } from "@mui/material";
import BookingTable from "../components/BookingTable";
import { getBookingNumber } from "../MyServices/crudServices";

const Dashboard = () => {
  const [totalBookingsNumber, setTotalBookingsNumber] = useState("4");

  useEffect(() => {
    ShowData();
  }, [totalBookingsNumber]);

  const ShowData = () => {
    getBookingNumber().then((result) => {
      setTotalBookingsNumber(result);
    });
  };

  return (
    <div>
      <Header title="Dashboard" />
      <Stack
        className="m-16 px-3"
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, md: 4 }}
      >
        <div className="relative border-1 border-black md:border-none rounded-xl h-36 md:shadow-3xl p-6  w-full">
          <ChartHeader title="Bookings" />          
          <div className="flex justify-between absolute bottom-0 left-0 w-full p-6">
          <h3>All bookings in database:</h3>
            <p>{totalBookingsNumber}</p>
          </div>
        </div>

        <div className="relative border-1 border-black md:border-none rounded-xl h-36 md:shadow-3xl  w-full">
          <ChartHeader title="Total Revenue" />
          <h3 className="p-3">Income:</h3>
          <div className="absolute bottom-4 right-4">
            <p>1800$</p>
          </div>
        </div>

        <div className="relative border-1 border-black md:border-none rounded-xl h-36 md:shadow-3xl  w-full">
          <ChartHeader title="Total Bookings" />
          <h3 className="p-3">Bookings not finished yet:</h3>
          <div className="absolute bottom-4 right-4">
            <p>20</p>
          </div>
        </div>
      </Stack>

      <BookingTable />
    </div>
  );
};

export default Dashboard;
