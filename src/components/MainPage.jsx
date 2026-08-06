import { useState } from "react";

const MainPage = ({ tasks, setTasks, setShowNotes }) => {

  // Stores current heading entered by the user
  const [heading, setHeading] = useState("");

  // Stores current description entered by the user
  const [description, setDescription] = useState("");

  // Runs when the Add Task button is clicked
  const handleAddTask = () => {

    // Prevent empty submissions
    if (!heading.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    // Creating one task object
    const newTask = {

      // Unique ID for every task
      // Used later for delete and checkbox functionality
      id: Date.now(),

      // Stores task heading
      heading,

      // Stores task description
      description,

      // Every new task starts as incomplete
      completed: false,

      // Stores today's date
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),

      // Stores current time
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Keep previous tasks and add the new one
    setTasks([...tasks, newTask]);

    // Clear input fields after adding
    setHeading("");
    setDescription("");

    // Navigate to Notes Page
    setShowNotes(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F8D3] flex justify-center py-10">
      <div className="w-[90%] max-w-3xl">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
          My To-Do List
        </h1>

        {/* Input Card */}
        <div className="bg-[#FFFCE8] rounded-xl shadow-md p-6">

          {/* Heading Input */}
          <input
            type="text"
            placeholder="Task Heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4 outline-none"
          />

          {/* Description Input */}
          <textarea
            placeholder="Task Description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4 outline-none resize-none"
          ></textarea>

          {/* Add Task Button */}
          <button
            onClick={handleAddTask}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
          >
            Add Task
          </button>

        </div>

      </div>
    </div>
  );
};

export default MainPage;