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
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function App() {
  const [plantList, setPlantList] = useState<myPlant[]>([]);

  return (
    <PlantContext.Provider value={{ plantList, setPlantList }}>
      <NavigationContainer>
        <StatusBar style='dark' />
        
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName : any  ;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } 
                
                if (route.name === 'NewPlant') {
                  iconName = focused
                    ? 'add-circle'
                    : 'add-circle-outline';
                }
                
                if (route.name === 'MyPlants') {
                  iconName = focused
                    ? 'leaf'
                    : 'leaf-outline';
                } 

                if (route.name === 'Search') {
                  iconName = focused
                    ? 'search'
                    : 'search-outline';
                } 

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'rgba(44, 151, 185, 1)',
              tabBarInactiveTintColor: '#BFDABE',
              tabBarStyle: { backgroundColor: 'black' },
              tabBarShowLabel: false,
            })}
          >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="MyPlants" component={PlantList} />
          <Tab.Screen name="NewPlant" component={NewPlants} />
          <Tab.Screen name="Search" component={PlantSearch} />
        </Tab.Navigator>
      </NavigationContainer>
    </PlantContext.Provider>
  );
}