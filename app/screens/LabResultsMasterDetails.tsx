import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/values/Colors';
export default function LabResultsMasterDetails({ navigation, route }: any) {
  const item = route.params.item;
  /* route.params.nav.setOptions({
    headerShown: true,
    headerLeft: () => appBar(route.params.nav),
    swipeEnabled: false,
  });*/
  // pdf code
  const generateHTML = (value: string) =>
    `<div>
<span>Hi ${value}, how are you?
</span>
</div>`;
  const html = generateHTML('');
  const options = { html, fileName: 'test', directory: 'Documents' };
  const gnpdf = async (op: RNHTMLtoPDF.Options) => {
    return await RNHTMLtoPDF.convert(op);
  };
  const file = gnpdf(options);

  var pdfSource;
  const pdfuri = async () => {
    await AsyncStorage.setItem('urii', (await file).filePath as string);
    console.log('uri', (await file).filePath);
  };
  var valuee;
  const geturi = async () => {
    valuee = await AsyncStorage.getItem('urii');
    console.log('source', valuee);
  };
  pdfuri();
  geturi();
  //console.log('source2', valuee);
  // const pdfSource: number | Source = pdfuri() as number | Source;
  //const uri = decodeURI(pdfSource as string);
  //console.log('uri', uri);

  return (
    <>
      <View style={{ padding: 10 }}>
        <FontAwesome5
          name={'arrow-left'}
          size={30}
          color={'white'}
          onPress={() => {
            navigation.navigate('Laboratoryresults', { fl: 't' });
          }}
        />
      </View>

      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>رقم الطلب: {item.id}</Text>
          <Text style={styles.text}>
            تاريخ الطلب:{' '}
            {new Date(item.date).toLocaleDateString('ar-EG-u-nu-latn', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </Text>
          <Text style={styles.text}>اسم النتيجة: {item.text}</Text>
          <Text style={styles.text}>تفاصيل النتيجة: {item.description}</Text>
          <Text style={styles.text}>
            حالة النتيجة: {!item.official ? 'معتمدة' : 'غير معتمدة'}
          </Text>
          <Text style={styles.text}>معلومة1: {item.field1}</Text>
          <Text style={styles.text}>معلومة2: {item.field2}</Text>
        </View>
      </ScrollView>
    </>
  );
}
function appBar(navigation: any) {
  return (
    <View style={styles.appBarView}>
      <TouchableOpacity
        style={styles.appBar}
        onPress={() => navigation.navigate('LabResults')}>
        <Ionicons
          name="arrow-redo-circle-outline"
          size={20}
          color="white"
          style={styles.backArrow}
        />
        <Text style={styles.header}>العودة</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary1,
    marginVertical: 20,
  },
  appBarView: {
    backgroundColor: '#1D5B8C',
  },
  appBar: {
    // width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    direction: 'rtl',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    paddingRight: 10,
  },
  backArrow: {
    // fontWeight: 'bold',
    // fontFamily: 'Arial',
    paddingRight: 10,
  },
});
