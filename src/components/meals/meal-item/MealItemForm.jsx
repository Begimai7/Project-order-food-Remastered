import React from 'react'
import { useState} from 'react'
import styledComponents from 'styled-components'
import { Button } from '../../UI/Button'
import { ReactComponent as AddIcon } from '../../../assets/icons/plus-add.svg'
import { useDispatch } from 'react-redux'
import {  TextField } from '@mui/material'
import { styled } from '@mui/system'
import { addToBasket } from '../../../store/basket/BasketSlice'


export const MealItemForm = ({id, title, price}) => {
  const dispatch = useDispatch() 
 const [amount, setAmount] = useState(1)

 const getAmount = (e) => {
  e.preventDefault()
  setAmount(+e.target.value)
 }

 const submitMeals = () => {
  const basketItem = {
    id,
    title, 
    price, 
    amount
  }
  dispatch(addToBasket(basketItem))
  console.log(basketItem);
 }

  return (
   <FormContainer onSubmit={submitMeals}>
   <InputContainer>
      <label htmlFor={id}>Amount</label>

         <StyledTextField
              id={id}
              type="number"
              value={amount}
              onChange={getAmount}
        />
   </InputContainer>
 
        <Button onClick={submitMeals}>
        <StyledIcon/>
     Add</Button>
   
 </FormContainer>
  )
}

const StyledTextField = styled(TextField)(() => ({
  "&": {
    width: '60px',
    height: '50px',
    margin: "5px 10px"
  },
  "& .MuiOutlinedInput-input": {
    padding: "5px 10px",
    fontSize: "18px",
    fontWeight: "bold",
  }
}))


const FormContainer = styledComponents.div`
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 margin: 26px 0 10px;
`
const InputContainer = styledComponents.form`
   display: flex;
   align-items: center;
   margin-bottom: 12px;

   label{
   font-weight: 600;
   font-size: 18px;
   line-height: 27px;
   color: #222222;
   }
`
// const StyledInput = styledComponents.input`
// width: 60px;
// height: 32px;
// border: 1px solid #D6D6D6;
// border-radius: 6px;
// padding: 4px 12px;
// margin-left: 20px;
// font-weight: 500;
// font-size: 16px;
// line-height: 24px;
// color: #222222;
// outline: none;
// `
const StyledIcon =  styledComponents(AddIcon)`
margin-right: 20px;
`