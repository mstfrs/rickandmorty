import { useState, useEffect } from "react";
import {   ILocations } from "../../types/Type";
import { rickAndMortyService } from "../../services/rickandmorty.service";
import LocationCardList from "../../components/LocationCardList";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import {  loadAllLocations } from "../../redux/characterSlice";
import Header from "../../components/Header";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();

  const [allLocations, setAllLocations] = useState<ILocations[]>([]);




  const getAllLocations = async () => {
    for (let i = 1; i < 7; i++) {
      const data = await rickAndMortyService.getAllLocations(i);
      setAllLocations((prev) => {
        return [...prev, ...data.results];
      });
    }
    dispatch(loadAllLocations(allLocations))
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <>
  <Header/>
  <LocationCardList allLocations={allLocations} />
  </>);
};

export default HomePage;
