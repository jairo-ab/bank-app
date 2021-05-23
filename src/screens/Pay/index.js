import { BarCodeScanner } from 'expo-barcode-scanner';
import React, { useEffect, useState } from 'react';
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import imagefoco2 from '../../../assets/rounded-square-corners-outline.png';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7;

export default function Pay() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`O código de barras com tipo ${type} e dados ${data} foi escaneado!`);
    };
  
    if (hasPermission === null) {
      return <Text></Text>;
    }
    if (hasPermission === false) {
      return <Text></Text>;
    }
  
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <Image
          style={styles.qr}
          source={imagefoco2}
        />
        {scanned && <Button title={'Toque aqui para digitalizar novamente.'} onPress={() => setScanned(false)} />}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    qr: {
        marginTop: '20%',
        marginBottom: '20%',
        marginLeft: '15%',
        width: qrSize,
        height: qrSize,
      },
  });