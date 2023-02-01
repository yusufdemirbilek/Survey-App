import { Pagination } from '@mui/material';
import { useState } from 'react';
import '../style.scss';
function PaginationItem() {
  const [page, setPage] = useState(1);

  return (
    <div className='page'>
    <Pagination
      count={10}
      page={page}
      onChange={(event, value) => {
        setPage(value);
      }}
    />
    </div>
  );
}

export default PaginationItem;