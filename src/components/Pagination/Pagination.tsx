import ReactPaginate from 'react-paginate';

import css from './index.module.scss'
import { useActions } from "../../useHooks";

export const Pagination = () => {
 
  const {setPage} = useActions()
  return <>
      <ReactPaginate 
        className={css.root}
        breakLabel="..."
        nextLabel="👉"
        onPageChange={event => setPage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={2}

        previousLabel="👈"
        
      />


  </>
}