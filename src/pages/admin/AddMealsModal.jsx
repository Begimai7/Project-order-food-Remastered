import {  Card, Grid as MuiGrid, styled, TextField, } from '@mui/material'
import React, { useState } from 'react'
import { Modal } from '../../components/UI/Modal'
import {Button} from "../../components/UI/Button"
import { useDispatch } from 'react-redux'
import { postMeals } from '../../store/meals/mealsThunk'


export const AddMealsModal = ({onClose}) => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const dispatch = useDispatch()
  
  const titleChangeHandler = (e) => {
  setTitle(e.target.value)
  }
  const descriptionChangeHandler = (e) => {
  setDescription(e.target.value)
  }
  const priceChangeHandler = (e) => {
  setPrice(+e.target.value)
  }
  
  const submitMealsHandler = (e) => {
  e.preventDefault()
  const mealsItem = {
   title,
   description,
   price
  }
  dispatch(postMeals(mealsItem))
  onClose()
  }
  // const removeMealHandler = (id) => {
  //   dispatch()
  // }

  return (
    <Modal onClose={onClose}>
      <Card>
        <Form onSubmit={submitMealsHandler}>
         <Grid>
          <Input 
           label='Food Name'
           value={title}
           onChange={titleChangeHandler}
           name="text"
            />
          <InputPrice
           placeholder='Price'
           value={price}
           onChange={priceChangeHandler}
           name="number"
           />
         </Grid>
         <Input 
           label='Description' 
           value={description}
           onChange={descriptionChangeHandler}
           name="text"
           />
         <Button type="submit">Add Meals</Button>
        </Form>
      </Card>
    </Modal>
  )
}


const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  width: 600,
  padding: '40px 10px'
}))
const Input = styled(TextField)(() => ({
 width: '80%',
 }))

const InputPrice = styled('input')(() => ({
  padding: '8px 14px',
  width: '80px',
 }))
const Grid = styled(MuiGrid)(() => ({
  width: '80%',
  display: 'flex',
  justifyContent: 'space-between', 
  alignItems: 'center'
 }))
