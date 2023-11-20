function Display(props) {
  const clearData = () => {
    props.clearData();
  };

  if (props.notFound) {
    return <div className="displayItems2">Data not found on server</div>;
  }

  if (Object.keys(props.dataList).length === 0) {
    return (
      <div className="displayItems2">Enter Zip-code and Select Country</div>
    );
  }

  const postalcode = props.dataList["post code"];
  const placename = props.dataList.places.map((place, index) => (
    <div>
      <li>{place["place name"]} </li>
    </div>
  ));
  return (
    <div className="displayItems">
      {props.isLoading ? (
        <p>Loading data...</p>
      ) : (
        <div className="flexItem">
          <h5>Post Code :- {postalcode}</h5>
          <h5>Country :-{props.dataList.country}</h5>
          <h5>Place Names :- </h5>
          {placename}
          <button onClick={clearData}>Clear</button>
        </div>
      )}
    </div>
  );
}

export default Display;
