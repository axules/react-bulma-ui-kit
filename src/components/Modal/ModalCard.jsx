import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


function ModalCard(props) {
  const { children, className } = props;

  return (
    <div className={classNames('modal-card', className)}>
      {children}
    </div>
  );
}

ModalCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalCard
  |> memo;
