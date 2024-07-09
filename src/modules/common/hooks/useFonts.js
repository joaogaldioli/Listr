import * as Font from "expo-font";
 
export default useFonts = async () =>
  await Font.loadAsync({
    'Satoshi-Black': require('../../../../assets/fonts/Satoshi-Black.ttf'),
});