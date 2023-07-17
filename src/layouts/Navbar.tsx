import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-gray-800 text-white p-4">
      {/* Logo */}
      <div className="flex items-center">
        
        <span className="font-bold text-xl">My App</span>
      </div>

      {/* Searchbar and Filter */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-l-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-r-lg">
          Search
        </button>

        <select
          className="ml-4 py-1 px-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="filter1">Filter 1</option>
          <option value="filter2">Filter 2</option>
        </select>
      </div>

      {/* User Logo */}
      <div>
        user
      </div>
    </nav>
  );
};

export default Navbar;
