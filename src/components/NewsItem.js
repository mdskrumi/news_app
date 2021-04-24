import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';


const NewsItem = ({ data }) => {
    const { author, description, publishedAt, title, urlToImage, url } = data;

    const onPress = () => {
        console.log("Opening in web browser.")
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log("Don't know how to open URI: " + url);
            }
        });
    }


    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.base}>
                <View style={styles.subSection} >
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: urlToImage, }}
                    />
                    <Text
                        style={styles.titleText}
                    >
                        {title}
                    </Text>
                </View>
                <Text>{description}</Text>
                <View style={styles.hr} />
                <View style={styles.subSectionBottom} >
                    <Text style={styles.subSectionItemOne}>Author: {author}</Text>
                    <Text style={styles.subSectionItemTwo}>{publishedAt.slice(0, 10)}</Text>
                </View>
            </View >
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    base: {
        margin: 10,
        padding: 10,
        borderWidth: .2,
        borderRadius: 6,
        borderColor: 'black',
        overflow: 'hidden'
    },
    imageStyle: {
        width: 100,
        height: 100,
        flex: 1,
        backgroundColor: 'grey',
    },
    titleText: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
    },
    subSection: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    subSectionBottom: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    subSectionItemOne: {
        flex: 2,
    },
    subSectionItemTwo: {
        flex: 1,
        textAlign: 'right'
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 10,
    }
})

export default NewsItem;