import { Pagination } from "antd";
import {useState} from "react"
import {  PaginationComponentProps } from "../../types/Type";
import type { PaginationProps } from 'antd';


const Paginate:React.FC<PaginationComponentProps> = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page:any) => {
    setCurrentPage(page);    
    onPageChange(page);
  };
  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + pageSize;
  // const displayeddata = data?.slice(startIndex, endIndex);
  const showTotal: PaginationProps['showTotal'] = (total) => `Total ${total} items`;
  return (
    <>
    <div className="flex justify-center my-6 text-lg"> 
   <Pagination
      current={currentPage}
      total={totalItems}
      pageSize={itemsPerPage}
      onChange={handlePageChange}
      showTotal={showTotal}
      className="text-lg"
    />
        </div>
    </>
   
  )
}

export default Paginate