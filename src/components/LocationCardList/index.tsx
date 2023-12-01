import { Pagination } from "antd";
import { ILocationCardList } from "../../types/Type";
import LocationCard from "../LocationCard";
import {useState} from "react"
import type { PaginationProps } from 'antd';
import Paginate from "../Paginate";

const LocationCardList = ({ allLocations }: ILocationCardList) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedLocations = allLocations?.slice(startIndex, endIndex);

  return (
    <>
      
     
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center  overflow-auto">
          {displayedLocations?.map((location) => (
            <LocationCard location={location} key={location.id} />
          ))}
        </div>
       
          <Paginate totalItems={allLocations?.length || 0}
          itemsPerPage={pageSize}
          onPageChange={handlePageChange}
          />
        
     
    </>
  );
};

export default LocationCardList;
