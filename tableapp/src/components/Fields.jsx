import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import "../App.css"

const Fields = ({name,email}) => {
  return (
    
    <div className="dataVal" >
    <p>{name}</p>
    <p>{email}</p>
   <Stack>
    <Button id="delete" variant="contained" color="error">
       <DeleteIcon/>
      </Button>
      </Stack> 
    </div>
    
  )
 
}

export default Fields
