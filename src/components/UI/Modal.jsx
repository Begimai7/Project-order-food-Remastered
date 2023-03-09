import { Dialog } from "@mui/material"
import { createPortal } from "react-dom"
import styledComponents  from "styled-components";

const Backdrop = ({onClose}) => {
 return(
  <StyledBackdrop onClick={onClose} />
 )
}
// ---------------------------------------------

export const ModalBlock = ({children, onClose}) => {
 return(
  <Dialog
  open={true}
  onClose={onClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
 {children}
</Dialog>
 )
}


// ---------------------------------------------


const backdropRoot = document.getElementById('backdrop')
const modalRoot = document.getElementById('modal-overley')

export const Modal = ({ onClose, children}) => {
 return (
  <>
   { 
    createPortal(<Backdrop onClose={onClose}/>, backdropRoot)
   }
   {
    createPortal(<ModalBlock onClose={onClose}>{children}</ModalBlock>, modalRoot)
   }
  </>
 )
}


const StyledBackdrop = styledComponents.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 20;
`
// const Dialog = styled(MuiDialog)(()=> ({
//   position: "fixed",
//   top: "20vh",
//   // left: "5%",
//   // width: "90%",
//   backgroundColor: "white",
//   // padding: "1rem",
//   borderRadius: "14px",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
//   zIndex: "30",
//   animation: "slide-down 300ms ease-out forwards",
//   width: "30rem",
//   left: "calc(50% - 20rem)",

// "@keyframes slide-down":{
//   "from": {
//     opacity: "0",
//     transform: "translateY(-3rem",
//   },
//   "to": {
//     opacity: "1",
//     transform: "translateY(0)"
//   },
// }
// }))