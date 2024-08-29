
import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { TextInput, Text, Checkbox, Button, HelperText } from 'react-native-paper';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useColorScheme } from 'react-native';
import globalStyles from '../utils/_css/globalStyle';
import { AppIcon, AppStyles } from '../utils/_css/AppStyles';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

function SignupScreen({ navigation }) {

    const [showPassword, setShowPassword] = useState(false);
    const themeMode = useColorScheme();
    const inputBackgroundColor = themeMode === 'dark' ? 'white' : '#000';

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
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
                    <Text style={[globalStyles.title, { marginTop: 110, marginBottom: 10, fontSize: 20 }]}>Please sign-up for your account</Text>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={[globalStyles.inputStyle, { backgroundColor: inputBackgroundColor }]}
                                mode='outlined'
                                // label='Name'
                                activeOutlineColor={AppStyles.color.secondaryColor}
                                outlineColor={AppStyles.color.secondaryColor}
                                placeholder="Name"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor={AppStyles.color.grey}
                                underlineColorAndroid="transparent"
                            />
                        )}
                    />
                    {errors?.name && (
                        <HelperText type="error" visible={errors?.name} style={{ color: 'white' }}>
                            {errors?.name?.message}
                        </HelperText>
                    )}
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
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <Checkbox
                                        status={value ? 'checked' : 'unchecked'}
                                        onPress={() => onChange(!value)}
                                        color={AppStyles.color.tint}
                                    />
                                )}
                                name="myCheckbox"
                                defaultValue={false}
                            />
                            <Text style={{ color: "#fff" }}>I agree <Text style={{ color: "#D4FB54" }}>to privacy policy & terms</Text></Text>
                        </View>
                    </View>
                    <Button style={globalStyles.inputStyle} textColor={AppStyles.color.white} buttonColor={AppStyles.color.tint} mode="contained-tonal" onPress={handleSubmit(onSubmit)}>
                        Sign Up
                    </Button>
                    <Text style={styles.text}>
                        Already have an account?{' '}
                        <Text style={{ color: "#D4FB54" }} onPress={() => navigation.navigate('Sign-In')}>
                            Sign in instead
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
                                style={{borderColor:"#fff", backgroundColor: 'transparent', width: 310, borderWidth: 0.3 }}
                                labelStyle={{ color: '#fff' }}
                            >
                                <FastImage
                                    source={AppIcon.images.logo}
                                    style={{alignItems:"center", fontSize: 30, width: 30, height: 20, marginRight: 40, alignItems: "center", justifyContent: "center" }}
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

export default SignupScreen;