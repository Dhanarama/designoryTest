import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";
import { filterByValue } from "./utilites";

import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  min-height: 70%;
  /* margin: -100px auto 0 auto; */
  padding: 30px;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border-radius: 0.25rem;
  background-color: lightgray;
`;
const Container = styled.div`
  width: 100%;
  /* height: 50%; */
  display: flex;
  /* background-color: lightgray; */
  align-items: baseline;
`;

/* const Tiles = styled.div`
  padding: 50px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  float:left
`;


*/
const Tile = styled.div`
  background-color: #ffffff;
  justify-content: center;
  text-align: center;
`;

const EquipmentList = styled.div`
  display: grid;
  /* background-color:#ffffff */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

const Headings = styled.h4`
  font-size: 12px;
  font-weight: 600;
  width: 100px;
  padding: 5px 5px 5px 5px;
  background-color: #13315c;
  text-align: center;
  color: #fff;
`;

const Model = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #13315c;
`;

const customControlStyles = (base) => ({
  ...base,
  right: 0,
  width: 300,
  height: 20
});

const equipOptions = [
  { id: "Eos", name: "Eos" },
  { id: "Repellendus", name: "Repellendus" },
  { id: "Marios", name: "Marios" }
];

class EquipementFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equipmentArray: [],
      sortedEquipmentArray: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getEquipment = () => {
    console.log(this.props);
    axios
      .get("https://run.mocky.io/v3/294d7269-55c7-46f6-80c0-4a90560785e2")
      .then((response) => {
        console.log(response.data);
        if (response.data.length > 0) {
          console.log(response.data.length);
          this.setState({
            equipmentArray: response.data,
            sortedEquipmentArray: response.data
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
  handleChange(event) {
    //console.log(event.name);
    //console.log(filterByValue(this.state.equipmentArray,event.name))

    let newValues = [];
    newValues = filterByValue(this.state.equipmentArray, event.name);
    this.setState({ sortedEquipmentArray: newValues });
  }
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <div>
              <h2> Equipment </h2>
            </div>
            <div>
              <Select
                styles={{ control: customControlStyles }}
                options={equipOptions}
                onChange={this.handleChange}
                placeholder={"Filter by Tags"}
                getOptionLabel={(options) => options["name"]}
                getOptionValue={(options) => options["id"]}
              />
            </div>
          </Container>
          <br></br>
          <Container>
            <EquipmentList>
              {this.state.equipmentArray.length > 0
                ? this.state.sortedEquipmentArray.map((equipment, i) => (
                    <Tile key={i}>
                      <Headings>{equipment.tag}</Headings>
                      <Model>{equipment.model}</Model>
                      <br></br>
                      serialNumber : {equipment.serialNumber}
                      <br></br>
                      Associated Devices :{" "}
                      {equipment.associatedDevices
                        ? equipment.associatedDevices.length
                        : ""}
                    </Tile>
                  ))
                : ""}
              <Tile>
                <span> + </span>
                <br></br>
                <span> Add Equipment </span>
              </Tile>
            </EquipmentList>
          </Container>
        </Wrapper>
      </>
    );
  }
}
export default EquipementFilter;
