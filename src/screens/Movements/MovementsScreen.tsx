import React, { useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { Text, Button, TabView, SceneMap } from "../../index";
import { styles } from "./movements.style";
import useTheme from "../../hooks/useTheme";
import TabBar from "../../components/TabBar/TabBar";

// Define los componentes para cada escena
const AllTab = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Todos los movimientos</Text>
  </View>
);

// Define la función renderScene
function MovementsScreen() {
  const layout = useWindowDimensions();
  const { colors } = useTheme();

  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: "all", title: "Todos" }]);

  const renderScene = SceneMap({
    all: AllTab, 
  });

  return (
    <View style={[styles.container, { backgroundColor: colors.surface_primary }]}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={(props) => <TabBar {...props} />}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

export default MovementsScreen;
