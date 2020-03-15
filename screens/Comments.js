import React, { Component } from 'react'
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Comment from '../components/Comment'
import * as navigation from '../rootNavigation'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollEnabled: true
        }
    }
    componentDidMount() {
    }
    onPressBtnBackHandler() {
        navigation.goBack()
    }
    onScrollHandler(event) {
        if (event.nativeEvent.contentOffset.y === 0) {
            // this.setState({
            //     ...this.state,
            //     scrollEnabled: false
            // })
            // navigation.goBack()
        }
    }
    render() {
        const { comments } = this.props.route.params
        return (
            <View>
                <View style={styles.navigationStackBar}>
                    <TouchableOpacity onPress={this.onPressBtnBackHandler} style={styles.btnBack}>
                        <FontAwesome5Icon name="arrow-left" size={24}></FontAwesome5Icon>
                    </TouchableOpacity>
                    <View style={styles.stackBarTitle}>
                        <Text style={{ fontSize: 16 }}>Comments</Text>
                    </View>
                </View>
                <ScrollView  onScroll={this.onScrollHandler.bind(this)} scrollEnabled={this.state.scrollEnabled} style={styles.container}>
                    {comments.map((comment, index) => (
                        <Comment key={index} comment={comment}>Detail</Comment>
                    ))}
                </ScrollView>
            </View>
        )
    }
}
const screenWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom:30,
        backgroundColor: '#ffffff',
    },
    navigationStackBar: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    btnBack: {
        zIndex: 99
    },
    stackBarTitle: {
        position: 'absolute',
        width: screenWidth,
        justifyContent: 'center',
        flexDirection: 'row',
    }
})
