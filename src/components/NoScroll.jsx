/* eslint-disable react/prop-types */
function NoScroll({ children }) {
  return <div className="!h-screen !overflow-hidden">{children}</div>;
}

export default NoScroll;
