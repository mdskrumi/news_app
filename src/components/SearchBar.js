import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
    const { term, setTerm, requestByString } = props;

    return (
        <View style={styles.background}>
            <Feather name="search" size={35} />
            <TextInput
                style={styles.input}
                placeholder={'Search Here'}
                value={term}
                onChangeText={(val) => { setTerm(val) }}
                onEndEditing={requestByString}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    background: {
        height: 50,
        backgroundColor: '#F0EEEE',
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: "center",
    },
    input: {
        flexGrow: 1,
        fontSize: 18,
        alignSelf: 'stretch',
        marginStart: 10
    }

});

export default SearchBar;