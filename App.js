import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MyTabs from "./src/navigator/Navigator";


export default function App () {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </PaperProvider>
  )
}



