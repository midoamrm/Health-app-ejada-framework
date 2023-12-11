import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React from 'react';
import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';
export default class Fileuploading extends React.Component {
  state = {
    // placeholder image
    imagePath: require('../assets/images/saveimg.png'),
  };
  deletedata = () => {
    const ref = firestore().collection('new data');
    ref.doc('abc').delete();
  };
  getdata = () => {
    console.log('User data: ', 'demooo');
    // for (var i = 0; i < 16; i++) {
    firestore()
      .collection('new data2')
      .doc('id' + 2)
      .onSnapshot((documentSnapshot) => {
        if (!documentSnapshot.data()) {
          console.log('data found');
        }
        console.log('User data: ', documentSnapshot.data());
      });
    //  }
  };
  updatedata = () => {
    const ref = firestore().collection('new data');
    ref.doc('abc').update({
      provider_count: '44',
    });
  };
  adddata = () => {
    // const userid = firestore().collection('new data').doc();
    // console.log('user id', userid._documentPath._parts[1]);
    // script to gen 1000 data filed //
    const ref = firestore().collection('new data3');
    for (var i = 0; i < 1000; i++) {
      const data = {
        date: '2023-05-' + i,
        text: 'result' + i + 1,
        description: i + 'th result',
        id: 'id' + i,
        official: true,
        field1: 'data field' + i + 'for element  1 ',
        field2: 'data field' + i + 'for element  1 ',
      };
      ref.doc('id' + i).set(data);
    }
    //////////// End of script////////////
    //  ref.doc(uid).update({
    //  });
  };
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true, // do not backup to iCloud
        path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker', storage());
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // let path = this.getPlatformPath(response).value;
        // let fileName = this.getFileName(response.fileName, path);

        // this.setState({ imagePath: path });
        try {
          var source = response.assets[0].uri;
          console.log('source', source);
          // const { uri } = source;
          const filename = source.substring(source.lastIndexOf('/') + 1);
          const uri = decodeURI(source);

          const task = storage().ref(filename).putFile(uri);

          task.on('state_changed', (taskSnapshot) => {
            console.log(
              `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
            );
          });

          task.then(() => {
            Alert.alert(
              'Photo uploaded!',
              'Your photo has been uploaded to Firebase Cloud Storage!',
            );
            console.log('Image uploaded to the bucket!');
          });
          console.log('filename', filename);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  uploadfilepick = () => {
    DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      allowMultiSelection: true,
      copyTo: 'cachesDirectory',
    }).then((res) => {
      // log file content
      console.log(res);

      // add file to filesToUpload
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].fileCopyUri);
        console.log(res[i].name);
        try {
          const uri = decodeURI(res[i].fileCopyUri);
          const fname = res[i].name;
          const task = storage().ref(`/myfiles/${fname}`).putFile(uri);

          task.on('state_changed', (taskSnapshot) => {
            console.log(
              `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
            );
          });

          task.then(() => {
            console.log('file uploaded to the bucket!');
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };
  /**
   * Get the file name and handle the invalid null case
   */
  getFileName(name, path) {
    if (name != null) {
      return name;
    }

    if (Platform.OS === 'ios') {
      path = '~' + path.substring(path.indexOf('/Documents'));
    }
    return path;
  }

  /**
   * Get platform specific value from response
   */
  getPlatformPath({ path, uri }) {
    return Platform.select({
      android: { value: path },
      ios: { value: uri },
    });
  }

  /**
   * Get platform-specific Uri with the required format
   */
  getPlatformURI(imagePath) {
    let imgSource = imagePath;
    if (isNaN(imagePath)) {
      imgSource = { uri: this.state.imagePath };
      if (Platform.OS == 'android') {
        imgSource.uri = 'file:///' + imgSource.uri;
      }
    }
    return imgSource;
  }

  render() {
    let { imagePath } = this.state;
    let imgSource = this.getPlatformURI(imagePath);
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.uploadImage} source={imgSource} />
          <View style={styles.eightyWidthStyle}>
            <Button title={'Upload Files'} onPress={this.uploadfilepick} />
            <Button title={'add data'} onPress={this.adddata} />
            <Button title={'update data'} onPress={this.updatedata} />
            <Button title={'get data'} onPress={this.getdata} />
            <Button title={'delete data'} onPress={this.deletedata} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  eightyWidthStyle: {
    width: '80%',
    margin: 2,
  },
  uploadImage: {
    width: '80%',
    height: 300,
  },
});
