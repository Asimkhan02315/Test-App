import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { TextInput, Text, Button, HelperText } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { Link } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import globalStyles from '../utils/_css/globalStyle';
import { AppIcon, AppStyles } from '../utils/_css/AppStyles';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

function LoginScreen({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);
    const themeMode = useColorScheme();
    const inputBackgroundColor = themeMode === 'dark' ? 'white' : '#000';

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
            .required("Password is mandatory")
    });

    const formOptions = { resolver: yupResolver(validationSchema), mode: 'onChange' };
    const { control, handleSubmit, formState: { errors } } = useForm(formOptions);

    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.container}>
                    <Text style={[globalStyles.title, { marginTop: 70, marginBottom: 30, fontSize: 20 }]}>Please sign-in to your account</Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[globalStyles.inputStyle, { backgroundColor: inputBackgroundColor }]}
                                mode='outlined'
                                activeOutlineColor={AppStyles.color.secondaryColor}
                                outlineColor={AppStyles.color.secondaryColor}
                                placeholder="Email"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                            />
                        )}
                    />
                    {errors?.email && (
                        <HelperText type="error" visible={errors?.email} style={{ color: 'white' }}>
                            {errors?.email?.message}
                        </HelperText>
                    )}
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                secureTextEntry={!showPassword}
                                placeholder="Password"
                                style={[globalStyles.inputStyle, { backgroundColor: inputBackgroundColor }]}
                                mode='outlined'
                                activeOutlineColor={AppStyles.color.secondaryColor}
                                outlineColor={AppStyles.color.secondaryColor}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                                right={<TextInput.Icon icon={showPassword ? "eye-off" : "eye"} onPress={() => setShowPassword(!showPassword)} />}
                            />
                        )}
                    />
                    {errors?.password && (
                        <HelperText type="error" visible={errors?.password} style={{ color: 'white' }}>
                            {errors?.password?.message}
                        </HelperText>
                    )}
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 35, marginVertical: 12 }}>

                        <View style={globalStyles.linkView}>
                            <Link to={{ screen: 'ForgetPassword' }}>
                                <Text style={globalStyles.linkStyle}> ForgetPassword ?</Text>
                            </Link>
                        </View>

                    </View>
                    <Button style={globalStyles.inputStyle} textColor={AppStyles.color.white} buttonColor={AppStyles.color.tint} mode="contained-tonal" onPress={handleSubmit(onSubmit)}>
                        Login
                    </Button>
                    <Text style={styles.text}>
                        New to our platform?{' '}
                        <Text style={{ color: "#D4FB54" }} onPress={() => navigation.navigate('Sign-Up')}>
                            Create an account
                        </Text>
                    </Text>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ color: "#fff" }}>Or</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <LinearGradient
                            colors={['#141517', '#2E2F30']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.buttonContainer, { borderRadius: 10 }]}>
                            <Button
                                mode="contained"
                                style={{ borderColor:"#fff", backgroundColor: 'transparent', width: 310, borderWidth: 0.3 }}
                                labelStyle={{ color: '#fff' }}
                            >
                                <FastImage
                                    source={AppIcon.images.logo}
                                    style={{ fontSize: 30, width: 30, height: 20, marginRight: 40, alignItems: "center", justifyContent: "center" }}
                                />{'     '}
                                <Text style={{ bottom: 20, color: "#fff" }}>
                                    Continue with Google
                                </Text>
                            </Button>
                        </LinearGradient>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        color: '#fff',
        alignSelf: 'center',
    },
})

export default LoginScreen;