import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

class App extends React.Component {
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{ flex: 2, backgroundColor: '#763E15'}}>
          <Text style={styles.Header}>
            SHARED.
          </Text>
        </View>

        <View style={{ flex: 5, alignContent: 'space-between' }}>
          <ScrollView horizontal={true} style={{ paddingTop: 8, paddingLeft: 9 }}>
            <TouchableOpacity style={styles.DButton}>
              <Image
                source={{
                  uri:
                    'https://img.icons8.com/cotton/64/000000/conference-male-speaker.png',
                }}
                resizeMode="contain"
                style={styles.ImageD}
              />
              <Text style={styles.Dtext}>Pilih Mentor</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.DButton1}>
              <Image
                source={{
                  uri:
                    'https://img.icons8.com/cotton/64/000000/standing-man--v1.png',
                }}
                resizeMode="contain"
                style={styles.ImageD}
              />
              <Text style={styles.Dtext}>Santri Mandiri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.DButton1}>
              <Image
                source={{
                  uri:
                    'https://img.icons8.com/cotton/64/000000/men-age-group-4.png',
                }}
                resizeMode="contain"
                style={styles.ImageD}
              />
              <Text style={styles.Dtext}>Santri Belum Mandiri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.DButton1}>
              <Image
                source={{
                  uri:
                    'https://img.icons8.com/cotton/64/000000/add-male-user--v2.png',
                }}
                resizeMode="contain"
                style={styles.ImageD}
              />
              <Text style={styles.Dtext}>Pilih Mentor</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.DButton1}>
              <Image
                source={{
                  uri:
                    'https://img.icons8.com/cotton/64/000000/user-male--v4.png',
                }}
                resizeMode="contain"
                style={styles.ImageD}
              />
              <Text style={styles.Dtext}>Mentor</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, paddingLeft: 10 }}>
            Adik Asuh
          </Text>
        </View>

        <View style={styles.profilebutton}>
          <TouchableOpacity>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/cotton/64/000000/user-male--v1.png',
              }}
              resizeMode="contain"
              style={styles.ImageD1}
            />
            <Text style={styles.profiletext}>Nama Adik Asuh</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonprofile}>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/cotton/64/000000/receipt-terminal.png ',
              }}
              resizeMode="contain"
              style={styles.ImageD}
            />
            <Text style={styles.profiletext}>Konfirmasi</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://img.icons8.com/cotton/64/000000/checkmark.png',
              }}
              resizeMode="contain"
              style={styles.ImageD}
            />
            <Text style={styles.profiletext}>Transfer</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.profilebutton}>

          <TouchableOpacity style={styles.buttonprofile}>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/material-two-tone/64/000000/list.png',
              }}
              resizeMode="contain"
              style={styles.ImageD1}
            />
            <Text style={styles.profiletext}>Nama Adik Asuh</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonprofile}>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/material-two-tone/64/000000/list.png',
              }}
              resizeMode="contain"
              style={styles.ImageD}
            />
            <Text style={styles.profiletext}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonprofile}>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/material-two-tone/64/000000/list.png',
              }}
              resizeMode="contain"
              style={styles.ImageD}
            />
            <Text style={styles.profiletext}>Konfirmasi</Text>
          </TouchableOpacity>

        </View>
        <View style={{ flex: 12 }} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  Header: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 3,
    marginLeft: 7
  },
  DButton: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#B37244',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageD: {
    width: 40,
    height: 40,
    marginTop: 15,
  },
  profiletext: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  buttonprofile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageD1: {
    width: 40,
    height: 40,
    marginTop: 15,
    marginLeft: 5,
  },
  Dtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#444444',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  DButton1: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#B37244',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  profilebutton: {
    flex: 3,
    backgroundColor: '#B37244',
    borderRadius: 40,
    width: 310,
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',}

})
export default App;