/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Certificates = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const certificateList = [
    {
      title: "python",
      issuer: "GUVI",
      img: "./certificates/python.jpg"
    },
    {
      title: "Ai Conclave Hackathon",
      issuer: "KEC",
      img: "./certificates/Ai Conclave Hackathon.jpg",

    },
    {
      title: "Workshop",
      issuer: "ESEC",
      img: "./certificates/Workshop.jpg"
    },
    {
      title: "Artificial Intelligence",
      issuer: "NoviTech",
      img: "/certificates/Artificial Intelligence.jpg"
    },
    {
      title: "Data Analytic MasterClass",
      issuer: "Anna University",
      img: "/certificates/Data Analytic.jpg"
    },
    {
      title: "AWS",
      issuer: "AWS",
      img: "./certificates/AWS.jpg"

    },
    {
      title: "Power Bi Workshop",
      issuer: "Anna University",
      img: "./certificates/Power Bi Workshop.jpg"
    },
    {
      title: "Data Analatics Intership",
      issuer: "Anna University",
      img: "./certificates/Data Analatics.jpg"
    },

    {
      title: "Machine learning Intership",
      issuer: "Anna University",
      img: "./certificates/Machine learning.jpg"
    }, {
      title: "0racle",
      issuer: "0racle University",
      img: "./certificates/0racle.jpg"
    }
  ];

  const openModal = (img) => {
    setActiveImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveImage('');
  };

  return (
    <section id="certificates" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Certificates</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {certificateList.map((cert, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
          >
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition"
              onClick={() => openModal(cert.img)}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600">Issued by: {cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex justify-center items-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50"
      >
        <div className="relative bg-white p-4 rounded-lg shadow-lg">
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-800 text-xl font-bold"
          >
            ✕
          </button>
          <img src={activeImage} alt="Certificate" className="max-h-[80vh] max-w-full" />
        </div>
      </Modal>
    </section>
  );
};

export default Certificates;
