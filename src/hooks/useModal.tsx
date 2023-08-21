import { useState } from "react";

const useModal = () => {
    const [showModal, setShowModal] = useState(false)
    

    const toggleModal = () => {
        console.log(showModal);
        
        
        setShowModal(!showModal)
    }

    return { showModal, toggleModal };
}

export default useModal;