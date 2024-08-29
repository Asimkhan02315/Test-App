import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

function WelcomeScreen({ navigation }) {
    return (
        <LinearGradient
            colors={['#000', '#000']}
            style={styles.container}>
            <View style={{ marginHorizontal: 15 }}>
                <Text style={styles.text1}>wato</Text>
                <Text style={styles.text2}>Zero Cost</Text>
                <Text style={styles.text2}>Whatsapp Messaging</Text>
                <Text style={styles.text2}>platform</Text>
            </View>
            <LinearGradient
                colors={['#141517', '#2E2F30']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.buttonContainer, { borderRadius: 10 }]}>
                <Button
                    mode="contained"
                    style={{ backgroundColor: 'transparent', width: 350, borderWidth: 0.3, borderColor: "#fff" }}
                    labelStyle={{ color: '#fff' }}
                >
                    Get Started
                </Button>
            </LinearGradient>
            <Text style={styles.text}>
                Already have an account?{' '}
                <Text style={{ color: "#D4FB54" }} onPress={() => navigation.navigate('Sign-In')}>
                    Sign in instead
                </Text>
            </Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: '#000',
    },
    text: {
        marginTop: 20,
        color: '#fff',
        alignSelf: 'center',
    },
    text1: {
        marginBottom: 10,
        color: '#fff',
        fontSize: 65,
        fontWeight: "800",
        marginTop: 20,
    },
    text2: {
        marginBottom: 5,
        color: '#fff',
        fontSize: 25,
        fontStyle: 'italic',

    },
    buttonContainer: {
        alignSelf: 'center',
        marginTop: 60,
    },
    button: {
        width: 150,
        alignSelf: 'center',
    },
});

export default WelcomeScreen;
