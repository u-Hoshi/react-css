export const InLineStyle = () => {
  const containerStyle = {
    border: "solid",
    borderRadius: "20px"
  };

  const titleStyle = {};

  const buttonStyle = {};

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>Inline Styles</p>
      <button style={buttonStyle}>fight!</button>
    </div>
  );
};
