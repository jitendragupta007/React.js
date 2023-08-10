import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function App() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  console.log({ todo });

  const addData = () => {
    if (todo === "") {
      alert("Please fill the input first");
    } else {
      setData([...data, { todo }]);
      setTodo("");
    }
  };
  const removeData = () => {
    setData([]);
  };

  function removeItem(index) {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  const handlePress = (event) => {
    if (event.key == "Enter") {
      addData();
    }
  };

  return (
    <div className="App">
      <h1 id="header">Todo App</h1>
      <div id="fields">
        <TextField
          onKeyPress={(e) => handlePress(e)}
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          success="true"
          id="outlined-success"
          label="To Do"
          defaultValue=""
        />
        <Stack spacing={1} direction="row">
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="table">
        <div className="data">
          <h4>SR No</h4>
          <h4>ToDo</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data">
              <h5>{index + 1}.</h5>
              <p>{element.todo}</p>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
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
      <div id="removeBtn">
        <Stack spacing={1} direction="row">
          <Button onClick={removeData} variant="contained" color="error">
            Remove All
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
