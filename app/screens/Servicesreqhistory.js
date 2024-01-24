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
            procedurekind: 'procedurekind',
            date: 'date',
            price: 'price',
            description: 'description',
            Attach: {
              card: [],
              addtionalAttach: [],
            },
          },
          {
            id: 2,
            procedurekind: 'procedurekind2',
            date: 'date2',
            price: 'price2',
            description: 'description2',
            Attach: {
              card: [],
              addtionalAttach: [],
            },
          },
          {
            id: 3,
            procedurekind: 'procedurekind3',
            date: 'date3',
            price: 'price3',
            description: 'description3',
            Attach: {
              card: [],
              addtionalAttach: [],
            },
          },
        ]}
        scrollEnabled={true}
        renderItem={({ item, index }) => (
          <View style={{ backgroundColor: 'white', paddingTop: '40' }}>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1.5,
                width: '90%',
                marginVertical: 10,
              }}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginLeft: 70,
                marginTop: 20,
              }}>
              Request Number{item.id}
            </Text>
            <Text style={{ color: 'black', fontSize: 30, marginLeft: 30 }}>
              {item.procedurekind}
            </Text>
            <Text style={{ color: 'black', fontSize: 30, marginLeft: 30 }}>
              {item.date}
            </Text>
            <Text style={{ color: 'black', fontSize: 15, marginLeft: 30 }}>
              {item.price}
            </Text>
            <Text style={{ color: 'black', fontSize: 15, marginLeft: 30 }}>
              {item.description}
            </Text>
            <Text style={{ color: 'black', fontSize: 15, marginLeft: 30 }}>
              card
            </Text>
            <Text style={{ color: 'black', fontSize: 15, marginLeft: 30 }}>
              addtional attachments
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1.5,
                width: '90%',
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
