import React from 'react';
import PropTypes from 'prop-types';
import { CollectionItem, Icon } from 'react-materialize';

const ExpenseItem = (props) => {
  const { id, name, cost, createdAt } = props;
  return (
    <CollectionItem id={id}>
      <b>{name}</b> | <em>Rs. {cost}</em> <br />
      <b>On: {createdAt}</b>
      <a className="secondary-content" href="!#">
        <Icon className="red-text">delete</Icon>
      </a>
      <a className="secondary-content" href="!#">
        <Icon className="orange-text">mode_edit</Icon>
      </a>
    </CollectionItem>
  );
};

ExpenseItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ExpenseItem;
