// ProjectCard.js
import React, { useState } from "react";
import Modal from "react-modal";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  galleryImages,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onClick={openModal}
        className="cursor-pointer"
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#360f11] p-5 rounded-2xl sm:w-[360px] w-full  border-2 border-[#642024]"
        >
          {/* ... existing card content */}
        </Tilt>
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>{name} Gallery</h2>
        <div className="gallery">
          {galleryImages.map((img, i) => (
            <img key={`img-${i}`} src={img} alt={`project-image-${i}`} />
          ))}
        </div>
        <button onClick={closeModal}>Close Gallery</button>
      </Modal>
    </>
  );
};

export default ;
