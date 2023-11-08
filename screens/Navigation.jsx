import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen,Home,AuthTopTab } from '../screens/index';
import {Ionicons} from '@expo/vector-icons';
import TopTab from "./TopTab";

const Tab = createBottomTabNavigator();
const tabBarStyle = {
  padding: 5,
  borderRadius:25,
  height: 55,
  positon: "center",
  bottom: 10,
  left: 0,
  right: 0,
  marginHorizontal:10,
};
const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName="AuthTopTab"
    activeColor="#EB6A58"
    tabBarHideKeyBoard={true}
    headerShown={false}
    inactiveColor="#3e2465"
    barStyle={{paddingBottom:35,
     
    }}
    >
     <Tab.Screen name="Home" component={Home}
     options=
     {{tabBarStyle:tabBarStyle,
    tabBarShowLabel:false,
    headerShown:false,
    tabBarIcon:({focused})=>(
        <Ionicons
        name={focused?"grid":"grid-outline"} 
        color={focused?"red":"gray"}
        size={30}

        />
    )
    }
    }
     />
     <Tab.Screen name="ChatScreen" component={ChatScreen}  options=
     {{tabBarStyle:tabBarStyle,
    tabBarShowLabel:false,
    // headerShown:false,
    tabBarIcon:({focused})=>(
        <Ionicons
        name={focused?"chatbubble-ellipses":"chatbubble-ellipses-outline"}
        color={focused?"red":"gray"}
        size={30}

        />
    )
    }
    }/>
     <Tab.Screen  name="AuthTopTab" component={AuthTopTab} options=
     {{tabBarStyle:tabBarStyle,
    tabBarShowLabel:false,
    headerShown:false,
    // tabBarVisible: false,
    tabBarIcon:({focused})=>(
        <Ionicons
        name={focused?"location":"location-outline"}
        color={focused?"red":"gray"}
        size={30}

        />
    )
    }
    }/>
     <Tab.Screen  name="TopTab" component={TopTab} options=
     {{tabBarStyle:tabBarStyle,
    tabBarShowLabel:false,
    headerShown:false,
    tabBarIcon:({focused})=>(
        <Ionicons
        name={focused?"person":"person-outline"}
        color={focused?"red":"gray"}
        size={30}

        />
    )
    }
    }/>
    </Tab.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
