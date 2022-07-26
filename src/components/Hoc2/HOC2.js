import React, {Component} from "react";

const locations = (LOCATION) => {
    class Location extends Component {
        render(){
            return <LOCATION locationName = "Krishnagar"></LOCATION>;
        }
    }
    return Location;
};

export default locations;