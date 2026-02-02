function Pagination({ totalUsers, usersPerPage, setCurrentPage }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map(page => (
        <button key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </>
  );
}
  
export default Pagination;
