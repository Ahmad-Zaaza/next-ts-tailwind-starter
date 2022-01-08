module.exports = {
  nav: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--nav-color), ${opacityValue})`;
    }
    return `rgb(var(--nav-color))`;
  },
  body: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--bg-color), ${opacityValue})`;
    }
    return `rgb(var(--bg-color))`;
  },
  paper: "var(--paper-color)"
};
