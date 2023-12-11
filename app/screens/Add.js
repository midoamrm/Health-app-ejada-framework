import firestore from '@react-native-firebase/firestore';
import React, { useMemo, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import RadioGroup from 'react-native-radio-buttons-group';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from '../assets/values/Colors';
import DateInput from '../components/DateInput3';
const Add = ({ navigation, route }) => {
  // var id = route.params.idd;

  //var dataitem = route.params.datit;
  const [cc, setcc] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
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
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
              const ref2 = firestore().collection('new data');
              var c = 0;
              var tempp = 0;
              firestore()
                .collection('new data')
                .doc('lastid')
                .onSnapshot((documentSnapshot) => {
                  // console.log('lastid', documentSnapshot.data());
                  tempp = documentSnapshot.data().id + 1;

                  console.log('lastid', tempp);
                  if (documentSnapshot.data()) {
                  }
                  if (c === 0) {
                    setcc(tempp);
                    console.log('lastiddddddddddddd', tempp);
                    const data = {
                      date: dt,
                      text: tex,
                      description: d,
                      id: 'id' + tempp,

                      official: gvalue,
                      field1: fe,
                      field2: 'data field' + 4 + 'for element  1 ',
                    };

                    ref.doc('id' + tempp).set(data);
                    c = 1;
                  }

                  return;
                });

              //  ref.doc('id5').set(data);
              setdate('');
              settext('');
              setfield1('');
              setdescription('');
              setDateFrom(null);
              toggleModal();
              // navigation.navigate('Laboratoryresults', { fl: 't' });
            }}
          />
        </View>
      </View>
      <Modal isVisible={isModalVisible} style={styles.mainModel}>
        <View style={styles.failureContent}>
          <Text style={styles.popupSubTitle}>Data has been added</Text>

          <View style={styles.failureBtnView}>
            <TouchableOpacity
              onPress={() => {
                const ref3 = firestore().collection('new data');
                ref3.doc('lastid').set({ id: cc });
                setcc(0);
                toggleModal();
                navigation.navigate('Laboratoryresults', { fl: gvalue });
              }}>
              <Text style={styles.failureBtnText}>ok </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Add;
const styles = StyleSheet.create({
  mainModel: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  failureContent: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    width: '95%',
  },
  failureBtnView: {
    backgroundColor: '#1D5B8C',
    borderRadius: 30,
    paddingVertical: 5,
    width: '95%',
    marginVertical: 10,
  },
  failureBtnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  popupSubTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
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
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
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
