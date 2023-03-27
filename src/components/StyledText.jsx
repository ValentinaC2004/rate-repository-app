import React from 'react'
import Theme from './theme'
import { Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize:12,
        color: Theme.colors.textPrimary,
        fontSize: Theme.fontSizes.body,
        fontFamily: Theme.fonts.main,
        fontWeight: Theme.fontWeights.normal
    },
    colorPrimary: {
        color: Theme.colors.primary
    },
    colorSecondary: {
        color: Theme.colors.textSecondary
    },
    bold: {
        fontWeight: Theme.fontWeights.bold
    },
    subheading: {
        fontSize: Theme.fontSizes.subheading
    }
})

export default function StyledText({children,color,fontSize,fontWeight,style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style
       
    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )
}
