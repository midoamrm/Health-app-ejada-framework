import firestore from '@react-native-firebase/firestore';
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
  var date2 = date.slice(0, 3);
  const [hr11, seth1] = useState(0);
  const [hr22, seth2] = useState(0);
  const [sleepp, setsleep] = useState(' ');
  const [setpss, setstep] = useState(0);

  console.log('datedayy', date2);
  var dd = new Date().getDate();
  var mid = 0; // Sat
  var fst1 = 0; // Wed
  var fst2 = 0; // Thu
  var fst3 = 0; //  Fri
  var fst4 = 0; //Sun
  var fst5 = 0; // Mon
  var fst6 = 0; //Tue
  var setps = 0;
  var hr1 = 0;
  var hr2 = 0;
  var sleep = 0;
  const handeldatebar = (date2) => {
    if (date2 === 'Sun') {
      fst1 = dd - 4; // Wed
      fst2 = dd - 3; // Thu
      fst3 = dd - 2;
      mid = dd - 1;
      fst4 = dd;
      fst5 = dd + 1;
      fst6 = dd + 2;
    }
    if (date2 === 'Sat') {
      fst1 = dd - 3; // Wed
      fst2 = dd - 2; // Thu
      fst3 = dd - 1;
      mid = dd;
      fst4 = dd + 1;
      fst5 = dd + 2;
      fst6 = dd + 3;
    }
    if (date2 === 'Mon') {
      fst1 = dd - 5; // Wed
      fst2 = dd - 4; // Thu
      fst3 = dd - 3;
      mid = dd - 2;
      fst4 = dd - 1;
      fst5 = dd;
      fst6 = dd + 1;
    }
    if (date2 === 'Tue') {
      fst1 = dd - 6; // Wed
      fst2 = dd - 5; // Thu
      fst3 = dd - 4;
      mid = dd - 3;
      fst4 = dd - 2;
      fst5 = dd - 1;
      fst6 = dd;
    }
    if (date2 === 'Fri') {
      fst1 = dd - 2; // Wed
      fst2 = dd - 1; // Thu
      fst3 = dd;
      mid = dd + 1;
      fst4 = dd + 2;
      fst5 = dd + 3;
      fst6 = dd + 4;
    }
    if (date2 === 'Thu') {
      fst1 = dd - 1; // Wed
      fst2 = dd; // Thu
      fst3 = dd + 1;
      mid = dd + 2;
      fst4 = dd + 3;
      fst5 = dd + 4;
      fst6 = dd + 5;
    }
    if (date2 === 'Wed') {
      fst1 = dd; // Wed
      fst2 = dd + 1; // Thu
      fst3 = dd + 2;
      mid = dd + 3;
      fst4 = dd + 4;
      fst5 = dd + 5;
      fst6 = dd + 6;
    }
  };
  handeldatebar(date2); // there is some cases needed to be handel
  const getdatafromdatabase = () => {
    firestore()
      .collection('sumdata')
      .doc('datasum')
      .onSnapshot((documentSnapshot) => {
        if (!documentSnapshot.data()) {
          console.log('data found');
        }
        console.log('User data of sum: ', documentSnapshot.data().hr);
        hr1 = documentSnapshot.data().hr;
        hr2 = documentSnapshot.data().hr2;
        sleep = documentSnapshot.data().sleep;
        setps = documentSnapshot.data().steps;
        seth1(hr1);
        setstep(setps);
        seth2(hr2);
        setsleep(sleep);
      });
  };
  getdatafromdatabase();
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
          <View
            style={{
              backgroundColor: date2 === 'Wed' ? '#2a4271' : ' ',
              marginRight: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Wed
            </Text>
          </View>
          <View
            style={{
              backgroundColor: date2 === 'Thu' ? '#2a4271' : ' ',
              marginRight: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Thur
            </Text>
          </View>
          <View
            style={{
              backgroundColor: date2 === 'Fri' ? '#2a4271' : ' ',
              marginRight: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Fri
            </Text>
          </View>
          <View
            style={{
              backgroundColor: date2 === 'Sat' ? '#2a4271' : ' ',
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
          <View
            style={{
              backgroundColor: date2 === 'Sun' ? '#2a4271' : ' ',
              marginRight: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Sun
            </Text>
          </View>
          <View
            style={{
              backgroundColor: date2 === 'Mon' ? '#2a4271' : ' ',
              marginRight: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Mon
            </Text>
          </View>
          <View
            style={{
              backgroundColor: date2 === 'Tue' ? '#2a4271' : ' ',
              marginRight: 20,
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Tue
            </Text>
          </View>
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
              {setpss}
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
              {hr11} bpm
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
              {sleepp}
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
              {hr11} bpm
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
