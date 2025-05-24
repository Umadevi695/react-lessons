function Fruit({ name }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        margin: "10px",
        width: "120px",
        textAlign: "center",
      }}
    >
      <h3>{name}</h3>
    </div>
  );
}
export default Fruit;
