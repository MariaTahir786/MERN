import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const People = () => {
  const [people, setPeople] = useState([]); // State variable to store fetched people data

  // useEffect hook to fetch data from the API when the component mounts
  useEffect(() => {
    // Make a GET request to the SWAPI API to fetch people data
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        // Update the state with the fetched data
        setPeople(res.data.results);
      })
      .catch(err => console.log(err)); // Log any errors to the console
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1 style={{}}>People</h1>
      {/* Render a table to display the fetched people data */}
      <table className="table-success">
        <thead>
          <tr className="table-success">
            <th>Name</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the 'people' array and render a table row for each person */}
          {people.map((person, i) => {
            return (
              <tr key={i}>
                <td>{person.name}</td>
                <td>{person.height}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default People;
