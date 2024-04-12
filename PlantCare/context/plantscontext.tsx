import React from 'react';
import { myPlant } from '../classes/myplants';

const PlantContext = React.createContext<{
    plantList: myPlant[] ;
    setPlantList: React.Dispatch<React.SetStateAction<myPlant[] >>;
  }>({
    plantList: [],
    setPlantList: () => {},
  });

export default PlantContext;