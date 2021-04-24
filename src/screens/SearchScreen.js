import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import SearchBar from '../components/SearchBar';
import NewsItem from '../components/NewsItem';

import newsApi from '../api/news';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [response, setResponse] = useState([]);

    function makeid(length) {
        var result = [];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }

    const requestByString = async (init) => {
        if (term) {
            const res = await newsApi.get(`/everything?q=${term}&apiKey=a01b5d8b6e814ad3a74227e22230109e`);
            if (res && res.data && res.data.articles) {
                setResponse(res.data.articles.map(item => {
                    return { ...item, key: makeid(5) }
                }));
            }
        } else {
            const res = await newsApi.get(`/everything?q=${init}&apiKey=a01b5d8b6e814ad3a74227e22230109e`);
            if (res && res.data && res.data.articles) {
                setResponse(res.data.articles.map(item => {
                    return { ...item, key: makeid(5) }
                }));
            }
        }
    }

    useEffect(() => {
        requestByString("Ramadan");
    }, [])

    return (
        <View style={styles.base}>
            <SearchBar
                term={term}
                setTerm={setTerm}
                requestByString={requestByString}
            />
            <FlatList
                data={response}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => <NewsItem data={item} />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    base: {
        marginBottom: 50,
        paddingBottom: 10
    }
});

export default SearchScreen;