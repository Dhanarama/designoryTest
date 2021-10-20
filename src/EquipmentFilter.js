import React, { Component } from "react";
import styled from "styled-components";
import select from "react-select";

import axios from "axios";

const container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: baseline;
`;
const styles = {
  container: (base) => ({
    ...base,
    flex: 1
  })
};

const Tiles = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Tile = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

const headings = styled.h3`
  font-size: 12px;
  font-weight: 600;
  background-color: #13315c;
`;

const equipOptions = [
  { value: "Fillter by Tag", label: "tag" },
  { value: "Eos", label: "Eos" },
  { value: "Repellendus", label: "Repellendus" },
  { value: "Marios", label: "Marios" }
];
class EquipementFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentArray: []
    };
  }

  getEquipment = () => {
    console.log(this.props);
    axios
      .get("https://run.mocky.io/v3/294d7269-55c7-46f6-80c0-4a90560785e2")
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          console.log(response.data.length);
          response.data.map((equipment, i) => {
            console.log(equipment);
            return (
              <Tiles>
                <Tile key={i}>
                  <headings>{equipment.tag}</headings>
                  Id : {equipment.id}
                  serialNumber : {equipment.serialNumber}
                  Associated Devices :{" "}
                  {equipment.associatedDevices
                    ? equipment.associatedDevices.length
                    : ""}
                </Tile>
              </Tiles>
            );
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getEquipment();
  }

  render() {
    return (
      <container>
        <h6> Equipment </h6>
        <select styles={styles} options={equipOptions} />
      </container>
    );
  }
}
export default EquipementFilter;
