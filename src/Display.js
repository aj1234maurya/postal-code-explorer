function Display(props) {
  if (Object.keys(props.dataList).length === 0) {
    return (
      <div className="displayItems2">
        Enter the Postal-Code to get the Information.
      </div>
    );
  }

  const postalcode = props.dataList["post code"];
  const placename = props.dataList.places.map((place, index) => (
    <div>
      <li>Place Name:- {place["place name"]} </li>
    </div>
  ));
  return (
    <div className="displayItems">
      <h1>Post Code :- {postalcode}</h1>
      <h1>Country :-{props.dataList.country}</h1>

      {placename}
    </div>
  );
}

export default Display;
