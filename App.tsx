import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import bgImage from './assets/image/Pianobg90.png';
import Sound from 'react-native-sound';

//This are the all key notes in the keyboard
const allKeySound: string[] = [
  'e6',
  'd6',
  'c6',
  'b6',
  'a6',
  'g5',
  'f5',
  'e5',
  'd5',
  'c5',
  'b5',
  'a5',
  'g4',
  'f4',
  'e4',
  'd4',
  'c4',
  'b4',
  'a4',
  'g3',
  'f3',
  'eb6',
  'db6',
  'bb6',
  'ab6',
  'gb5',
  'eb5',
  'db5',
  'bb5',
  'ab5',
  'gb4',
  'eb4',
  'db4',
  'bb4',
  'ab4',
  'gb3',
];

interface KeySound {
  [key: string]: Sound;
}

//This function is to load all keys note sound to a hashmap so we can access any key
let keySound: KeySound = {};
allKeySound.forEach(item => {
  keySound[item] = new Sound(item + '.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.error('Failed to load A sound:', error);
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
const whiteKeyNotes = [
  'e6',
  'd6',
  'c6',
  'b6',
  'a6',
  'g5',
  'f5',
  'e5',
  'd5',
  'c5',
  'b5',
  'a5',
  'g4',
  'f4',
  'e4',
  'd4',
  'c4',
  'b4',
  'a4',
  'g3',
  'f3',
];

const {width, height} = Dimensions.get('window');

function generateRandomKey(length: number = 16): string {
  const characters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength: number = characters.length;
  let result: string = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const App = () => {
  return (
    <View>
      <ImageBackground style={styles.image} source={bgImage}>
        <View style={styles.PianoKeyContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* This below component to render white keys */}
              {whiteKeyNotes.map(item => (
                <TouchableOpacity key={generateRandomKey(5)}>
                  <View
                    onTouchStart={() => onPianoKeyPress(item)}
                    style={{
                      backgroundColor: 'white',
                      height: height * 0.0339,
                      width: 125,
                      borderTopWidth: 2,
                      borderLeftWidth: 1,
                      borderBottomWidth: 2,
                    }}></View>
                </TouchableOpacity>
              ))}
              {/* This below component to render black keys, i couldn't loop this component as white key as it changes it's position for consecutive  top="x%" */}
              <View
                onTouchStart={() => onPianoKeyPress('eb6')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '3%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('db6')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '8%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('bb6')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '17.5%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('ab6')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '22.3%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('gb5')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '27%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('eb5')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '36.5%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('db5')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '41.4%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('bb5')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '51%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('ab5')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '55.5%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('gb4')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '60.5%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('eb4')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '70%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('db4')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '74.7%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('bb4')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '84.3%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('ab4')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '89%',
                  right: '18%',
                }}></View>

              <View
                onTouchStart={() => onPianoKeyPress('gb3')}
                style={{
                  backgroundColor: 'black',
                  height: 17,
                  width: 60,
                  zIndex: 2,
                  position: 'absolute',
                  top: '94%',
                  right: '18%',
                }}></View>
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
});

export default App;
