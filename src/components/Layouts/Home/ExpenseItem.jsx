import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CollectionItem, Icon } from 'react-materialize';
import ExpenseContext from '../../../context/Expense/expenseContext';

const ExpenseItem = (props) => {
  const expenseContext = useContext(ExpenseContext);
  const { editExpense, deleteExpense } = expenseContext;
  const { id, name, cost, createdAt } = props;

  const findID = (e) =>
    e.target.parentElement.parentElement.attributes.id.nodeValue;

  const handleEdit = (e) => {
    e.preventDefault();
    editExpense(findID(e));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteExpense(findID(e));
  };

  return (
    <CollectionItem id={id} data-key={id}>
      <b>{name}</b> | <em>Rs. {cost}</em> <br />
      <b>{createdAt}</b>
      <a className="secondary-content" href="!#" onClick={handleDelete}>
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
