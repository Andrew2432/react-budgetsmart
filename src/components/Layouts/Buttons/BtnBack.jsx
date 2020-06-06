import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-materialize';

const BtnBack = ({ onClick }) => {
  return (
    <Button
      large
      node="a"
      style={{
        marginLeft: '1.3rem',
        fontSize: '1rem',
      }}
      onClick={onClick}
      className="grey"
      waves="light"
    >
      Back
      <Icon left>chevron_left</Icon>
    </Button>
  );
};

BtnBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BtnBack;
