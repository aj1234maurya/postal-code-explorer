import countries from "./Country";

function Input({
  inputPostal,
  handleChange,
  handleSubmit,
  selectedCountry,
  handleCountryChange,
}) {
  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <div>
          <label for="gsearch">Enter Post Code: </label>
          <input
            onChange={handleChange}
            placeholder="Postal code"
            value={inputPostal}
            name="postalcode"
          />
        </div>
        <div className="selectDiv">
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default Input;
