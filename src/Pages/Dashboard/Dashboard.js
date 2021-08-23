import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Archieve from "../../Components/Archieve/Archieve";

import Navbar from "../../Components/Navbar/Navbar";
import Notes from "../../Components/Notes/Notes";
import Sidepanel from "../../Components/SidePanel/Sidepanel";
import Trash from "../../Components/Trash/Trash";
export const context = React.createContext();
const Dashboard = () => {
  const [showSidePanel, setShowsidePanel] = useState(false);
 
  return (
    <>
      <div className="body">
        <div className="navbar">
          <Navbar
            setShowSidePanel={setShowsidePanel}
            showSidePanel={showSidePanel}
          />
        </div>{" "}
        {showSidePanel && <Sidepanel />}{" "}
        <div>
          <context.Provider value ={{showSidePanel}}>
          <Router>
            <Route exact path="/dashboard" component={Notes} />{" "}
            <Route exact path="/dashboard/trash" component={Trash} />{" "}
            <Route exact path="/dashboard/archive" component={Archieve} />
          </Router>
          </context.Provider>
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Dashboard;
