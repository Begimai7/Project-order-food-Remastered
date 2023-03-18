import { Grid as MuiGrid, styled} from '@mui/material'
import React from 'react'
import { Button } from '../../components/UI/Button'

export const MealsItem = ({meals, removeModalHandler}) => {
  return (
    <div>
     <Grid>
      <h6>{meals.title}</h6>
      <p>{meals.price}</p>
     </Grid>
     <p>{meals.description}</p>
   
    <Button onClick={() => removeModalHandler(meals._id)}>
          Delete
    </Button>
    </div>
  )
}
const Grid = styled(MuiGrid)(({theme}) => ({
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
width: "80%",
}))