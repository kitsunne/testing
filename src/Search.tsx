type Props = {
  value:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>,
    children: React.ReactNode,
    placeholder?:string,

}
const Search = ({value,onChange,children=[],placeholder="...search"}:Props) => {


  return (
    <label>
      {children}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Search;
