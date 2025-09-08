import {
  memo,
  useMemo,
  useState
} from 'react';
import PropTypes from 'prop-types';

import { useStaticCallback } from '../useStaticCallback';
import { withForwardedRef } from '../withRef';

import TextInput from './TextInput';


function PasswordInput(props) {
  const {
    revealPassword,
    revealPasswordIcon,
    type = 'password',
    rightIcon,
    ...restProps
  } = props;

  const [visible, setVisible] = useState(false);

  const onClickRevealPassword = useStaticCallback(() => {
    setVisible((val) => !val);
  });

  const revealButton = useMemo(() => {
    if (!revealPassword) return undefined;
    return (
      <button type="button" onClick={onClickRevealPassword}>{revealPasswordIcon}</button>
    );
  }, [revealPassword, onClickRevealPassword, revealPasswordIcon]);

  const resultType = type === 'password'
    ? (visible ? 'text' : 'password')
    : type;

  return (
    <TextInput
      type={resultType}
      rightIcon={revealButton || rightIcon}
      {...restProps}
    />
  );
}

PasswordInput.propTypes = {
  revealPassword: PropTypes.bool,
  revealPasswordIcon: PropTypes.node,
  type: PropTypes.string,
  rightIcon: PropTypes.node,
};

export default PasswordInput
  |> memo
  |> withForwardedRef;
