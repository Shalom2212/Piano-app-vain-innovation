import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import bgImage from './assets/image/Pianobg.png';
import Sound from 'react-native-sound';

//This are the all key notes in the keyboard
const allKeySound: string[] = [
  'e6','d6','c6','b6','a6','g5','f5','e5','d5','c5','b5','a5','g4','f4','e4','d4','c4','b4','a4','g3','f3','eb6','db6','bb6','ab6','gb5','eb5','db5','bb5','ab5',  'gb4','eb4','db4','bb4','ab4','gb3',
];

const whiteKeyNotes = [
  'f3','g3','a4','b4','c4','d4','e4','f4','g4','a5','b5','c5','d5','e5','f5','g5','a6','b6','c6','d6','e6',
];

interface KeySound {
  [key: string]: Sound;
}

//This function is to load all keys note sound to a hashmap so we can access any key
let keySound: KeySound = {};
allKeySound.forEach(item => {
  keySound[item] = new Sound(item + '.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.error('Failed to load sound:' + item, error);
    }
  });
});

//Use to play sound as soon as pressed
const onPianoKeyPress = (keyNote: string) => {
  if (keySound[keyNote].isPlaying()) {
    keySound[keyNote].stop();
  }
  keySound[keyNote].play();
};



const {width, height} = Dimensions.get('window');

const generateRandomKey = (length: number = 16): string => {
  const characters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength: number = characters.length;
  let result: string = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const App = () => {
  return (
    <View>
      <ImageBackground style={styles.image} source={bgImage}>
        <View style={styles.PianoKeyContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              left: '7.2%',
              top: '63%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* This below component to render white keys */}
              {whiteKeyNotes.map(item => (
                
                  <TouchableOpacity key={generateRandomKey(5)} onPressIn={() => onPianoKeyPress(item)}>
                  <View
                    
                    style={styles.pianoWhiteKey}></View>

                </TouchableOpacity>
              ))}
              {/* This below component to render black keys, i tried loop this component as same as white keys but it changes it's position for consecutive  top="x%" style */}
              <View
                onTouchStart={() => onPianoKeyPress('eb6')}
                style={[styles.pianoBlackKey, {right: '15%'}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('db6')}
                style={[styles.pianoBlackKey, {right: '18.3%'}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('bb6')}
                style={[styles.pianoBlackKey, {right: `25%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('ab6')}
                style={[styles.pianoBlackKey, {right: `28.5%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('gb5')}
                style={[styles.pianoBlackKey, {right: `31.7%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('eb5')}
                style={[styles.pianoBlackKey, {right: `38.5%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('db5')}
                style={[styles.pianoBlackKey, {right: `42%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('bb5')}
                style={[styles.pianoBlackKey, {right: `48.7%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('ab5')}
                style={[styles.pianoBlackKey, {right: `52.2%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('gb4')}
                style={[styles.pianoBlackKey, {right: `55.5%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('eb4')}
                style={[styles.pianoBlackKey, {right: `62.3%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('db4')}
                style={[styles.pianoBlackKey, {right: `65.7%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('bb4')}
                style={[styles.pianoBlackKey, {right: `72.5%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('ab4')}
                style={[styles.pianoBlackKey, {right: `76%`}]}></View>

              <View
                onTouchStart={() => onPianoKeyPress('gb3')}
                style={[styles.pianoBlackKey, {right: `79.5%`}]}></View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

//This is for styling of components
const styles = StyleSheet.create({
  PianoKeyContainer: {
    flex: 1,
    paddingTop: 32,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  pianoBlackKey: {
    backgroundColor: 'black',
    height: '45%',
    width: '2.3%',
    zIndex: 2,
    position: 'absolute',
    top: '0%',
  },
  pianoWhiteKey: {
    backgroundColor: 'white',
    height: height * 0.35,
    width: width * 0.0339,
    borderTopWidth: 1,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    left: '50%',
  },
});

export default App;
