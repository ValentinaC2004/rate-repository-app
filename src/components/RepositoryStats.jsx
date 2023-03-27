import React from "react"
import { View } from "react-native"
import StyledText from "./StyledText"
import { StyleSheet } from "react-native"
import Theme from "./theme"

const parseThousands = value => {
    return value >= 1000 ? `$(Math.round(value / 100)/10)k`:String(value)
}

const RepositoryStats =  props => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View>
            <StyledText  fontWeight='bold'>forks</StyledText>
            <StyledText >{parseThousands(props.forksCount)}</StyledText>
            </View>
            <View>
            <StyledText style={styles.backgroud}  fontWeight='bold'>Language</StyledText>
            <StyledText >{props.language}</StyledText>
            
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    backgroud: {
        backgroundColor: Theme.colors.primary,
        color: Theme.colors.white,
        padding: 5,
        overflow:'hidden',
        borderRadius:4

    }
})
export default RepositoryStats