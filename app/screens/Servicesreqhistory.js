import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';

const Servicesreqhistory = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  var requestnum = 1;
  return (
    <>
      <FlatList
        data={[
          {
            id: 1,
            procedurekind: 'Procedurekind',
            date: 'Date',
            price: 'Price',
            description: 'Description',
            Attach: {
              card: [],
              addtionalAttach: [],
            },
          },
          {
            id: 2,
            procedurekind: 'Procedurekind2',
            date: 'Date2',
            price: 'Price2',
            description: 'Description2',
            Attach: {
              card: [],
              addtionalAttach: [],
            },
          },
          {
            id: 3,
            procedurekind: 'Procedurekind3',
            date: 'Date3',
            price: 'Price3',
            description: 'Description3',
            Attach: {
              card: [],
              addtionalAttach: [],
            },
          },
        ]}
        scrollEnabled={true}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: 'white',
              marginTop: 15,
              marginBottom: 15,
              borderRadius: 40,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1.5,
                width: '100%',
                marginLeft: 20,
                width: 350,
                marginVertical: 10,
              }}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginLeft: 100,
                marginTop: 5,
              }}>
              Request Number{item.id}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              {item.procedurekind}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              {item.date}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              {item.price}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              {item.description}
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              card
            </Text>
            <Text style={{ color: 'black', fontSize: 20, marginLeft: 30 }}>
              addtional attachments
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1.5,
                marginLeft: 20,
                width: 350,
                marginVertical: 10,
              }}
            />
          </View>
        )}
      />
    </>
  );
};

export default Servicesreqhistory;
