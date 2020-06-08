import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastContext from '../../../context/Toasts/ToastContext';

const CustomToast = ({ message }) => {
  const toastContext = useContext(ToastContext);
  const { removeToast } = toastContext;

  /**
   * Display toast based on type
   */
  const notify = () => {
    if (message.type === 'success') {
      toast.success(message.text, {
        onClose: () => removeToast(),
      });
    } else if (message.type === 'error') {
      toast.error(message.text, {
        onClose: () => removeToast(),
      });
    } else {
      toast(message.text, {
        onClose: () => removeToast(),
      });
    }
  };

  /**
   * Mount at every render
   */
  useEffect(() => {
    notify();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        limit={3}
        closeButton={false}
      />
    </div>
  );
};

CustomToast.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomToast;
