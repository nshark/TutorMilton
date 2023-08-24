import { useEffect } from "react";

import Frees from "./Frees";
import Sessions from "./Sessions";
import AddFree from "./AddFree";
import { useState } from "react";

function TuteeProfile() {
  //This needs to be "serverified"

  const [frees, setFrees] = useState([]);
  const [sessions, setSessions] = useState([]);

  const [showAddFree2, setShowAddFree] = useState(false);

  useEffect(() => {
    const getFrees = async () => {
      const res = await fetch("http://localhost:5000/frees");
      const data = await res.json();
      setFrees(data);
    };
    const getSessions = async () => {
      const res = await fetch("http://localhost:5000/sessions");
      const data2 = await res.json();
      setSessions(data2);
    };

    getFrees();
    getSessions();
  }, []);

  const addFree = async (free: JSON) => {
    const res = await fetch("http://localhost:5000/frees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(free),
    });

    const data = await res.json();

    setFrees([...frees, data]);
  };

  return (
    <div className="App-bg">
      <div className="row">
        <div className="column">
          <Sessions session={sessions} />
        </div>

        <div className="column">
          {showAddFree2 && <AddFree onAddFree={addFree} />}
          <Frees
            free={frees}
            onAddFree={() => setShowAddFree(!showAddFree2)}
            showFree={showAddFree2}
          />
        </div>
      </div>
    </div>
  );
}

export default TuteeProfile;
