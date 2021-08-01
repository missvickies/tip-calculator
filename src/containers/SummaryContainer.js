import { Summary } from '../components/Summary';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  //iterative method
  //   let subtotal = 0;
  //   const items = state.items;

  //   for (const item of items) {
  //     subtotal += item.quantity * item.price;
  //   }

  //reduce method
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tipAmount = subtotal * (state.tipPercentage / 100);
  const total = subtotal + tipAmount;

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
