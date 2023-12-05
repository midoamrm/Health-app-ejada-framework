import firestore from '@react-native-firebase/firestore';
import React, { useMemo, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DateInput from '../components/DateInput3';
const Add = ({ navigation, route }) => {
  // var id = route.params.idd;

  //var dataitem = route.params.datit;
  const [cc, setcc] = useState(0);
  const [selectedId, setSelectedId] = useState('2');
  const [gvalue, setGvalue] = useState(true);
  const [f, setf] = useState('f');
  const [dd, setdd] = useState('f');
  const [te, sette] = useState('f');
  const [dtt, setdtt] = useState('f');
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [date, setdate] = useState('');
  const [description, setdescription] = useState('');
  const [text, settext] = useState('');
  const [field1, setfield1] = useState('');
  const [field2, setfield2] = useState(false);
  var datagen = [];
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'true',
        value: true,
        color: 'blue',
        labelStyle: { fontSize: 18, color: 'blue', fontWeight: 'bold' },
      },
      {
        id: '2',
        label: 'false',
        value: false,
        color: 'blue',
        labelStyle: { fontSize: 18, color: 'blue', fontWeight: 'bold' },
      },
    ],
    [],
  );
  const chooseGender = (selected) => {
    setSelectedId(selected);
    // get tha value of the selected radio button from radioButtons
    radioButtons.map((button) => {
      if (button.id === selected) {
        setGvalue(button.value);
        console.log(button.value);
        setfield2(button.value);
      }
    });
    console.log(selected);
    // setGvalue(gvalue);
    console.log('gvalue', gvalue);
    console.log('filed2', field2);
  };
  const Date = (text) => {
    setdate(text);
  };
  const Description = (text) => {
    setdescription(text);
  };
  const Textt = (text) => {
    settext(text);
  };
  const Field1 = (text) => {
    setfield1(text);
  };

  const Field2 = (text) => {
    if (text === 'true') {
      setfield2(true);
    } else if (text === 'false') {
      setfield2(false);
    }
  };
  if (dateFrom !== null) {
    var ss = dateFrom.toLocaleDateString('en-EG-u-nu-latn', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  }
  var st = '';
  if (dateFrom !== null) {
    console.log('date from', ss.split('/'));
    var tep = ss.split('/');
    var day = tep[1] + '';
    var month = tep[0];
    day = day.length < 2 ? '0' + tep[1] : tep[1];
    month = month.length < 2 ? '0' + tep[0] : tep[0];
    st = tep[2] + '-' + month + '-' + day;

    console.log('date from', st);
  }
  const getid = () => {
    var cont = 0;

    for (var i = 0; i < 16; i++) {
      console.log('hi');
      firestore()
        .collection('new data2')
        .doc('id' + i)
        .onSnapshot((documentSnapshot) => {
          // console.log('User data: from add ', documentSnapshot.data());
          const tempp = documentSnapshot.data();
          //console.log(tempp);
          if (documentSnapshot.data()) {
            datagen.push(tempp);
            cont++;
            console.log('hhiiiiiiiiiiiiu', cont);
            // setcc(cont);
          }
        });
    }
    console.log('datagenformlen', cont);
  };

  return (
    <>
      <View style={{ padding: 10 }}>
        <FontAwesome5
          name={'arrow-left'}
          size={30}
          color={'white'}
          onPress={() => {
            setdate('');
            settext('');
            setfield1('');
            setdescription('');
            setDateFrom(null);
            navigation.navigate('Laboratoryresults', { fl: 't' });
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 100,
          marginLeft: 40,
          marginRight: 40,
          padding: 20,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            fontSize: 17,
            color: 'blue',
          }}>
          Date:
        </Text>

        <DateInput
          dateFrom={dateFrom}
          dateTo={dateTo}
          setDateTo={setDateTo}
          setDateFrom={setDateFrom}
        />

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'blue',
            fontSize: 17,
          }}>
          Text:
        </Text>

        <TextInput
          placeholder={'Add data'}
          placeholderTextColor="black"
          onChangeText={(text) => Textt(text)}
          value={text}
          style={{ color: 'black' }}
          textAlign="left"
          maxLength={30}
        />

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'blue',
            fontStyle: 'italic',
            fontSize: 17,
          }}>
          Description:
        </Text>

        <TextInput
          placeholder={'Add data'}
          placeholderTextColor="black"
          onChangeText={(text) => Description(text)}
          style={{ color: 'black' }}
          value={description}
          textAlign="left"
          maxLength={30}
        />

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'blue',
            fontStyle: 'italic',
            fontSize: 17,
          }}>
          Field:
        </Text>

        <TextInput
          placeholder={'Add data'}
          placeholderTextColor="black"
          onChangeText={(text) => Field1(text)}
          style={{ color: 'black' }}
          value={field1}
          textAlign="left"
          maxLength={30}
        />

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text
          style={{
            fontWeight: 'bold',
            color: 'blue',
            fontStyle: 'italic',
            fontSize: 17,
          }}>
          Approved:
        </Text>
        <View>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={chooseGender}
            selectedId={selectedId}
            containerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View
          style={{
            width: '100%',
            borderRadius: 40,
          }}>
          <Button
            title="Add"
            onPress={() => {
              ///
              var d = '';
              if (description === '') {
              } else {
                d = description;
              }
              //
              var dt = '';
              if (dateFrom === null) {
              } else {
                dt = st;
              }
              ///
              var tex = '';
              if (text === '') {
              } else {
                tex = text;
              }
              //
              var fe = '';
              if (field1 === '') {
              } else {
                fe = field1;
              }
              console.log('gvalue', gvalue);
              const ref = firestore().collection('new data2');

              const data = {
                date: dt,
                text: tex,
                description: d,
                id: 'id5',
                official: gvalue,
                field1: fe,
                field2: 'data field' + 4 + 'for element  1 ',
              };
              //  ref.doc('id5').set(data);
              setdate('');
              settext('');
              setfield1('');
              setdescription('');
              setDateFrom(null);
              // navigation.navigate('Laboratoryresults', { fl: 't' });
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Add;
