import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Header from "./components/Header";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState([]);

  const addData = () => {
  setData([...data, { name, email }]);
  setName(" ");
  setEmail(" ")


  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

 

  return (
    <div className="App">
      <Header />
      <div className="inputValues">
        {" "}
        <TextField

          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-success"
          label="Enter Name"
          defaultValue=""
        />
        <TextField
        
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-success"
          label="Enter Email"
          defaultValue=""
        />
        <Button onClick={addData} variant="contained" color="success">
          <AddIcon style={{ fontSize: "40px" }} />
        </Button>
      </div>
      <div className="data">
        <div className="dataVal">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div className="dataVal">
              <h4 >{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  id="delete"
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
