import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/homepage';
import NewPlants from './pages/newplant';
import PlantList from './pages/myplants';
import { myPlant } from './classes/myplants';
import PlantContext from './context/plantscontext';
import PlantSearch from './pages/searchscreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [plantList, setPlantList] = useState<myPlant[]>([]);

  return (
    <PlantContext.Provider value={{ plantList, setPlantList }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="MyPlants" component={PlantList} />
          <Tab.Screen name="NewPlant" component={NewPlants} />
          <Tab.Screen name="Search" component={PlantSearch} />
        </Tab.Navigator>
      </NavigationContainer>
    </PlantContext.Provider>
  );
}