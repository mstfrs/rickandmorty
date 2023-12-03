import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CharacterCard } from "../CharacterCard";
import { ICharacters, } from "../../types/Type";
import { RootState, AppDispatch } from "../../redux/store";
import Paginate from "../Paginate";
import LoadingPage from "../LoadingPage/CardLoading";
import Button from "../Button";
import {
  getCharacters, loadFilteredCharacters,
  } from "../../redux/characterSlice";

const CharacterList = () => {
  const dispatch: AppDispatch = useDispatch();  
  const [currentPage, setCurrentPage] = useState(1);
  const characters = useSelector((state: RootState) => state.characters);
  const selectedLocation = useSelector(
    (state: RootState) => state.locations.selectedLocation
  );
  const filtered = characters.allCharacters?.filter(
    (character: ICharacters) => character.location.name === selectedLocation
  );

useEffect(() => {
  dispatch(getCharacters());
  dispatch(loadFilteredCharacters(filtered))
}, [dispatch]);


  const pageSize = 6;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayeddata = filtered?.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col justify-between h-[90%]">
      <div className="flex gap-4 my-4">
        <Button text="Alive" />
        <Button text="Dead" />
        <Button text="Unknown" />
      </div>
      {filtered.length===0&& <LoadingPage />}
      {/* {characters.loading && <LoadingPage />} */}
      {characters.error && characters.error}
      <div
        className={` grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center `}
      >
        {displayeddata?.map((character,index) => (
          <CharacterCard character={character} key={index} />
        ))}
      </div>

      <Paginate
        totalItems={filtered?.length || 0}
        itemsPerPage={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CharacterList;
