import { Summary } from '../components/Summary';
import { connect } from 'react-redux';
import {
  selectSubtotal,
  selectTipAmount,
  selectTotal
} from '../store/items/Selectors';

const mapStateToProps = (state) => {
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
