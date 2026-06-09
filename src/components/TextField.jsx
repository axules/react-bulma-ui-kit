import {
  memo,
  useId
} from 'react';
import PropTypes from 'prop-types';

import { withForwardedRef } from '../withRef';

import Field from './Field';
import TextInput from './TextInput';


function TextField(props) {
  const {
    // --- props for field
    as,
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
    forwardedRef,
    // --- props for text field
    id,
    inputAs,
    leftIcon,
    rightIcon,

    skeleton,

    danger,
    success,
    warning,
    info,
    link,
    primary,

    small,
    medium,
    large,

    autoCompleteOff,
    autoComplete,
    asControl,
    isExpanded,
    loading,
    ...restProps
  } = props;

  const domId = useId();

  const inputProps = {
    id: id || domId,
    as: inputAs,
    forwardedRef,
    className,
    leftIcon,
    rightIcon,

    skeleton,

    danger,
    success,
    warning,
    info,
    link,
    primary,

    small,
    medium,
    large,

    autoCompleteOff,
    autoComplete,
    asControl,
    isExpanded,
    loading,
  };

  const fieldProps = {
    as,
    className,
    isHorizontal,
    children,
    label,
    labelFor: inputProps.id,
    isGrouped,
    isGroupedMultiline,
    hasAddons,
    errorText,
    helpText,
    required,
    forwardedRef,
  };

  return (
    <Field {...fieldProps}>
      <TextInput {...inputProps} {...restProps} />
    </Field>
  );
}

TextField.propTypes = {
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
  forwardedRef: PropTypes.any,
  // ----------- INPUT PROPS
  id: PropTypes.string,
  inputAs: PropTypes.any,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,

  skeleton: PropTypes.bool,

  asControl: PropTypes.bool,
  isExpanded: PropTypes.bool,

  primary: PropTypes.bool,
  link: PropTypes.bool,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  danger: PropTypes.bool,

  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,

  autoComplete: PropTypes.any,
  autoCompleteOff: PropTypes.bool,
  loading: PropTypes.bool,
};

export default TextField
  |> memo
  |> withForwardedRef;
