import firestore from '@react-native-firebase/firestore';
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
import { BarChart } from 'react-native-chart-kit';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from '../assets/values/Colors';
var isDarkTheme = '';
const Goals = ({ navigation, route }) => {
  const theme = useColorScheme();
  const [lb11, setl1] = useState(0);
  const [lb22, setl2] = useState(0);
  const [lb33, setl3] = useState(0);
  const [v11, setv11] = useState(0);
  const [v22, setv22] = useState(0);
  const [v33, setv33] = useState(0);
  const [steps1, setstep1] = useState(' ');
  const [steps2, setstep2] = useState(' ');
  var setp11 = 0;
  var l1 = 0;
  var l2 = 0;
  var l3 = 0;
  var v1 = 0;
  var v2 = 0;
  var v3 = 0;

  var step22 = 0;
  const getdatafromdatabase = () => {
    firestore()
      .collection('Goals')
      .doc('Goalss')
      .onSnapshot((documentSnapshot) => {
        if (!documentSnapshot.data()) {
          console.log('data found');
        }
        console.log('User data of sum: ', documentSnapshot.data());
        l1 = documentSnapshot.data().l1;
        l2 = documentSnapshot.data().l2;
        l3 = documentSnapshot.data().l3;
        v1 = documentSnapshot.data().v1;
        v2 = documentSnapshot.data().v2;
        v3 = documentSnapshot.data().v3;
        setp11 = documentSnapshot.data().steps1;
        step22 = documentSnapshot.data().steps2;
        setl1(l1);
        setl2(l2);
        setl3(l3);
        setv11(v1);
        setv22(v2);
        setv33(v3);
        setstep1(setp11);
        setstep2(step22);
      });
  };
  getdatafromdatabase();
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
            false
              ? { backgroundColor: Colors.primary2 }
              : { backgroundColor: '#007bff' },
          ]}
          onPress={() => {
            setPressed(true);
          }}>
          <Text style={[styles.tabText, false ? {} : { color: Colors.white }]}>
            Day
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
            navigation.navigate('Goalsw');
          }}>
          <Text style={[styles.tabText, true ? {} : { color: Colors.white }]}>
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
      <View style={{ marginLeft: 40, marginTop: 30 }}>
        <View style={{ paddingLeft: 60 }}>
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
                  style={{ width: 50, height: 50, borderRadius: 20 }}
                  source={require('../assets/images/steps.png')}
                />
                <Text style={{ color: 'white', fontSize: 40 }}>{steps1}</Text>
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
          <Text style={{ color: '#007bff' }}> {steps2}</Text>steps to reach your
          daily goal
        </Text>
        <BarChart
          data={{
            labels: [lb11, '', '', lb22, '', '', lb33],
            datasets: [
              {
                data: [v11, 900, 6, v22, 300, v33],
              },
            ],
          }}
          width={340} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '4',
              stroke: 'white',
            },
          }}
          bezier
          style={{
            marginVertical: 4,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};
export default Goals;

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
