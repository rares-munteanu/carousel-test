/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useRef} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

function App(): JSX.Element {
  const entries = [
    {
      title: (
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: Colors.black,
            textAlign: 'center',
          }}>
          Rares is asking you to be their , what an honor!
        </Text>
      ),
    },
    {
      title: (
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: Colors.black,
            textAlign: 'center',
          }}>
          Rares is asking you to be their , what an honor!
        </Text>
      ),
    },
    {
      title: (
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            color: Colors.black,
            textAlign: 'center',
          }}>
          Rares is asking you to be their , what an honor!
        </Text>
      ),
    },
  ];
  const isDarkMode = useColorScheme() === 'dark';
  const [visible, setVisible] = React.useState(false);
  const {width} = useWindowDimensions();
  const carouselRef = useRef<ICarouselInstance>(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onCloseModal = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={backgroundStyle}>
        <Button
          onPress={() => {
            setVisible(old => !old);
          }}
          title="Open Modal"
        />
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Modal
          isVisible={!!visible}
          onBackdropPress={onCloseModal}
          onSwipeComplete={onCloseModal}
          onBackButtonPress={onCloseModal}
          // swipeDirection='down'
          useNativeDriver={false}
          propagateSwipe={true}
          scrollHorizontal={true}
          style={modalContainer}>
          <GestureHandlerRootView style={{flex: 1}}>
            <Carousel
              ref={carouselRef}
              loop={false}
              width={width}
              onSnapToItem={() => {
                console.log('Next item');
              }}
              style={carouselContainer}
              withAnimation={{
                type: 'spring',
                config: {
                  damping: 13,
                },
              }}
              data={entries}
              renderItem={({item}) => (
                <View style={carouselContainer}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingBottom: 15,
                      marginHorizontal: 40,
                      marginBottom: 0,
                    }}>
                    <View style={{flexShrink: 1}}>{item.title}</View>
                  </View>
                </View>
              )}
            />
          </GestureHandlerRootView>
        </Modal>
        {/* // This is the code that works = below */}
        {/* <Modal
          isVisible={!!visible}
          onBackdropPress={onCloseModal}
          onSwipeComplete={onCloseModal}
          onBackButtonPress={onCloseModal}
          // swipeDirection='down'
          useNativeDriver={false}
          propagateSwipe={true}
          scrollHorizontal={true}
          style={modalContainer}>
          <GestureHandlerRootView style={{flex: 1}}>
            <ScrollView horizontal={true} style={{flex: 1}}>
              {entries.map((item, index) => (
                <View style={carouselContainer} key={index}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingBottom: 15,
                      marginHorizontal: 40,
                      marginBottom: 0,
                    }}>
                    <View style={{flexShrink: 1}}>{item.title}</View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </GestureHandlerRootView>
        </Modal> */}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const {modalContainer, carouselContainer} = StyleSheet.create({
  modalContainer: {
    marginTop: 100,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    height: 500,
    flex: 1 / 2,
  },

  carouselContainer: {
    flex: 1,
    width: '100%',
  },
});

export default App;
