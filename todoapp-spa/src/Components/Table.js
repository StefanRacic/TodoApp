import React from 'react';

const Table = () => {
  return (
    <div className="container">
      <div style={{ paddingTop: '15rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-around'
          }}
        >
          <h2>Todo's</h2>
          <a href="">
            <i className="medium material-icons add-icon">add</i>
          </a>
        </div>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>name</th>
              <th>Done?</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>Walk the dog</th>
              <th>true</th>
              <th>
                <a href="">
                  <i class="material-icons">delete</i>
                </a>
              </th>
            </tr>
            <tr>
              <th>Read book</th>
              <th>false</th>
              <th>
                <a href="">
                  <i class="material-icons">delete</i>
                </a>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
