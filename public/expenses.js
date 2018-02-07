import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
  {
    title = '',
    description = '',
    note = '',
    city = '',
    adress = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    title,
    description,
    note,
    city,
    adress,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
