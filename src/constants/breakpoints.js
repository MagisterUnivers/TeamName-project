const breakpoints = {
  tablet: '768px',
  desktop: '1440px',
};

export const devices = {
  tablet: `(min-width: ${breakpoints.tablet})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  retina: '(-webkit-min-device-pixel-ratio: 2)',
};
