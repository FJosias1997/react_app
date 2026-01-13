import { SafeAreaView } from 'react-native-safe-area-context';
import { FirstComponent } from './shared/components/FirstComponent';
import { MyButton } from './shared/components/MyButton';
import { Text, Touchable, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  // const [state, setState] = useState('Teste');
  const [hide, setState] = useState(false); // [hide, setState]
  return (
    <SafeAreaView>

      {hide && <Text>Now you see me!</Text>}
      
      {/* {
        hide ? <Text>Showed</Text>
        : <Text>Hidden</Text>
      } */}

      <TouchableOpacity onPress={() => setState(!hide)}>
        <Text>Toogle</Text>
      </TouchableOpacity>

    
    {/* <FirstComponent order={1000}/>

    <MyButton order={2000} onPress={() => setState('Josias!')}>

      <Text>Custom Button Content {state}</Text>
    </MyButton> */}
    </SafeAreaView>
  );
}
