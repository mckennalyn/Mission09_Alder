import React from "react";
import teamObject from "./CollegeBasketballTeams.json";
import "./App.css";

interface TeamProps {
    school: string;
    name: string;
    city: string;
    state: string;
}

function Welcome() {
    return (
        <div className="welcome">
            <h1>NCAA College Basketball Teams</h1>
            <p>This website lists all of the NCAA Basketball teams.</p>
        </div>
    );
}

class Team extends React.Component<TeamProps> {
    render() {
        const singleTeam = this.props;

        return (
            <div className="team">
                <h2>{singleTeam.school}</h2>
                <p>{singleTeam.name}</p>
                <p>
                    {singleTeam.city}, {singleTeam.state}
                </p>
            </div>
        );
    }
}

function TeamList() {
    return (
        <div className="teamList">
            {teamObject.teams.map((teamNum) => (
                <Team {...teamNum} />
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Welcome />
            <TeamList />
        </div>
    );
}

export default App;