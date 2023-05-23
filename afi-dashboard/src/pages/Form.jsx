import React, { useState } from "react";
import { Header, FormLabel } from "../components";
import { addRecord } from "../MyServices/crudServices";
import DatePicker from "react-datepicker";

const Form = () => {
  const [record, setRecord] = useState({
    room: "",
    arrival: "",
    departure: "",
    name: "",
    surname: "",
    email: "",
    guests: "1",
    pets: "0",
  });

  const handleInputChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const addRecordToFireStore = (event) => {
    event.preventDefault();
    if (record.arrival === "") {
      alert("please choose arrival date");
    } else if (record.departure === "") {
      alert("please choose departure date");
    } else if (record.departure < record.arrival) {
      alert("Arrival must be before departure");
    } else if (record.name === "" || record.surname ==="" || record.email === "") {
      alert("please fill all inputs");
    } else {
      addRecord(record);
      alert(`Booking added`);
    }
  };

  return (
    <div>
      <Header title="Booking Form" />
      {/* Form */}
      <form className="ml-16 p-3 flex flex-col gap-2 w-fit" noValidate>
        {/* Room choice */}
        <div className="flex justify-between">
          <FormLabel title="Room:" />
          <select
            id="room"
            name="room"
            onChange={(e) => handleInputChange(e)}
            className="text-end"
          >
            <option value={record.room} hidden>
              Select your room
            </option>
            <option value={record.room.value}>Pet friendly room</option>
            <option value={record.room.value}>Shared room</option>
            <option value={record.room.value}>Shared room with bathroom</option>
            <option value={record.room.value}>Pet friendly private room</option>
            <option value={record.room.value}>Two people room</option>
            <option value={record.room.value}>Three people room</option>
          </select>
        </div>

        {/* Arrival */}
        <div className="flex justify-between">
          <FormLabel title="Arrival:" />

          <input
            id="arrival"
            name="arrival"
            value={record.arrival}
            onChange={(e) => handleInputChange(e)}
            type="date"
          />
        </div>
        {record.arrival === "" ? (
          <p className="text-red-600 text-end text-xs">Choose arrival date</p>
        ) : (
          ""
        )}

        {/* Departure */}
        <div className="flex justify-between">
          <FormLabel title="Departure:" />

          <input
            id="departure"
            name="departure"
            value={record.departure}
            onChange={(e) => handleInputChange(e)}
            type="date"
          />
        </div>
        {record.departure === "" ? (
          <p className="text-red-600 text-end text-xs">Choose departure date</p>
        ) : (
          ""
        )}

        {record.departure < record.arrival ? (
          <p className="text-red-600 text-end text-xs">
            Departure can`t be before arrival
          </p>
        ) : (
          ""
        )}

        {/* Name */}
        <div className="flex justify-between">
          <FormLabel title="Name:" />
          <input
            id="name"
            name="name"
            type="text"
            value={record.name}
            onChange={(e) => handleInputChange(e)}
            placeholder="Jhon"
            className="text-end"
            required={true}
          />
        </div>

        {/* Surame */}
        <div className="flex justify-between">
          <FormLabel title="Surname:" />
          <input
            name="surname"
            type="text"
            value={record.surname}
            onChange={(e) => handleInputChange(e)}
            placeholder="Cowalski"
            className="text-end"
          />
        </div>

        {/* Email */}
        <div className="flex justify-between">
          <FormLabel title="E-mail:" />
          <input
            name="email"
            type="email"
            value={record.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="email@email.com"
            className="text-end"
          />
        </div>

        {/* Guests */}
        <div className="flex justify-between">
          <FormLabel title="Guests number:" />
          <input
            name="guests"
            value={record.guests}
            type="number"
            min="1"
            max="5"
            onChange={(e) => handleInputChange(e)}
            placeholder="1"
            className="text-end"
          />
        </div>

        {/* Pets */}
        <div className="flex justify-between">
          <FormLabel title="Pets number:" />
          <input
            name="pets"
            value={record.pets}
            type="number"
            min="0"
            max="2"
            onChange={(e) => handleInputChange(e)}
            placeholder="0"
            className="text-end"
          />
        </div>

        {/* Submit */}
        <button
          onClick={addRecordToFireStore}
          className="bg-main-bg text-white p-2 rounded hover:bg-main-dark-bg"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default Form;
