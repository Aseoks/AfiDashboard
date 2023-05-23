import React from "react";
import { ChartHeader, Header, Tabel } from "../components";
import { Stack } from "@mui/material";
import BookingTable from "../components/BookingTable";

const Dashboard = () => {
  return (
    <div>
      <Header title="Dashboard" />
      <Stack className="m-16" direction={{ xs: 'column', sm: 'row'}} spacing={{ xs: 2, md: 4}}>
        <div className=" relative border-1 border-black md:border-none rounded-xl h-36 md:shadow-3xl  w-full">
          <ChartHeader title="Bookings" />
          <div className="absolute bottom-4 right-4"><p>18</p></div>
        </div>

        <div className="relative border-1 border-black md:border-none rounded-xl h-36 md:shadow-3xl  w-full">
          <ChartHeader title="Total Revenue" />
          <div className="absolute bottom-4 right-4"><p>18</p></div>
        </div>

        <div className="relative border-1 border-black md:border-none rounded-xl h-36 md:shadow-3xl  w-full">
          <ChartHeader title="Total Bookings" />
          <div className="absolute bottom-4 right-4"><p>18</p></div>
        </div>
      </Stack>

      <BookingTable/>
    </div>
  );
};

export default Dashboard;
