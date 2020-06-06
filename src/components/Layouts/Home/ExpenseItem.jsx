import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CollectionItem, Icon } from 'react-materialize';
import ExpenseContext from '../../../context/Expense/expenseContext';

const ExpenseItem = (props) => {
  const expenseContext = useContext(ExpenseContext);
  const { editExpense } = expenseContext;
  const { id, name, cost, createdAt } = props;

  const handleEdit = (e) => {
    e.preventDefault();
    const val = e.target.parentElement.parentElement.attributes.id;
    editExpense(val);
  };

  return (
    <CollectionItem id={id} data-key={id}>
      <b>{name}</b> | <em>Rs. {cost}</em> <br />
      <b>{createdAt}</b>
      <a className="secondary-content" href="!#" onClick={handleEdit}>
        <Icon className="red-text">delete</Icon>
      </a>
      <a className="secondary-content" href="!#" onClick={handleEdit}>
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
