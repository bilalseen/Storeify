import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import Profile from "../pages/Profile";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Favourites") {
            iconName = focused ? "favorite" : "favorite";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          // İkonu döndür
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#505050",
        tabBarInactiveTintColor: "#BDBDC7",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
