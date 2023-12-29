import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { db } from "../providers/FirebaseProvider";
import { collection, getDocs } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";

const theme = createTheme();

const ListBuildings = () => {
  const nav = useNavigate();
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const getBuildings = async () => {
      await getDocs(collection(db, "buildings")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setBuildings(newData);
        // console.log(buildings, newData);
      });
    };
    getBuildings();
  }, []);

  const editBuilding = (building) => {
    nav("/editbuilding/" + building.id);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 240 },
    {
      field: "address",
      headerName: "Address",
      width: 250,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
    {
      field: "estCompletion",
      headerName: "Est, Comp.",
      width: 125,
    },
    {
      field: "Edit",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              editBuilding(cellValues);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DataGrid rows={buildings} columns={columns} />
      </ThemeProvider>
    </div>
  );
};

export default ListBuildings;
