import React from 'react'
import { Image, View,StyleSheet,TouchableOpacity } from 'react-native'
import img from '../../assets/believer.jpg'
import StyledText from './Text'
import Icon from 'react-native-vector-icons/Ionicons'
const ProfileHead = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress} style={styles.container}>
            <Image style={styles.image} source={img}/>
            <View>
                <StyledText style={styles.name} semibold>Anna Steve</StyledText>
                <StyledText style={styles.mode} semibold>Normal</StyledText>
            </View>
            {/* <Ionicons name="chevron-forward" size={24} color="#fff" style={styles.icon}/> */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:16
    },
    image:{
        width:48,
        height:48,
        borderRadius:48/2,
        marginRight:12
    },
    icon:{
        marginLeft:'auto'
    },
    name:{
        fontSize:16,
        lineHeight:16*1.2
    },
    mode:{
        fontSize:12,
        opacity:0.2,
        lineHeight:12*1.2
    }
})
export default ProfileHead
