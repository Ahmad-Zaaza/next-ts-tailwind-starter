module.exports = {
  nav: ({ opacityValue }) => {
    if (opacityValue) {
      return `rgba(var(--nav-color), ${opacityValue})`;
    }
    return `rgb(var(--nav-color))`;
  },
  body: "var(--bg-color)"
};
