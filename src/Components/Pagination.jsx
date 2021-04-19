import React from 'react'

const Pagination = ({pagination, fetchDetails, setPokemon}) => {
  return (
    <div className="pagination">
        <button
          className="load"
          onClick={() => {
            if (pagination.prev === null) return;
            setPokemon([]);
            fetchDetails(pagination.prev);
          }}
        >
          Previous
        </button>
        <button
          className="load"
          onClick={() => {
            setPokemon([]);
            fetchDetails(pagination.next);
          }}
        >
          Next
        </button>
      </div>
  )
}

export default Pagination;