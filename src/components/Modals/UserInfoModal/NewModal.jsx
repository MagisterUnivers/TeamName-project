import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import { ModalWrapper } from "./ConfirmLogout.styled"
import { ModalBody, ModalContent, ModalTitle } from "./NewModal.styled"

export const NewModal = ({ onClose }) => {
  const ref = useRef()
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose()
      }
    }
    document.addEventListener("click", checkIfClickedOutside)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContent ref={ref}>
        <ModalTitle>Modal Title</ModalTitle>
        <ModalBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          sint ab ex odio pariatur et eius? Nam, quod eum adipisci earum nisi
          tempora, nesciunt esse voluptate illo, maxime consectetur harum!
        </ModalBody>
        
          <button onClick={onClose}>Close</button>
      
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("modal-root")
  )
}

