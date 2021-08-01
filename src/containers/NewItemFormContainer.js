import { connect } from 'react-redux';
import { addedNewItem } from '../store/items/actions';
import { NewItemForm } from '../components/NewItemForm';

const mapDispatchToProps = {
  onSubmit: (name, price) => addedNewItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
