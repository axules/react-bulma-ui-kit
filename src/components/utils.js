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

export function getTextColorClassName(styles) {
  const {
    danger,
    success,
    warning,
    info,
    link,
    primary,
  } = styles;
  return danger && 'has-text-danger'
    || success && 'has-text-success'
    || warning && 'has-text-warning'
    || info && 'has-text-info'
    || link && 'has-text-link'
    || primary && 'has-text-primary'
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

export function getAlignClassName(styles) {
  const {
    right,
    centered,
    left,
  } = styles;

  return left && 'is-left'
    || centered && 'is-centered'
    || right && 'is-right'
    || undefined;
}

export function skeletonClassName(styles) {
  const { skeleton, hasSkeleton } = styles;
  return hasSkeleton && 'has-skeleton'
    || skeleton && 'is-skeleton'
    || undefined;
}