import { Platform, StyleSheet } from 'react-native';
import { AppStyles } from './AppStyles';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000"
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: AppStyles.fontSize.title,
        fontWeight: 'bold',
        color: AppStyles.color.primaryColor,
        textAlign: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    inputStyle: {
        width: AppStyles.textInputWidth.main,
        marginTop: 10,
        borderRadius: 3
    },
    linkView: {
        marginLeft: Platform.OS === 'android' ? 160 : 25,
    },
    linkStyle: {
        color: AppStyles.color.green,
        fontWeight: 600,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: AppStyles.color.title,
        marginBottom: 5,
        marginTop: 5
    },
    header: {
        backgroundColor: AppStyles.color.background,
    },
    icon: {
        alignSelf: 'center',
    },
});

export default globalStyles;
