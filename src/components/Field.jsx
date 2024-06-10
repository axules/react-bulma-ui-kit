import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withForwardedRef } from '../withRef';

import HelpText from './HelpText';
import Label from './Label';


function Field(props) {
  const {
    as: HtmlTag = 'div',
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

  const errorHelp = errorText && <HelpText danger>{errorText}</HelpText>;
  const help = helpText && <HelpText>{helpText}</HelpText>;
  const classNamesValue = classNames(
    'field',
    isGrouped && 'is-grouped',
    isGroupedMultiline && 'is-grouped is-grouped-multiline',
    isHorizontal && 'is-horizontal',
    hasAddons && 'has-addons',
    className,
  );

  return (
    <HtmlTag {...restProps} className={classNamesValue}>
      {label && (
        isHorizontal
          ? <div className="field-label is-normal"><Label required={required}>{label}</Label></div>
          : <Label required={required}>{label}</Label>
      )}

      {isHorizontal ? <div className="field-body">{children}</div> : children}

      {help}
      {errorHelp}
    </HtmlTag>
  );
}

Field.propTypes = {
  as: PropTypes.any,
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
