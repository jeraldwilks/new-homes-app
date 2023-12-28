import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../providers/FirebaseProvider";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const theme = createTheme();

const AddBuilding = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState();
  const [builder, setBuilder] = useState("");
  const [storeys, setStoreys] = useState(1);
  const [desc, setDesc] = useState("");
  const [estCompletion, setEstCompletion] = useState("");
  const [keyFeatures, setKeyFeatures] = useState([""]);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const addFeature = () => {
    setKeyFeatures((prev) => [...prev, ""]);
  };

  const removeFeature = (index) => {
    setKeyFeatures((current) => current.filter((value, i) => index != i));
  };

  const updateFeature = (index, value) => {
    let newArray = [...keyFeatures];
    newArray[index] = value;
    setKeyFeatures(newArray);
  };

  const submitBuilding = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "buildings"), {
        name,
        address,
        city,
        builder,
        storeys,
        desc,
        estCompletion,
        keyFeatures,
        contactName,
        contactPhone,
        contactEmail,
        createdAt: Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error(" Error adding document: ", e);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <Container component="main" maxWidth="xs"> */}
        <CssBaseline />
        <Box
          sx={{
            width: 600,
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ width: 600 }}>
            <Typography component="h1" variant="h5">
              Add a New Building:
            </Typography>
            <TextField
              margin="dense"
              type="text"
              label="Name of Development"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            ></TextField>
            <TextField
              margin="dense"
              type="text"
              label="Address"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></TextField>
            <TextField
              margin="dense"
              type="text"
              label="City"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></TextField>
            <TextField
              margin="dense"
              type="text"
              label="Builder"
              value={builder}
              onChange={(e) => setBuilder(e.target.value)}
            ></TextField>
            <TextField
              margin="dense"
              type="number"
              label="Number of Storeys"
              value={storeys}
              onChange={(e) => setStoreys(e.target.value)}
            ></TextField>
            <TextField
              margin="dense"
              type="text"
              label="Description of Development"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></TextField>
            <TextField
              margin="dense"
              type="text"
              label="Estimated Completion"
              value={estCompletion}
              onChange={(e) => setEstCompletion(e.target.value)}
            ></TextField>
            <FormLabel>Key Features:</FormLabel>
            <Grid container>
              {keyFeatures.map((feature, index) => (
                <React.Fragment key={"feature" + index}>
                  <Grid item xs={10}>
                    <TextField
                      fullWidth
                      margin="dense"
                      type="text"
                      label="Feature"
                      value={feature}
                      onChange={(e) => updateFeature(index, e.target.value)}
                    />
                  </Grid>
                  {keyFeatures.length > 1 && (
                    <Grid item xs={2}>
                      <Button
                        sx={{ m: 2 }}
                        onClick={() => removeFeature(index)}
                        color="error"
                        variant="outlined"
                      >
                        -
                      </Button>
                    </Grid>
                  )}
                </React.Fragment>
              ))}
            </Grid>
            <Grid container justifyContent={"center"}>
              <Grid item xs={6}>
                <Button
                  sx={{ m: 1 }}
                  fullWidth
                  onClick={addFeature}
                  variant="outlined"
                >
                  +
                </Button>
              </Grid>
            </Grid>
            <TextField
              margin="dense"
              type="text"
              label="Name of Contact"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
            ></TextField>
            <TextField
              margin="dense"
              type="text"
              label="Contact Phone Number"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            ></TextField>
            <TextField
              margin="dense"
              type="text"
              label="Contact Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            ></TextField>
            <Button onClick={submitBuilding}>Add Building</Button>
          </FormControl>
        </Box>
        {/* </Container> */}
      </ThemeProvider>
    </div>
  );
};

export default AddBuilding;
