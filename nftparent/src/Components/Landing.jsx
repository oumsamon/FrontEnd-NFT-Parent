import React from 'react';

const Landing = () => {
    return (
        <div>
             <div className="searchBar">
             <form onSubmit>
          <label For="cityName">
            <h4>Search by Diaper</h4>
          </label>
          <input type="text" id="cityName" onSubmit onChange />

          <input onSubmit type="submit" value="Search by Diaper" />
        </form>
             </div>
        </div>
    );
};

export default Landing;