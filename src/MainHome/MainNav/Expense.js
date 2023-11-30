import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
function Expense() {
  const [amt, setAmt] = useState(0);
  const [mem, setMem] = useState(0);
  const [split, setSplit] = useState(0);
  const [descrip, setDescrip] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setSplit(amt / mem);
  });
  function additem() {
    if (!amt) {
      alert("Please Enter the Details");
      return;
    }

    const items = {
      id: Math.floor(Math.random() * 1000),
      value1: amt,
      value2: mem,
      value3: descrip,
      value4: split,
    };

    setData((oldList) => [...oldList, items]);
    alert("Added successfully");
  }

  function deleteitem(id) {
    const array = data.filter((a) => a.id !== id);
    setData(array);
  }
  return (
    <div>
      <div>
        <h1>New Expense</h1>
        <label>Amount:</label>
        <TextField
          id="standard-number"
          label="Amount"
          type="number"
          value={amt}
          onChange={(e) => {
            setAmt(e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>

        <label>Members</label>
        <TextField
          id="standard-number"
          label="Members"
          type="number"
          value={mem}
          onChange={(e) => {
            setMem(e.target.value);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>
        <br />
        <label>
          Currency:
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="currency"
              >
                <MenuItem value={10}>Indian Rupee</MenuItem>
                <MenuItem value={20}>USD</MenuItem>
                <MenuItem value={30}>Euro</MenuItem>
                <MenuItem value={30}>Swis Franc</MenuItem>
                <MenuItem value={30}>Japanese Yen</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </label>
        <label>
          Split Method:
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Split</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Split"
              >
                <MenuItem value={10}>Equally</MenuItem>
                <MenuItem value={20}>Exact amounts</MenuItem>
                <MenuItem value={30}>Percentages</MenuItem>
                <MenuItem value={30}>Shares</MenuItem>
                <MenuItem value={30}>Adjustment</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </label>
        <br />
        <lable>For Whom :</lable>
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <br />
        <label>
          Description :
          <TextField
            id="standard-multiline-static"
            label=""
            multiline
            onChange={(e) => {
              setDescrip(e.target.value);
            }}
            rows={4}
            value={descrip}
            variant="standard"
          />
        </label>

        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={additem}>
            ADD
          </Button>
        </Stack>
        <br></br>
        <br></br>
        <hr />
        <br></br>
        <ol>
          {data.map((a) => (
            <li key={a.id} className="list">
              Amount : {a.value1} <br />
              Members : {a.value2}
              <br />
              MyShare: {a.value4}
              <br />
              Description : {a.value3}
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => deleteitem(a.id)}
                >
                  Delete
                </Button>
                <Button variant="contained">Pay my Share</Button>
              </Stack>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Expense;
