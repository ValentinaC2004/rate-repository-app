import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import Theme from './theme'


const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container} >
        <Image style={styles.imagen} source={{ uri: props.image }}  />
            <StyledText  fontSize='subheading' fontWeight='bold'>FullName:{props.fullName}</StyledText>
            <StyledText >Description: {props.description}</StyledText>
                    <RepositoryStats {...props}/>
                    
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    backgroud: {
        backgroundColor: Theme.colors.primary,
        color: Theme.colors.white

    },
    imagen: {
        width:48,
        height:48,
        borderRadius:100
    }
})

export default RepositoryItem