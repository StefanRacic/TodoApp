import React from 'react';

const Table = () => {
  return (
    <div className="container">
      <h2 className="pt-5">Todo's App</h2>
      <a href="">
        <i className="material-icons">add</i>
      </a>
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Finished</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Walk the dog</td>
            <td>true</td>
          </tr>
          <tr>
            <td>Get the kids</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
