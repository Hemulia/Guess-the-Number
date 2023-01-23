import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useState } from 'react';

let randomNum = Math.floor(Math.random() * 100) + 1

export default function App() {
  const [userNumber, setUserNumber] = useState();
	const [numOfRounds, setNumOfRounds] = useState(0);
  const [text, setText] = useState("Guess a number between 1-100")

  const guessNum = () => {
    if (userNumber > randomNum) {
      setText("Your guess is too high")
      setNumOfRounds((numOfRounds) => numOfRounds + 1)
    } else if (userNumber< randomNum) {
      setText("Your guess is too low")
      setNumOfRounds((numOfRounds) => numOfRounds + 1)
    } else if (userNumber == randomNum) {
      Alert.alert("You guessed the number in " + (numOfRounds+1)+ " guesses!")
      randomNum = Math.floor(Math.random() * 100) + 1
      setNumOfRounds(0)
      setText("Guess a number between 1-100")
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput 
        placeholder='0'
        keyboardType = 'number-pad'
        value ={userNumber}
        onChange={e => setUserNumber(Number.parseInt(e.nativeEvent.text))}
        />
      <Button title="Make a guess" onPress={guessNum}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
