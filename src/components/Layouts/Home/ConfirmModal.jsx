import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-materialize';

const ConfirmModal = ({ onClick, trigger, message }) => {
  return (
    <Modal
      className="black-text"
      actions={[
        <Button
          flat
          modal="close"
          node="button"
          waves="red"
          className="red white-text"
          onClick={onClick}
        >
          Yes
        </Button>,
        <Button flat modal="close" node="button" waves="green">
          Close
        </Button>,
      ]}
      bottomSheet={false}
      fixedFooter={false}
      header="Confirm Delete?"
      id="Modal-0"
      open={false}
      options={{
        dismissible: true,
        endingTop: '10%',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%',
      }}
      trigger={trigger}
    >
      <p>{message}</p>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  trigger: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

export default ConfirmModal;
