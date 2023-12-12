import firestore from '@react-native-firebase/firestore';
import React, { useMemo, useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateInput from '../components/DateInput3';
const Update = ({ navigation, route }) => {
  var id = route.params.idd;
  console.log('iddofdoc', id);
  var dataitem = route.params.datit;
  console.log('dataitem' + dataitem.date);
  const formattedDate = dataitem.date;
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

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
              navigation.navigate('Laboratoryresults', { fl: gvalue });
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

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>
              {dataitem.date === '' ? 'No entered data' : dataitem.date}
            </Text>

            <Icon
              name={'check-circle'}
              size={24}
              color={'green'}
              onPress={() => {
                if (dtt === 't') {
                  setdtt('f');
                } else if (dtt === 'f') {
                  setdtt('t');
                }
              }}
            />
          </View>
          {dtt === 't' && (
            <DateInput
              dateFrom={dateFrom}
              dateTo={dateTo}
              setDateTo={setDateTo}
              setDateFrom={setDateFrom}
            />
          )}
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>
              {dataitem.text === '' ? 'No entered data' : dataitem.text}
            </Text>

            <Icon
              name={'check-circle'}
              size={24}
              color={'green'}
              onPress={() => {
                if (te === 't') {
                  sette('f');
                } else if (te === 'f') {
                  sette('t');
                }
              }}
            />
          </View>
          {te === 't' && (
            <TextInput
              placeholder={'eidt'}
              placeholderTextColor="black"
              onChangeText={(text) => Textt(text)}
              value={text}
              style={{ color: 'black' }}
              textAlign="left"
              maxLength={30}
            />
          )}
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>
              {dataitem.description === ''
                ? 'No entered data'
                : dataitem.description}
            </Text>

            <Icon
              name={'check-circle'}
              size={24}
              color={'green'}
              onPress={() => {
                if (dd === 't') {
                  setdd('f');
                } else if (dd === 'f') {
                  setdd('t');
                }
              }}
            />
          </View>
          {dd === 't' && (
            <TextInput
              placeholder={'eidt'}
              placeholderTextColor="black"
              onChangeText={(text) => Description(text)}
              style={{ color: 'black' }}
              value={description}
              textAlign="left"
              maxLength={30}
            />
          )}
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>
              {dataitem.field1 === '' ? 'No entered data' : dataitem.field1}
            </Text>

            <Icon
              name={'check-circle'}
              size={24}
              color={'green'}
              onPress={() => {
                if (f === 't') {
                  setf('f');
                } else if (f === 'f') {
                  setf('t');
                }
              }}
            />
          </View>
          {f === 't' && (
            <TextInput
              placeholder={'eidt'}
              placeholderTextColor="black"
              onChangeText={(text) => Field1(text)}
              style={{ color: 'black' }}
              value={field1}
              textAlign="left"
              maxLength={30}
            />
          )}

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
              title="update"
              onPress={() => {
                ///
                var d = '';
                if (description === '') {
                  d = dataitem.description;
                } else {
                  d = description;
                }
                //
                var dt = '';
                if (dateFrom === null) {
                  dt = dataitem.date;
                } else {
                  dt = st;
                }
                ///
                var tex = '';
                if (text === '') {
                  tex = dataitem.text;
                } else {
                  tex = text;
                }
                //
                var fe = '';
                if (field1 === '') {
                  fe = dataitem.field1;
                } else {
                  fe = field1;
                }
                console.log('gvalue', gvalue);
                const ref = firestore().collection('new data2');
                ref.doc(id).update({
                  date: dt,
                  text: tex,
                  description: d,
                  official: gvalue,
                  field1: fe,
                });
                setdate('');
                settext('');
                setfield1('');
                setdescription('');
                setDateFrom(null);
                // navigation.navigate('Laboratoryresults', { fl: 't' });
                /*axios.put(
              `https://64ec81d3f9b2b70f2bfa7413.mockapi.io/fakedata/${id}`,
              {
                date: date,
                text: text,
                description: description,
                official: true,
                field1: 'data field' + 3 + 'for element  1 ',
                field2: 'data field' + 3 + 'for element  1 ',
              },
            );*/
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Update;
