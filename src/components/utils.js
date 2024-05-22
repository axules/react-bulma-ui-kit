export function getStyleClassName(styles) {
  const {
    danger,
    success,
    warning,
    info,
    link,
    primary,
  } = styles;
  return danger && 'is-danger'
    || success && 'is-success'
    || warning && 'is-warning'
    || info && 'is-info'
    || link && 'is-link'
    || primary && 'is-primary'
    || undefined;
}

export function getBrightnessClassName(styles) {
  const {
    white,
    light,
    dark,
    black,
    text,
    ghost,
  } = styles;

  return white && 'is-white'
  || light && 'is-light'
  || dark && 'is-dark'
  || black && 'is-black'
  || text && 'is-text'
  || ghost && 'is-ghost'
  || undefined;
}

export function getSizeClassName(styles) {
  const {
    small,
    medium,
    large,
  } = styles;

  return small && 'is-small'
    || medium && 'is-medium'
    || large && 'is-large'
    || undefined;
}