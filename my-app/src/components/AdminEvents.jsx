import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
  });

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/events/showall`);
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/events/add`, newEvent);
      fetchEvents();
      setNewEvent({
        title: "",
        date: "",
        location: "",
        description: "",
        image: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/events/delete/${id}`);
      fetchEvents();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-events p-6">
      <h1 className="text-2xl font-bold mb-6 px-6 text-slate-900 font-roboto">
        Manage Events
      </h1>
      <form
        onSubmit={handleAddEvent}
        className="bg-white p-6 rounded-lg shadow-lg mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="title"
            value={newEvent.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
            className="border border-gray-300 rounded-lg p-2 font-roboto"
          />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-lg p-2 font-roboto"
          />
          <input
            type="text"
            name="location"
            value={newEvent.location}
            onChange={handleInputChange}
            placeholder="Location"
            required
            className="border border-gray-300 rounded-lg p-2 font-roboto "
          />
          <input
            type="text"
            name="image"
            value={newEvent.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="border border-gray-300 rounded-lg p-2 font-roboto"
          />
          <textarea
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
            className="border border-gray-300 rounded-lg p-2 col-span-1 md:col-span-2 font-roboto"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue font-bold text-white shadow-md px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Event
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-montserrat">
                {event.title}
              </h2>
              <p className="text-gray-500 mb-1 font-roboto">
                {new Date(event.date).toLocaleDateString()}
              </p>
              <p className="text-gray-500 mb-4 font-roboto">{event.location}</p>
              <p className="text-gray-700 mb-4 font-roboto">
                {event.description}
              </p>
              <button
                onClick={() => handleDeleteEvent(event._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition font-roboto shadow-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminEvents;
