import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerContent = () => {
    return(
        <View styl={{flex: 1}}>
            <Image 
                source={{
                uri:
                    'https://images.assetsdelivery.com/compings_v2/jemastock/jemastock1701/jemastock170103948.jpg'
                        }}
                style={{width:170, height: 170, alignSelf:'center', marginTop:20}}
            />
            <Text style={styles.text1}>
                Nama Lengkap
            </Text>
            <Text style={styles.text12}>
                Muhammad Hanan
            </Text>
            <Text style={styles.Text1A}>
                Email
            </Text>
            <Text style={styles.text12}>
                chyper23@outlook.com
            </Text>
            <Text style={styles.Text1A}>
                Contact
            </Text>
            <Text style={styles.text12}>
                62+ 12345678910
            </Text>
            <Text style={styles.Text1A}>
                Asal Kota
            </Text>
            <Text style={styles.text12}>
                Balikpapan
            </Text>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.textbutton1}>
                    Refresh
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.textbutton1}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        fontWeight: 'bold',
        fontSize: 25,
        // marginTop: 18,
        marginLeft: 10,
        color: '#702F01'
    },
    text12: {
        fontSize:17,
        marginLeft: 10
    },
    Text1A: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 7,
        marginLeft: 10,
        color: '#702F01'
    },
    button1: {
        backgroundColor: '#B37244',
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        marginTop: 50
    },
    textbutton1: {
        fontSize: 18,
        fontWeight: 'bold',
        color : 'white'
    },
    button2: {
        backgroundColor: '#B37244',
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 18
    },
})

export default DrawerContent;