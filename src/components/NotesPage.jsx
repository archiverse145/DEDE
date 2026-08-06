import { FaRegCircle, FaCheckCircle, FaTrash } from "react-icons/fa";

const NotesPage = ({ tasks, setTasks, setShowNotes }) => {

  // Deletes a task using its unique id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Changes completed from false -> true and vice versa
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F8D3] p-8">

      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        My Notes
      </h1>

      {/* Navigate back to Main Page */}
      <button
        onClick={() => setShowNotes(false)}
        className="mb-6 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
      >
        Add New Task
      </button>

      {/* If there are no tasks */}
      {tasks.length === 0 ? (
        <p className="text-center text-gray-600">
          DO SOME WORK YOU BITCH
        </p>
      ) : (

        // Display every task
        <div className="space-y-4">

          {tasks.map((task) => (

            <div
              key={task.id}

              // Card changes color when completed
              className={`rounded-xl shadow-md p-5 ${
                task.completed
                  ? "bg-green-100"
                  : "bg-[#FFFCE8]"
              }`}
            >

              <div className="flex justify-between items-start">

                {/* Left Side */}
                <div className="flex gap-4">

                  {/* Tick Button */}
                  <button
  onClick={() => toggleComplete(task.id)}
>

  {/* If completed show green check otherwise empty circle */}

  {task.completed ? (
    <FaCheckCircle className="text-green-600 text-2xl" />
  ) : (
    <FaRegCircle className="text-gray-400 text-2xl" />
  )}

</button>

                  <div>

                    {/* Heading */}
                    <h2
                      className={`text-xl font-bold ${
                        task.completed
                          ? "line-through text-gray-400"
                          : ""
                      }`}
                    >
                      {task.heading}
                    </h2>

                    {/* Description */}
                    <p
                      className={`mt-2 ${
                        task.completed
                          ? "text-gray-400"
                          : ""
                      }`}
                    >
                      {task.description}
                    </p>

                    {/* Date and Time */}
                    <p className="text-sm text-gray-500 mt-3">
                      {task.date} • {task.time}
                    </p>

                  </div>

                </div>

                {/* Delete Button */}
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-xl text-red-500 hover:scale-110 transition"
                >
                  <FaTrash />
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default NotesPage;