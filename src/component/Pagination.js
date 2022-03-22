import React from "react";

//페이지당 게시물과 총 게시물을 가져온다. 
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []; //페이지 번호
  
  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <ul className="pagination">
    //   {pageNumber.map((pageNum) => (
    //     <li
    //       key={pageNum}
    //       className="pagination_item"
    //       onClick={() => paginate(pageNum)}
    //     >
    //       {pageNum}
    //     </li>
    //   ))}
    // </ul>
    <nav>
        <ul>
            {pageNumbers.map(number => (
                <li key={number}>
                    <a onClick={() => paginate(number)} href="!#">
                        {number}
                    </a>
                </li>
            ))}

        </ul>
    </nav>
  );
};

export default Pagination;
