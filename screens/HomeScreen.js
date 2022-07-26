import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableHighlight, TextInput } from 'react-native';
import * as React from 'react';

export function HomeScreen() {

    var [ isPress, setIsPress ] = React.useState(false);

    var touchProps = {
        activeOpacity: 1,
        underlayColor: 'rgba(255, 255, 255, 0.5)',
        style: isPress ? styles.homescreenListPress : styles.homescreenList,
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('underlay'),
    };

    return (

        <View style={ styles.container }>

            <View style={ styles.menuContainer }>

                {/* <Text style={ styles.smallHeading }>Verification</Text> */}

                {/* <View>

                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'center' }}>

                        <View style={ [styles.headerCols, { backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10 }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10 }] }></View>

                    </View>

                    <Text style={ styles.smallParagraph }>At which Kennedy Orthodontics clinic are you registered?</Text>

                    <View>

                        <TouchableHighlight {...touchProps} style={ [styles.buttonOnPress, { marginTop: 45 }] }>

                            <Text style={ styles.homescreenList }>Ballymena</Text>

                        </TouchableHighlight>

                        <TouchableHighlight {...touchProps} style={ [styles.buttonOnPress, { marginTop: 5 }] }>

                            <Text style={ styles.homescreenList }>Belfast</Text>

                        </TouchableHighlight>

                        <TouchableHighlight {...touchProps} style={ [styles.buttonOnPress, { marginTop: 5 }] }>

                            <Text style={ styles.homescreenList }>Magherafelt</Text>
                            
                        </TouchableHighlight>

                    </View>

                </View> */}

                {/* <View>

                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'center' }}>

                        <View style={ [styles.headerCols, { backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10, backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10 }] }></View>

                    </View>

                    <Text style={ styles.smallParagraph }>Enter your patient registration number.</Text>

                    <TextInput style={ styles.textInput } placeholder="01234567" placeholderTextColor='rgba(44, 41, 36, 0.5)'></TextInput>

                    <TextInput style={ [styles.textInput, { backgroundColor: 'rgba(255, 255, 255, 0.5)' }] } placeholder="01234567" placeholderTextColor='#2C2924'></TextInput>

                    <TextInput style={ styles.textInput } placeholder="01234567" placeholderTextColor='rgb(255, 0, 0)'></TextInput>
                    <Text style={ styles.errorMessage }>Please enter a valid registration</Text>

                </View> */}
                
                {/* <View>

                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'center' }}>

                        <View style={ [styles.headerCols, { backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10, backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10, backgroundColor: '#746B5E' }] }></View>

                    </View>

                    <Text style={ styles.smallParagraph }>And finally, please confirm your date of birth.</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <TextInput style={ [styles.textInput, { width: 80 }] } placeholder="DD" placeholderTextColor='rgba(44, 41, 36, 0.5)'></TextInput>

                        <TextInput style={ [styles.textInput, { width: 80, marginLeft: 5, marginRight: 5 }] } placeholder="MM" placeholderTextColor='rgba(44, 41, 36, 0.5)'></TextInput>

                        <TextInput style={ [styles.textInput, { width: 80 }] } placeholder="YYYY" placeholderTextColor='rgba(44, 41, 36, 0.5)'></TextInput>

                    </View>

                </View> */}

                {/* <Text style={ styles.smallHeading }>Registration</Text> */}

                {/* <View>

                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'center' }}>

                        <View style={ [styles.headerCols, { backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10 }] }></View>

                    </View>

                    <Text style={ styles.smallParagraph }>Congratulations, your details have been verified.</Text>

                    <Text style={ styles.smallParagraph }>To set up your account please enter your email address. </Text>

                    <TextInput style={ [styles.textInput, { width: 265, marginTop: 118 }] } placeholder="your@email.com" placeholderTextColor='rgba(44, 41, 36, 0.5)'></TextInput>

                </View> */}

                {/* <View>

                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'center' }}>

                        <View style={ [styles.headerCols, { backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10, backgroundColor: '#746B5E' }] }></View>

                    </View>

                    <Text style={ [styles.smallParagraph, { width: 196 }] }>Please enter a password for your account</Text>

                    <Image source={require('../assets/images/icons/lock.png')} style={{ width: 43, height: 52, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}></Image>

                    <TextInput style={ [styles.textInput, { width: 265, marginTop: 99 }] } placeholder="Password" placeholderTextColor='rgba(44, 41, 36, 0.5)'></TextInput>

                </View> */}

                <Text style={ styles.smallHeading }>Permissions</Text>

                {/* <View>

                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'center' }}>

                        <View style={ [styles.headerCols, { backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10 }] }></View>

                    </View>

                    <Text style={ [styles.smallParagraph, { width: 214 }] }>Would you like to activate Face ID?</Text>

                    <Image source={require('../assets/images/icons/face-id.png')} style={{ width: 53, height: 53, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}></Image>

                    <View style={{ marginTop: 99, flexDirection: 'row', }}>

                        <TouchableHighlight {...touchProps} style={ [styles.buttonOnPress, { width: 128, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.5)' }] }>

                            <Text style={ [styles.homescreenList, { fontSize: 22 }] }>Yes</Text>

                        </TouchableHighlight>

                        <TouchableHighlight {...touchProps} style={ [styles.buttonOnPress, { width: 128, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.5)', marginLeft: 10, }] }>

                            <Text style={ [styles.homescreenList, { fontSize: 22 }] }>No</Text>

                        </TouchableHighlight>

                    </View>

                </View> */}

                <View>

                    <View style={{ flexDirection: 'row', marginTop: 60, justifyContent: 'center' }}>

                        <View style={ [styles.headerCols, { backgroundColor: '#746B5E' }] }></View>

                        <View style={ [styles.headerCols, { marginLeft: 10, backgroundColor: '#746B5E' }] }></View>

                    </View>

                    <Text style={ [styles.smallParagraph, { width: 214 }] }>Would you like to activate notifications?</Text>

                    <Image source={require('../assets/images/icons/bell.png')} style={{ width: 43, height: 52, marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}></Image>

                    <View style={{ marginTop: 99, flexDirection: 'row', }}>

                        <TouchableHighlight {...touchProps} style={ [styles.buttonOnPress, { width: 128, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.5)' }] }>

                            <Text style={ [styles.homescreenList, { fontSize: 22 }] }>Yes</Text>

                        </TouchableHighlight>

                        <TouchableHighlight {...touchProps} style={ [styles.buttonOnPress, { width: 128, borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.5)', marginLeft: 10, }] }>

                            <Text style={ [styles.homescreenList, { fontSize: 22 }] }>No</Text>

                        </TouchableHighlight>

                    </View>

                </View>

                <Image source={require('../assets/images/menu-btm.png')} style={{ width: '100%', height: 107, position: 'absolute', bottom: -75, left: 0 }}></Image>

            </View>

            <TouchableOpacity style={ [styles.button, { marginTop: 135, backgroundColor: 'rgba(244, 90, 7, 0.3)' }] }>
                
                <Text style={ styles.buttonText }>Next</Text>

                {/* <Text style={ styles.buttonText }>Submit</Text> */}
			
            </TouchableOpacity>

            {/* <TouchableOpacity style={ [styles.button, { marginTop: 135, backgroundColor: 'rgb(244, 90, 7)' }] }>
                
                <Text style={ styles.buttonText }>Next</Text>

                <Text style={ styles.buttonText }>Submit</Text>
			
            </TouchableOpacity> */}

        </View>

    );

}

const styles = StyleSheet.create({
    menuContainer: {
        alignItems: 'center',
        backgroundColor: '#BAAC98',
        paddingTop: 33,
        paddingBottom: 76,
        maxHeight: 447,
        borderRadius: 10,
        margin: 5,
        position: 'relative',
        height: 447,
    },
    smallHeading: {
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: '800',
        fontSize: 12,
        fontFamily: 'Raleway-Bold',
        letterSpacing: 0.24,
    },
    smallParagraph: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 19,
        maxWidth: 254,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        letterSpacing: 0.4,
        fontWeight: '500',
        color: '#2C2924',
        fontFamily: 'Raleway-Medium',
    },
    homescreenList: {
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 26,
        fontWeight: '400',
        textAlign: 'center',
        letterSpacing: 0.4,
        lineHeight: 30,
        fontFamily: 'Raleway-Regular',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#E05A07',
        width: 159,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 18,
        paddingBottom: 18,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.4,
        lineHeight: 19,
        fontFamily: 'Raleway-Medium',
    },
    buttonOnPress: {
        width: 253,
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 13,
    },
    headerCols: {
        backgroundColor: '#fff', 
        width: 42, 
        height: 4,
        borderRadius: '10',
    },
    textInput: {
        backgroundColor: '#fff',
        paddingTop: 12,
        paddingBottom: 13,
        textAlign: 'center',
        borderRadius: 8,
        marginTop: 60,
        fontSize: 20,
        letterSpacing: 0.4,
        lineHeight: 26,
        width: 253,
        fontFamily: 'Raleway-Regular',
    },
    errorMessage: {
        marginTop: 20,
        textTransform: 'uppercase',
        maxWidth: 178,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        letterSpacing: 0.4,
        lineHeight: 19,
        fontFamily: 'Raleway-Medium',
        fontSize: 16,
    },
  });
