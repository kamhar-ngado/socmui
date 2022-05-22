import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Typography } from "@mui/material";

function App() {



  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<SettingsIcon />}
      >
        Contained
      </Button>
      <Button variant="outlined" color="success">
        Outlined
      </Button>

      <Typography variant="h1">the text uses h1 styles</Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "orange",
          margin: "50px",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        button1
      </Button>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "orange",
          margin: "50px",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        button2
      </Button>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "orange",
          margin: "50px",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        button3
      </Button>
    </div>
  );
}

export default App;
