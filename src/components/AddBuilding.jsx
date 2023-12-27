import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../providers/FirebaseProvider";
import {
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  TextField,
  //   ThemeProvider,
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
      <CssBaseline />
      {/* <ThemeProvider theme={theme}> */}
      <FormControl>
        Add a New Building:
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
        {/* add Key Features Array */}
        <FormLabel>Key Features:</FormLabel>
        {keyFeatures.map((feature, index) => (
          <React.Fragment key={"feature" + index}>
            <TextField
              margin="dense"
              type="text"
              label="Feature"
              value={feature}
              onChange={(e) => updateFeature(index, e.target.value)}
            ></TextField>
            {keyFeatures.length > 1 && (
              <Button onClick={() => removeFeature(index)}>-</Button>
            )}
          </React.Fragment>
        ))}
        <Button onClick={addFeature}>+</Button>
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
      {/* </ThemeProvider> */}
    </div>
  );
};

export default AddBuilding;
