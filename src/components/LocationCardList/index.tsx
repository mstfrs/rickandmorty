import LocationCard from "../LocationCard";
import { useEffect, useState } from "react";
import Paginate from "../Paginate";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import LoadingPage from "../LoadingPage/CardLoading";
import { getLocations } from "../../redux/locationSlice";
import { getCharacters } from "../../redux/characterSlice";

const LocationCardList:React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const dispatch: AppDispatch = useDispatch();
  const locations = useSelector((state: RootState) => state.locations);

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getLocations());
  }, [dispatch]);

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
      {locations.loading &&  <LoadingPage />}
      {locations.error && locations.error}
      {!locations.loading && 
      <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center  overflow-auto py-6  ">
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
      }
    </>
  );
};

export default LocationCardList;
