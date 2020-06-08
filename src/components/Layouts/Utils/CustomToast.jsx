import React, { useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastContext from '../../../context/Toasts/ToastContext';

const CustomToast = ({ message }) => {
  const toastContext = useContext(ToastContext);
  const { removeToast } = toastContext;

  const notify = () =>
    toast(message, {
      onClose: () => removeToast(),
    });

  useEffect(() => {
    notify();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        limit={3}
      />
    </div>
  );
};

export default CustomToast;
