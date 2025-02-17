import React from 'react';
import './App.css';
import NavBar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import CE201 from "./components/CE201/CE201";
import PRE28A from "./components/PRE28A/PRE28A";
import PRE28AEntry from "./components/PRE28A/PRE28AEntry";
import Reports from "./components/report/reports";
import PRE21 from "./components/invalid-ballots/PRE21";
import PRE21Entry from "./components/invalid-ballots/PRE21Entry";
import PRE21PVEntry from "./components/invalid-ballots/postal-votes/PRE21PVEntry";
import PRE21PV from "./components/invalid-ballots/postal-votes/PRE21PV";
import PRE41 from "./components/partywise-count/PRE41";
import PRE41Entry from "./components/partywise-count/PRE41Entry";
import PRE41PV from "./components/partywise-count/postal-votes/PRE41PV";
import PRE41PVEntry from "./components/partywise-count/postal-votes/PRE41PVEntry";
import PRE34CO from "./components/preferences/PRE34CO";
import PRE34COEntry from "./components/preferences/PRE34COEntry";
import PRE34COPV from "./components/preferences/postal-votes/PRE34COPV";
import PRE34COPVEntry from "./components/preferences/postal-votes/PRE34COPVEntry";
import Login from "./components/login/Login";
import CE201Entry from "./components/CE201/CE201Entry";
import PRE28Entry from "./components/PRE28/PRE28Entry";
import PRE28 from "./components/PRE28/PRE28";
import ReportsEntry from "./components/report/ReportsEntry";
import Home from "./components/home/Home";
import HomeSelection from "./components/home/HomeSelection";
import HomeElection from "./components/home/HomeElection";
import ReportsNew from "./components/report/ReportsNew";
import CE201PV from "./components/CE201/postal-votes/CE201PV";
import CE201PVEntry from "./components/CE201/postal-votes/CE201PVEntry";
import PRE41Report from "./components/partywise-count/PRE41Report";
import ReportView from "./components/report/ReportView";
import CE201Report from "./components/CE201/CE201Report";
import PRE41Edit from "./components/partywise-count/PRE41Edit";


function App() {
    return (
        <Router>
            <div>
                <NavBar/>

                <Route exact path="/" component={HomeElection}/>

                <Route exact path="/report" component={Reports}/>
                <Route exact path="/ReportsEntry" component={ReportsEntry}/>
                <Route exact path="/ReportsNew" component={ReportsNew}/>
                <Route exact path="/ReportView/:tallySheetId/:tallySheetVersionId" component={ReportView}/>

                <Route exact path="/CE201" component={CE201}/>
                <Route exact path="/CE201-Entry/:name/:name2/:countingId" component={CE201Entry}/>
                <Route exact path="/CE201Report/:tallySheetId/:tallySheetVersionId" component={CE201Report}/>

                <Route exact path="/PRE21" component={PRE21}/>
                <Route exact path="/PRE21-Entry/:name/:name2" component={PRE21Entry}/>

                <Route exact path="/PRE34CO" component={PRE34CO}/>
                <Route exact path="/PRE34CO-Entry/:name" component={PRE34COEntry}/>

                <Route exact path="/PRE28" component={PRE28}/>
                <Route path="/PRE28-Entry/:name" component={PRE28Entry} />

                <Route exact path="/PRE41" component={PRE41}/>

                <Route path="/PRE41-Entry/:name/:name2" component={PRE41Entry} />

                <Route exact path="/PRE41Report/:tallySheetId/:tallySheetVersionId/:countingId" component={PRE41Report}/>

                <Route exact path="/PRE41Edit/:tallySheetId/:tallySheetVersionId/:countingId" component={PRE41Edit}/>

                <Route exact path="/PRE28A" component={PRE28A}/>
                <Route path="/PRE28A-Entry/:name" component={PRE28AEntry} />

                <Route exact path="/PRE21PV" component={PRE21PV}/>
                <Route exact path="/PRE21PV-Entry/:name/:name2" component={PRE21PVEntry}/>

                <Route exact path="/PRE41PV" component={PRE41PV}/>
                <Route exact path="/PRE41PV-Entry/:name/:name2" component={PRE41PVEntry}/>

                <Route exact path="/CE201PV" component={CE201PV}/>
                <Route exact path="/CE201PV-Entry/:name/:name2/:countingId" component={CE201PVEntry}/>

                {/*Route exact path="/CE201PV-Entry/:name/:name2" component={PRE41PVEntry}/>*/}
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Main" component={HomeSelection}/>

                <Route exact path="/PRE34COPV" component={PRE34COPV}/>
                <Route exact path="/PRE34COPV-Entry" component={PRE34COPVEntry}/>

            </div>
        </Router>

    );
}

export default App;





