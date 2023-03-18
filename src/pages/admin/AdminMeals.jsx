import { Button as MuiButton, styled} from '@mui/material'
import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { deleteMeals, getMeals } from '../../store/meals/mealsThunk'
import { AddMealsModal } from './AddMealsModal'
import { MealsItem } from './MealsItem'

export const AdminMeals = () => {
const [openModal, setOpenModal] = useSearchParams(false)
const meals = useSelector((state) => state.meals.meals)
const dispatch = useDispatch()
const [isEdit, setEdit] = useState(false)
const [editMealId, setEditMealId] = useState(null)

const openModalHandler = () => {
  openModal.set('showModal', true)
  setOpenModal(openModal)
}
const closeModalHandler = () => {
  openModal.delete('showModal')
  setOpenModal(openModal)
  setEdit(false)
}

const removeModalHandler = (id) => {
 dispatch(deleteMeals(id))
}

  return (
    <div>
      {
        openModal.has('showModal') && <AddMealsModal onClose={closeModalHandler} />
      }
       <Button type='submit' onClick={openModalHandler}>Add meals</Button>
       <div>
         {
          meals.map((item) => (
            <MealsForm>
              <MealsItem key={item._id} meals={item} removeModalHandler={removeModalHandler}/>
            </MealsForm> 
          ))
         }
       </div>

       <h3>No Meals yet</h3>
    </div>
  )
}
const Button = styled(MuiButton)(({theme})=> ({
  margin: '3rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  }
}))

const MealsForm = styled('div')(({theme})=> ({
 
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: '20px',
  margin: '20px',
  width: 700
}))