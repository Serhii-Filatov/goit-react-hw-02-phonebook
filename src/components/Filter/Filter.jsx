export const Filter = ({ filter, onSetFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input name="filter" type="text" value={filter} onChange={onSetFilter} />
    </>
  );
};
