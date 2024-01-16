import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from '../assets/values/Colors';

var isDarkTheme = '';
const Goalsw = ({ navigation, route }) => {
  const theme = useColorScheme();

  if (theme !== 'light') {
    isDarkTheme = '#FFFFFF';
    console.log('gf', isDarkTheme);
  }
  if (theme === 'light') {
    isDarkTheme = Colors.primary1;
    console.log('gf', isDarkTheme);
  }
  const [pressed, setPressed] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          borderRadius: 10,
          marginTop: 30,
          marginHorizontal: 20,
          borderColor: Colors.primary1,
        }}>
        <TouchableOpacity
          style={[
            {
              borderRadius: 7,
              width: '36%',
              height: '100%',
            },
            true
              ? { backgroundColor: Colors.primary2 }
              : { backgroundColor: '#007bff' },
          ]}
          onPress={() => {
            setPressed(false);
            navigation.navigate('Goals');
          }}>
          <Text style={[styles.tabText, true ? {} : { color: Colors.white }]}>
            Day
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            { width: '32%', borderRadius: 7, height: '100%' },
            false
              ? { backgroundColor: Colors.primary2 }
              : { backgroundColor: '#007bff' },
          ]}
          onPress={() => {
            setPressed(true);
          }}>
          <Text style={[styles.tabText, false ? {} : { color: Colors.white }]}>
            Week
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            { width: '32%', borderRadius: 7, height: '100%' },
            true
              ? { backgroundColor: Colors.primary2 }
              : { backgroundColor: Colors.primary1 },
          ]}
          onPress={() => {
            setPressed(false);
            navigation.navigate('Goalsm');
          }}>
          <Text style={[styles.tabText, true ? {} : { color: Colors.white }]}>
            Month
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 70, marginTop: 30 }}>
        <View style={{ paddingLeft: 40 }}>
          <AnimatedCircularProgress
            size={200}
            width={15}
            fill={70}
            tintColor="#007bff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="white">
            {(fill) => (
              <>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require('../assets/images/iconq.png')}
                />
                <Text style={{ color: 'white', fontSize: 40 }}>5,700</Text>
                <Text style={{ color: 'white', fontSize: 25 }}>steps</Text>
              </>
            )}
          </AnimatedCircularProgress>
        </View>

        <Text
          style={{
            color: '#8DA9B6',
            fontSize: 25,
            fontWeight: 'bold',
            padding: 25,
          }}>
          <Text style={{ color: '#007bff' }}> 2,300 </Text>steps to reach your
          daily goal
        </Text>
        <Image
          style={{ width: 300, height: 150, borderRadius: 10 }}
          source={require('../assets/images/barq.png')}
        />
      </View>
    </View>
  );
};
export default Goalsw;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  text2: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
  },
  text4: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  text3: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
  },
  user: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBtn: {
    backgroundColor: Colors.secondary1,
    borderRadius: 15,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  searchText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  infoText: {
    color: Colors.grey,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  tabText: {
    color: Colors.primary1,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  image: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
    height: 100,
  },
  border: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1.5,
    width: '90%',
    marginVertical: 10,
  },
});
