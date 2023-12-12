import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from 'react-native-file-viewer';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RNFetchBlob from 'rn-fetch-blob';
import Colors from '../assets/values/Colors';
export default function LabResultsMasterDetails({ navigation, route }: any) {
  const item = route.params.item;
  /* route.params.nav.setOptions({
    headerShown: true,
    headerLeft: () => appBar(route.params.nav),
    swipeEnabled: false,
  });*/
  // pdf code
  const datepdf = new Date(item.date).toLocaleDateString('ar-EG-u-nu-latn', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const generateHTML = (value: string) =>
    `<div>
    <head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
    <header>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTlZP0qyVqVJm5y2K1h0BPZA8VVpZsAatB43iLMHZlg&s" alt="Trulli" width="100" height="100">
        <h1>  <center> Health Report </center>  </h1>  
    <h2>  <center> Report Of Lab Result</center>  </h2>  
    <h2><center> Date  ${datepdf}</center></h2> 
    <h2>  <center> Fiscal Year</center>  </h2> 
 
   
</header>
<table>
  <tr>
    <th>>Name of Result</th>
    <th>Result description</th>
    <th>Result Status</th>
    <th>Result Info 1</th>
    <th>Result Info 2</th>
  </tr>
  <tr>
    <td>${item.text}</td>
    <td>${item.description}</td>
    <td>${!item.official ? 'Approved' : 'Not Approved '}</td>
    <td>${item.field1}</td>
    <td>${item.field2}</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Francisco Chang</td>
  </tr>
 
</table>
<center><img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGZV84IDvlZznvgsgYDetFJMC54YPO5qO2xlAH4X2EovxXrmLDc39Niv84w&s" alt="Trulli" width="200" height="200"></center>
</div>`;
  const html = generateHTML('he we make pdffffff');
  const options = {
    html: html,
    fileName: 'test',
    directory: 'Documents',
    base64: true,
  };
  const gnpdf = async (op: RNHTMLtoPDF.Options) => {
    return await RNHTMLtoPDF.convert(op);
  };
  const file = gnpdf(options);
  console.log('file', file);
  var pdfSource;
  const pdfuri = async () => {
    await AsyncStorage.setItem('urii', (await file).filePath as string);
    let filePath = RNFetchBlob.fs.dirs.DownloadDir + '/' + item.id + '.pdf';
    console.log('filepathhhh', filePath);
    RNFetchBlob.fs
      .writeFile(filePath, (await file).base64 as string | number[], 'base64')
      .then((response) => {
        console.log('Success Log: ', response);
      })
      .catch((errors) => {
        console.log(' Error Log: ', errors);
      });
    console.log('uri', (await file).filePath);
  };
  var valuee;
  const geturi = async () => {
    valuee = await AsyncStorage.getItem('urii');
    /*const destinationPath = RNFS.CachesDirectoryPath;
    const FileName = 'testt.pdf';
    console.log('destinationPath', destinationPath);
    const destinationFile = destinationPath + '/' + FileName;
    var stemp = '';
    stemp = valuee as string;
    RNFS.copyFile(stemp, destinationFile);*/
    // console.log('source', valuee);
  };

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
            navigation.navigate('Laboratoryresults');
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
          <Text style={styles.text2}>
            Pdf Report Of {item.id} Result Has been Created
          </Text>
        </View>
        <View
          style={{
            width: 250,
            marginLeft: 70,
            paddingBottom: 15,
          }}>
          <Button
            title="Download Pdf"
            onPress={() => {
              pdfuri();
            }}
          />
        </View>
        <View
          style={{
            width: 250,
            marginLeft: 70,
          }}>
          <Button
            title="Select pdf form download folder and View "
            onPress={() => {
              DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],

                copyTo: 'cachesDirectory',
              }).then((res) => {
                // log file content
                console.log('DocumentPicker res', res);

                console.log(res[0].fileCopyUri);
                // add file to filesToUpload
                const stemp = res[0].fileCopyUri + '';
                const uri = stemp;
                const uri2 = uri.replace('file://', '');
                console.log('opening path', res[0].uri);
                // RNFetchBlob.android.actionViewIntent(uri2, 'application/pdf');
                FileViewer.open(stemp, { showOpenWithDialog: true })
                  .then(() => {
                    console.log('success');
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                // console.log(res.fileCopyUri);
                //  console.log(res.name);
                try {
                  //  const uri = decodeURI(res.fileCopyUri);
                  // const fname = res.name;
                } catch (error) {
                  // console.log(error);
                }
              });
            }}
          />
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
    marginVertical: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 10,
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
