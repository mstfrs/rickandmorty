import React, { useEffect } from "react";

import { ICharacters } from "../../types/Type";
import { CardAvatar } from "../CardAvatar";
import Paginate from "../Paginate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getCharacters, setOtherCharacters } from "../../redux/characterSlice";
import LoadingPage from "../LoadingPage/CardLoading";

const CharacterDetailCard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const filterdCharacters = useSelector(
    (state: RootState) => state.characters.filteredCharactersByLocation
  );
  const selected = useSelector(
    (state: RootState) => state.characters.selectedCharacter
  );
  const others = filterdCharacters?.filter(
    (character: ICharacters) => character.id !== selected.id
  );
  const otherCharacters = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(setOtherCharacters(others));
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedOthers = otherCharacters?.otherCharacters.slice(
    startIndex,
    endIndex
  );

  return (
    <>
      {otherCharacters.loading && <LoadingPage />}
      {otherCharacters.error && otherCharacters.error}
      {!otherCharacters.loading && (
        <div className="antialiased text-gray-900 ">
          <div className="  p-4 flex flex-col md:flex-row md:items-start items-center justify-between">
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/3 lg:w-1/4 md:w-1/3 sm:w-2/3 place-items-center">
              {/* <div className="h-20 bg-cover bg-center bg-slate-500" ></div> */}
              <img
                className="h-full w-full object-contain object-end"
                src={selected.image}
                alt=""
              />
              <div className="p-6">
                <div className="flex items-baseline justify-between">
                  <span
                    className={`${
                      selected.status === "Alive"
                        ? "bg-teal-300"
                        : selected.status === "Dead"
                        ? "bg-red-500 text-white"
                        : "bg-gray-300"
                    } inline-block  text-teal-800 py-1 px-4 text-md rounded-full uppercase font-semibold tracking-wide`}
                  >
                    {selected.status}
                  </span>
                  <div className="ml-2 text-gray-600 text-md uppercase font-semibold tracking-wide">
                    {selected.species} &bull; {selected.gender}
                  </div>
                </div>
                <h4 className="mt-2 font-semibold text-2xl leading-tight truncate">
                  {selected.name}
                </h4>

                <div className="mt-1">
                  <span>{selected.location.name}</span>
                  <span className="text-gray-600 text-sm"></span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="text-teal-600 font-semibold">
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                  </span>
                  <span className="ml-2 text-gray-600 text-sm">
                    {selected.type}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-col h-[60vh]">
              <div>
                <h3 className="text-2xl font-semibold text-center mb-4">
                  Other Characters
                </h3>
                <Paginate
                totalItems={otherCharacters?.otherCharacters.length || 0}
                itemsPerPage={4}
                onPageChange={handlePageChange}
              />
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
                  {displayedOthers.map((item, index) => (
                    <CardAvatar otherCharacter={item} key={index} />
                  ))}
                </div>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterDetailCard;
