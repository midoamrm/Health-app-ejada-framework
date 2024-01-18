import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native';
import Colors from '../assets/values/Colors';
var isDarkTheme = '';
const Summ = ({ navigation, route }) => {
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

  var date = new Date().toLocaleDateString('en-EG-u-nu-latn', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  var mid = new Date().getDate(); //27
  var fst1 = mid - 3; //24
  var fst2 = mid - 2; // 25
  var fst3 = mid - 1; //26
  var fst4 = mid + 1; //28
  var fst5 = mid + 2; // 29
  var fst6 = mid + 3; //30
  const handeldatebar = () => {};
  const getdatafromdatabase = () => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#3e63a9',
          width: 380,
          height: 230,

          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
          marginLeft: 15,
          marginRight: 10,
          marginBottom: 30,
        }}>
        <Image
          style={{
            width: 50,
            height: 50,
            padding: 10,
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 10,
          }}
          source={require('../assets/images/imgg.png')}
        />
        <Text
          style={{
            paddingTop: 40,
            paddingLeft: 20,
            fontSize: 15,
            color: 'white',
          }}>
          {date}
        </Text>
        <Text
          style={{
            paddingTop: 1,
            paddingLeft: 20,
            fontSize: 35,
            color: 'white',
          }}>
          Hello, Mohamed
        </Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', marginLeft: 18 }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 20,
            }}>
            Wed
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 20,
            }}>
            Thur
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 20,
            }}>
            Fri
          </Text>
          <View
            style={{
              backgroundColor: '#2a4271',
              marginRight: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Sat
            </Text>
          </View>

          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 20,
            }}>
            Sun
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 20,
            }}>
            Mon
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 20,
            }}>
            Tue
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 18 }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 45,
            }}>
            {fst1}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 34,
            }}>
            {fst2}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 20,
            }}>
            {fst3}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 34,
            }}>
            {mid}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 34,
            }}>
            {fst4}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 34,
            }}>
            {fst5}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              paddingRight: 20,
            }}>
            {fst6}
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 40 }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            paddingBottom: 10,
          }}>
          Summary
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: '#3462ba',
              width: 150,
              height: 150,
              borderRadius: 25,
              marginRight: 40,
            }}>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                color: 'white',
              }}>
              Steps
            </Text>
            <Image
              style={{
                width: 50,
                height: 50,
                padding: 10,
                marginLeft: 20,
                borderRadius: 10,
              }}
              source={require('../assets/images/iq1.png')}
            />
            <Text
              style={{
                paddingTop: 20,
                paddingLeft: 80,
                fontSize: 20,
                color: 'white',
              }}>
              5,700
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ff6d6f',
              width: 150,
              height: 150,
              borderRadius: 25,
            }}>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                color: 'white',
              }}>
              Heart Rate
            </Text>
            <Image
              style={{
                width: 50,
                height: 50,
                padding: 10,
                marginLeft: 20,
                borderRadius: 10,
              }}
              source={require('../assets/images/iq2.png')}
            />
            <Text
              style={{
                paddingTop: 20,
                paddingLeft: 80,
                fontSize: 20,
                color: 'white',
              }}>
              92 bpm
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 15 }}>
          <View
            style={{
              backgroundColor: '#5d63ed',
              width: 150,
              height: 150,
              borderRadius: 25,
              marginRight: 40,
            }}>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                color: 'white',
              }}>
              Sleep
            </Text>
            <Image
              style={{
                width: 50,
                height: 50,
                padding: 10,
                marginLeft: 20,
                borderRadius: 10,
              }}
              source={require('../assets/images/iq3.png')}
            />
            <Text
              style={{
                paddingTop: 20,
                paddingLeft: 80,
                fontSize: 20,
                color: 'white',
              }}>
              6h 30m
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fea363',
              width: 150,
              height: 150,
              borderRadius: 25,
            }}>
            <Text
              style={{
                padding: 10,
                fontSize: 20,
                color: 'white',
              }}>
              Heart Rate
            </Text>
            <Image
              style={{
                width: 50,
                height: 50,
                padding: 10,
                marginLeft: 20,
                borderRadius: 10,
              }}
              source={require('../assets/images/iq4.png')}
            />
            <Text
              style={{
                paddingTop: 20,
                paddingLeft: 80,
                fontSize: 20,
                color: 'white',
              }}>
              92 bpm
            </Text>
          </View>
        </View>
        <View />
      </View>
    </View>
  );
};
export default Summ;

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
