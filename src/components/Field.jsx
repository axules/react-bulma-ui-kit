import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import HelpText from './HelpText';
import Label from './Label';


function Field(props) {
  const {
    className,
    isHorizontal,
    children,
    label,
    isGrouped,
    isGroupedMultiline,
    hasAddons,
    errorText,
    helpText,
    required,
    ...restProps
  } = props;

  const classes = [
    isGrouped && 'is-grouped',
    isGroupedMultiline && 'is-grouped is-grouped-multiline',
    isHorizontal && 'is-horizontal',
    hasAddons && 'has-addons',
  ];

  const errorHelp = errorText && <HelpText danger>{errorText}</HelpText>;

  const help = helpText && <HelpText>{helpText}</HelpText>;

  return (
    <div {...restProps} className={classNames('field', className, ...classes)}>
      {label && (
        isHorizontal
          ? <div className="field-label is-normal"><Label>{label}</Label></div>
          : <Label required={required}>{label}</Label>
      )}

      {isHorizontal ? <div className="field-body">{children}</div> : children}

      {help}
      {errorHelp}
    </div>
  );
}

Field.propTypes = {
  label: PropTypes.node,
  errorText: PropTypes.node,
  helpText: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  isHorizontal: PropTypes.bool,
  isGrouped: PropTypes.bool,
  isGroupedMultiline: PropTypes.bool,
  hasAddons: PropTypes.bool,
  required: PropTypes.bool,
};

export default Field
  |> memo
  |> withForwardedRef;
