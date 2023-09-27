const Overlay = ({ z_index }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0
      bottom-0 ${z_index} bg-black/70`}
    />
  );
};

Overlay.defaultProps = {
  z_index: "z-10",
};

export default Overlay;
