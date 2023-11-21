import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Update = ({ navigation, route }) => {
  var id = route.params.idd;
  console.log('iddofdoc', id);
  var dataitem = route.params.datit;
  console.log('dataitem' + dataitem.date);
  const formattedDate = dataitem.date;
  const [f, setf] = useState('f');
  const [dd, setdd] = useState('f');
  const [te, sette] = useState('f');
  const [dtt, setdtt] = useState('f');

  const [date, setdate] = useState('');
  const [description, setdescription] = useState('');
  const [text, settext] = useState('');
  const [field1, setfield1] = useState('');
  const [field2, setfield2] = useState(false);

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

  return (
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
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
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
        <TextInput
          placeholder={'eidt'}
          placeholderTextColor="black"
          onChangeText={(text) => Date(text)}
          value={date}
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
          fontStyle: 'italic',
          color: 'blue',
          fontSize: 17,
        }}>
        Text:
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
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
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
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
        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
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
      <TextInput
        placeholder={dataitem.official + ''}
        placeholderTextColor="black"
        onChangeText={(text) => Field2(text)}
        value={field2}
        textAlign="left"
        maxLength={30}
      />
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
            if (date === '') {
              dt = dataitem.date;
            } else {
              dt = date;
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

            const ref = firestore().collection('new data');
            ref.doc(id).update({
              date: dt,
              text: tex,
              description: d,
              official: field2,
              field1: fe,
            });
            setdate('');
            settext('');
            setfield1('');
            setdescription('');
            navigation.navigate('Laboratoryresults', { fl: 't' });
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
  );
};

export default Update;
