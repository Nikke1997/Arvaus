import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

let counter;

export default function App() {
const [text, setText] = useState('');
const [guess, setGuess] = useState('');


const start = () => {
number = (Math.floor(Math.random() * 101));
setText('Guess a number between 1-100');
counter = 0;
console.log(number);
}



useEffect(() => {
start();

}, []);


const buttonPressed = () => {
  if(number < guess) {
    setText('Your number is too high')
    counter++
  }
  else if(number > guess) {
setText('Your number is too low')
counter++
  }
  else{
Alert.alert(`You guessed number in ${counter} guesses`)
start();
}}






  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <View>
        <TextInput keyboardType='number-pad' style={styles.textt} onChangeText={setGuess}></TextInput>
      </View>
      <View style={styles.input}>
        <Button title="Guess" onPress={buttonPressed}></Button>
      </View>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textt: {
borderColor: 'black',
width: 120,
height: 30,
marginTop: 20,
borderWidth: 1
  },
  input: {
marginTop: 20
  }

});
