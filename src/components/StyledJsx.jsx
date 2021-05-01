export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p>Styled-jsx</p>
        <button>fight!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px red;
          border-radius: 20px;
          padding: 8px;
        }
      `}</style>
    </>
  );
};
