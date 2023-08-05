import React from "react";
import Landing from "./components/Landing";
import { Card, CardContent, Grid } from "@mui/material";

function App() {
  return (
    <Card sx={{ bgcolor: "lightyellow" }}>
      <CardContent>
        <Landing />

      </CardContent>
    </Card>
  );
}

export default App;
