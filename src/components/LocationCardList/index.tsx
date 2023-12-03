import { Pagination } from "antd";
import { ILocationCardList } from "../../types/Type";
import LocationCard from "../LocationCard";
import { useEffect, useState } from "react";
import type { PaginationProps } from "antd";
import Paginate from "../Paginate";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import LoadingPage from "../LoadingPage/CardLoading";
import { getLocations } from "../../redux/locationSlice";

const LocationCardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const dispatch: AppDispatch = useDispatch();
  const locations = useSelector((state: RootState) => state.locations);

  useEffect(() => {
    dispatch(getLocations());
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedLocations = locations.allLocations?.slice(
    startIndex,
    endIndex
  );

  return (
    <>
      {locations.loading && <LoadingPage />}
      {locations.error && locations.error}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center  overflow-auto">
        {displayedLocations.map((location) => (
          <LocationCard location={location} key={location.id} />
        ))}
      </div>

      <Paginate
        totalItems={locations.allLocations?.length || 0}
        itemsPerPage={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default LocationCardList;
