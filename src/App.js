import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
    const [openModal, setOpenModal] = useState(false);
    const openModalToggle = () => {
        setOpenModal(true);
    };
    const closeModalToggle = () => {
        setOpenModal(false);
    };
    return (
        <div className="">
            {/* Header */}
            <Header
                onClick={openModalToggle}
                mobileMenu={openModal}
                onClose={closeModalToggle}
            />
            {/* Main */}
            <Main />
            {/* Footer */}
            <Footer />
            <Modal isOpen={openModal} onClose={closeModalToggle} />
        </div>
    );
}

export default App;
