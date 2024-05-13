import { StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import { HomeScreen } from '../screens/Home';
import { ListaPersonajes } from '../screens/ListaPersonajes';
import { DetalleScreen} from '../screens/Detalle';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }
            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;
            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen 
        name="ListaPersonajes" 
        component={ListaPersonajes} 
        options={{
          tabBarLabel: 'Personajes',
          tabBarIcon: () => {
            return <FontAwesome6 name="users-line" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen 
        name="Detalle" 
        component={DetalleScreen}
        options={{
          tabBarLabel: 'Detalle',
          tabBarIcon: () => {
            return <FontAwesome5 name="user-secret" size={24} color="black" />;
          },
        }} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  navegador: {
    backgroundColor: '#0f968c'
  },
});