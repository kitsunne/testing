import "./list.css";
const List = (props: {items?: Array <string>}) => {
  const { items = [] } = props;
  if (!items.length) return null;

  return (
    <div>
      <ul>
        {items.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
