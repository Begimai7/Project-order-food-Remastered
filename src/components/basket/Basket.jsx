import { DialogContent, DialogContentText,  } from '@mui/material'
import React from 'react'
import { Modal } from '../UI/Modal'
import styledComponents from 'styled-components'
import { BasketItem } from './BasketItem'
import { useDispatch, useSelector} from 'react-redux'
import { updateBasketItem, deleteBasketItem } from '../../store/basket/BasketSlice'

export const Basket = ({onClose}) => {
const items = useSelector((state) => state.basket.items)
const dispatch = useDispatch()

const decrementAmount = (id, amount) => {
  if(amount > 1){
    dispatch(updateBasketItem({amount: amount - 1, id}))
  }else{
   dispatch(deleteBasketItem(id))
  }
 }
 const incrementAmount = (id, amount) => {
   dispatch(updateBasketItem({amount: amount + 1, id}))
 }
  return (
    <Modal onClose={onClose}>
       <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <BasketItem />

            {
              items.length ? <MapItems>
             {
              items.map((elem) => (
                <BasketItem 
                key={elem._id}
                title={elem.title}
                price= {elem.price}
                amount = {elem.amount}
                decrementAmount={() => decrementAmount(elem._id, elem.amount)}
                incrementAmount={() => incrementAmount(elem._id, elem.amount)}
               />
              ))}
              </MapItems> : null
              }

              
           </DialogContentText>
       </DialogContent> 
    </Modal>
   
  )
}


const MapItems = styledComponents.div`
 max-height: 228px;
 overflow-y: scroll;
`
const  ModalContainer = styledComponents.div`
  padding: 0.5rem 1rem;
  width: 100%;
`

