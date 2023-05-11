import React, { useState } from "react";
import {
  Button,
  FormGroup,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  FormControl

} from "@mui/material";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    age : 0,
    subscribe: false,
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      {/* Typography */}
      <Typography variant="h5" sx={{ color: "red", border: "Background" , marginTop:"5px" }}>
        Hello World
      </Typography>

      {/* Button */}
      <Button
        onClick={() => alert("Button Clicked")}
        variant="contained"
        size="large"
        sx={{ margin: 3 }}
        color="info"
      >
        First
      </Button>
      <Button size="medium" variant="outlined" sx={{ margin: 3 }} color="error">
        Second
      </Button>
      <Button size="small" variant="text" sx={{ margin: 3 }} color="success">
        Third
      </Button>
      <br />

      {/* TextField */}
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          name="name"
          value={inputs.name}
          type={"text"}
          placeholder="Name"
          variant="outlined"
          sx={{ margin: 1 }}
        />
        <TextField
          onChange={handleChange}
          name="email"
          value={inputs.email}
          type={"email"}
          placeholder="Email"
          variant="standard"
          sx={{ margin: 1 }}
        />
        <TextField
          onChange={handleChange}
          name="password"
          value={inputs.password}
          type={"password"}
          placeholder="Password"
          variant="filled"
          sx={{ margin: 1 }}
        />

        {/* CheckBox */}
        <FormGroup>
          <FormControlLabel
            required
            control={
              <Checkbox
                onChange={() =>
                  setInputs((prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Required"
          />
          {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
        </FormGroup>

        {/* Select */}

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
            sx={{width:"199px"}}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Test;
