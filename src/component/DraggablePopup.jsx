import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import offerImg from '../assets/offer3.jpg'; // Replace with your actual image path

const MySwal = withReactContent(Swal);

const DraggablePopup = () => {
  useEffect(() => {
    MySwal.fire({
      html: `
        <div id="drag-popup" style="
          background: rgba(255,255,255,0.95);
          border-radius: 12px;
          width: 320px;
          cursor: grab;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          transition: transform 0.1s ease-in-out;
          position: relative;
        ">
          <button id="close-btn" style="
            position: absolute;
            top: 8px;
            right: 12px;
            background: transparent;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: #555;
          ">&times;</button>

          <img src="${offerImg}" alt="Offer" style="width: 100%; border-top-left-radius: 12px; border-top-right-radius: 12px;" />

          <div style="padding: 16px; text-align: center;">
            <h2 style="font-size: 20px; margin-bottom: 10px;">🎁 Special Nagad Offer!</h2>
            <p style="margin-bottom: 14px;">Get exclusive discounts when you use Nagad today.</p>
            <a href="https://nagad.com.bd" target="_blank" style="
              display: inline-block;
              padding: 8px 16px;
              background: #e60000;
              color: #fff;
              border-radius: 6px;
              text-decoration: none;
              font-weight: 500;
            ">Learn More</a>
          </div>
        </div>
      `,
      background: 'transparent',
      showConfirmButton: false,
      showCloseButton: false,
      allowOutsideClick: false,
      didOpen: () => {
        const popup = Swal.getPopup();
        const dragElement = popup.querySelector('#drag-popup');
        const closeBtn = popup.querySelector('#close-btn');

        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        const onMouseDown = (e) => {
          isDragging = true;
          const rect = popup.getBoundingClientRect();
          offsetX = e.clientX - rect.left;
          offsetY = e.clientY - rect.top;
          popup.style.cursor = 'grabbing';
        };

        const onMouseMove = (e) => {
          if (!isDragging) return;
          popup.style.position = 'fixed';
          popup.style.left = `${e.clientX - offsetX}px`;
          popup.style.top = `${e.clientY - offsetY}px`;
          popup.style.margin = '0';
        };

        const onMouseUp = () => {
          isDragging = false;
          popup.style.cursor = 'grab';
        };

        dragElement.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        closeBtn.addEventListener('click', () => Swal.close());
      },
    });
  }, []);

  return null;
};

export default DraggablePopup;
