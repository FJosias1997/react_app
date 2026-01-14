import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SetUserName } from "./screens/SetUserName";
import { Home } from "./screens/Home";
import { Detail } from "./screens/Detail";
import { NavigationContainer } from "@react-navigation/native";

export const AppRoutes = () =>{

    const Stack = createNativeStackNavigator();

    return (
    <NavigationContainer>   
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Detail" component={Detail}/>
    <Stack.Screen name="SetUserName" component={SetUserName}/>
    </Stack.Navigator>
    </NavigationContainer>
    );
}