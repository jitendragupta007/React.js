import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const [data, setData] = useState([]);

  const addData = () => {
    if (name === "" || email === "") {
      alert("Please fill all the fields");
      return false;
    } else {
      setData([...data, { name, email }]);
      setname("");
      setemail("");
    }
  };



  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div classname="App">
   
      <div  style={{display:"flex", marginTop:"50px",marginLeft:"30%"}}    classname="inputValues">
        {" "}
        <TextField
          value={name}
          onChange={(e) => setname(e.target.value)}
          id="outlined-success"
          label="Enter name"
         />

        <TextField
          value={email}
          onChange={(e) => setemail(e.target.value)}
          id="outlined-success"
          label="Enter email"
          defaultValue=""
        />
        <Button onClick={addData} variant="contained" color="success">
          <AddIcon style={{ fontSize: "40px" }} />
        </Button>
      </div>
      <div className="data">
        <div className="dataVal">
          <h4>name</h4>
          <h4>email</h4>
          <h4>remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div className="dataVal">
              <p>{element.name}</p>
              <p>{element.email}</p>
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
