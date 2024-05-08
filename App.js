import { NavigationContainer } from '@react-navigation/native';
import MyTabs from "./src/navigator/Navigator";


function App () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}


export default function Main() {
  return (
    <App />
  )
}



