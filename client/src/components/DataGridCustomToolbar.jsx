import React from 'react'
import {Search} from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material"
import {
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarDensitySelector,
    GridToolbarExport
} from "@mui/x-data-grid"
import FlexBetween from './FlexBetween';
const DataGridCustomToolbar = ({searchInput, setSearchInput, setSearch}) => {
  return (
      <GridToolbarContainer>
          <FlexBetween width="100%">
              <FlexBetween>
                  <GridToolbarColumnsButton />
                  <GridToolbarDensitySelector />
                  <GridToolbarExport />
              </FlexBetween>
              <TextField
                  label="Search..."
                  sx={{ mb: "0.5rem", width: "15rem" }}
                  variant='standard'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  InputProps={{
                      endAdornment: (
                          <InputAdornment
                              position='end'
                          >
                              <IconButton onClick={() => { 
                                  setSearch(searchInput);
                                  setSearchInput("")
                              }}>
                                  <Search />
                              </IconButton>
                          </InputAdornment>
                      )
                  }}
              />
          </FlexBetween>
    </GridToolbarContainer>
  )
}
export default DataGridCustomToolbar