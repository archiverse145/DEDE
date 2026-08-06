import { useState } from "react";
import MainPage from "./components/MainPage";
import NotesPage from "./components/NotesPage";

const App = () => {

  // Stores all the tasks of the application
  const [tasks, setTasks] = useState([]);

  // Controls which page is displayed
  // false -> MainPage
  // true  -> NotesPage
  const [showNotes, setShowNotes] = useState(false);

  return (
    <>
      {showNotes ? (

        // Sending tasks and functions to NotesPage using props
        <NotesPage
          tasks={tasks}
          setTasks={setTasks}
          setShowNotes={setShowNotes}
        />

      ) : (

        // Sending tasks and functions to MainPage using props
        <MainPage
          tasks={tasks}
          setTasks={setTasks}
          setShowNotes={setShowNotes}
        />

      )}
    </>
  );
};

export default App;