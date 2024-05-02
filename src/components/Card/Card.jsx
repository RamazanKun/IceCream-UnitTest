

const Card = ({ item, totalCream, setTotalCream }) => {

  let found = totalCream.filter((itemA) => itemA.id == item.id);
  let amount = found.length;

  let handleClick = () => {
    setTotalCream([...totalCream, item]);
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "150px" }}
    >
      <img alt="çeşit" src={item.imagePath} className="img-fluid" />
      <label htmlFor="" className="lead">
        {item.name}
      </label>

      <div className="d-flex gap-2 align-items-center">
        <button
          onClick={() => {
            const clearBasket = totalCream.filter(
              (item1) => item1.name !== item.name
            );
            setTotalCream(clearBasket);
          }}
          className="btn btn-danger"
        >
          Sıfırla
        </button>
        <span className="fs-2"> {amount} </span>
        <button className="btn btn-success" onClick={() => handleClick(item)}>
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
