import PropTypes from 'prop-types';
import {
  History,
  Head,
  HeaderCell,
  BodyRow,
  BodyCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <History>
      <Head>
        <tr>
          <HeaderCell>Type</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Currency</HeaderCell>
        </tr>
      </Head>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <BodyRow key={id}>
              <BodyCell>{type}</BodyCell>
              <BodyCell>{amount}</BodyCell>
              <BodyCell>{currency}</BodyCell>
            </BodyRow>
          );
        })}
      </tbody>
    </History>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
