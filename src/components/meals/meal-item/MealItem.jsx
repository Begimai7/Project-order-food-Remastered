import React from 'react'
import styled from 'styled-components'
import { MealItemForm } from "./MealItemForm"

export const MealItem = ({ title, description, price, id}) => {
  return (
    <ListContainer >

      <StyledMealInfo >
        <StyledTitle>{title}</StyledTitle>
        <StyledDesc>{description}</StyledDesc>
        <StyledPrice>{price}</StyledPrice>
      </StyledMealInfo>

      <div>
      <MealItemForm 
       title={title}
       price={price}
       id={id}/>
      </div>
    </ListContainer>
  )
}
const ListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #D6D6D6;

  :last-child{
    border: none;
  }
`
const StyledMealInfo = styled.div`
 margin: 24px 0 20px 0;
`
const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  margin: 0;
`
const StyledDesc = styled.p`
  padding: 4px 0;
  margin: 0;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`
const StyledPrice = styled.p`
   font-weight: 700;
   font-size: 20px;
   line-height: 30px;
   color: #AD5502;
   margin-top: 0;
`

