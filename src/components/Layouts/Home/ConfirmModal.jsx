import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-materialize';

const ConfirmModal = ({ onClick, trigger, message, id, targetid }) => {
  return (
    <Modal
      className="black-text"
      targetid={targetid ? targetid : null}
      actions={[
        <Button
          flat
          modal="close"
          node="button"
          waves="red"
          className="red white-text"
          onClick={onClick(targetid)}
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
      id={id}
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
      trigger={trigger ? trigger : null}
    >
      <p>{message}</p>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  onClick: PropTypes.func.isRequired,
  trigger: PropTypes.object,
  message: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default ConfirmModal;
