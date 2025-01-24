import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/Booked.css";

const Booked = ({ imageStates }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);
    const [description, setDescription] = useState("");
    const [isEnquiryClicked, setIsEnquiryClicked] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);

    const starredImages = Object.keys(imageStates).filter((src) => imageStates[src].starred);

    const handleImageClick = (src, desc) => {
        setModalImage(src);
        setDescription(desc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsEnquiryClicked(false);
        setIsMessageSent(false);
    };

    const handleModalClick = (e) => {
        if (e.target.classList.contains("zxy-modal")) {
            closeModal();
        }
    };

    const handleEnquiryClick = () => {
        setIsEnquiryClicked(true);
    };

    const handleSendMessageClick = () => {
        alert("Message Sent!");
        setIsMessageSent(true);
    };

    return (
        <div>
            <Navbar />
            <div className="zxy-list-container">
                <h1 className="zxy-list-heading">Booked Photos</h1>
                <div className="zxy-list">
                    {starredImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`booked-img${index + 1}`}
                            className="zxy-list-image"
                            onClick={() => handleImageClick(src, imageStates[src].description)}
                        />
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="zxy-modal" onClick={handleModalClick}>
                    <div className="zxy-modal-content">
                        <div className={`zxy-modal-image-container ${isEnquiryClicked ? 'expanded' : ''}`}>
                            <img src={modalImage} alt="Modal" className="zxy-modal-image" />
                            {isEnquiryClicked && (
                            <div className="zxy-enquiry-form visible">
                                <h3>Send Your Enquiry</h3>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <button className="button-27" onClick={handleSendMessageClick}>
                                    Send Message
                                </button>
                            </div>
                        )}
                        </div>
                        <div className="zxy-modal-actions">
                            {!isMessageSent ? (
                                <>
                                    <button
                                        className="button-27"
                                        onClick={handleEnquiryClick}
                                        disabled={isEnquiryClicked}
                                    >
                                        Enquiry
                                    </button>
                                    <button className="button-27">Book</button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="button-27"
                                        onClick={handleEnquiryClick}
                                        disabled={isEnquiryClicked}
                                    >
                                        Enquiry
                                    </button>
                                    <button className="button-27">Book</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Booked;