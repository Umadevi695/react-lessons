import Fruit from "./Fruit";

function App6() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <Fruit name="Apple" />
      <Fruit name="Mango" />
      <Fruit name="Orange" />
      <Fruit name="Banana" />
    </div>
  );
}

export default App6;
