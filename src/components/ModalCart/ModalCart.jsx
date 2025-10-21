import "./modalcart.css";

export const ModalCart = ({ isOpen, textModal }) => {

    if (!isOpen) return null;

    return (
        <div className="modal-cart-container">
            <div className={`card-modal ${textModal.error ? "failure" : "success"}`}>
                <p>
                    <span>{textModal.text}</span>
                    {
                        !textModal.error
                            ? (
                                <span className="icon-modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </span>
                            )
                            : (
                                <span className="icon-modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                    </svg>
                                </span>
                            )
                    }
                </p>
            </div>
        </div>
    )
}