function Input({ inputPostal, handleChange, handleSubmit }) {
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <label for="gsearch">Search Post Code: </label>
        <input
          onChange={handleChange}
          placeholder="Postal code"
          value={inputPostal}
          name="postalcode"
        />
      </form>
    </div>
  );
}

export default Input;
