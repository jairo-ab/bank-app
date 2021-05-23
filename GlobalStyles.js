import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: "#0DB060",
        paddingTop: Platform.OS === 'android' ? 0 : 0
    },
});
