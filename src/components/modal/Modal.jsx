import React, { useRef } from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
	const contentRef = useRef(null);

	const closeModal = () => {
		contentRef.current.parentNode.classList.remove("active");
		if (props.onClose) props.onClose();
	};
	return (
		<div ref={contentRef} className="modal__content">
			{props.children}
			{/* Button close modal */}
			<div className="modal__content--close" onClick={closeModal}>
				<i className="bx bx-x"></i>
			</div>
		</div>
	);
};

Modal.propTypes = {
	closeModal: PropTypes.func
};

export default Modal;
