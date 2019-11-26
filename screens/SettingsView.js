import React from 'react';
import {
  StyleSheet,
  Text,
    View,
    TouchableOpacity
} from 'react-native';
import leftPad from 'left-pad';



export default class SettingsView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            backgroundColor : '#1a1a1a',
            textColor: '#FFFFFF',
            borderColor: '#f5a638',
        }
    }

    render() {

        return (
            <View style={this.containerStyle(this.state)}>
                <View style={{ margin: 20 }}>
                    <Text style={this.headerStyle(this.state)} >Settings</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text style={this.textStyle(this.state)}> Select a background colour</Text>
                        <View style={{ flew: 1, flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                backgroundColor: "white"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("white")}></View>    
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    backgroundColor: "black"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("black")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    backgroundColor: "grey"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("grey")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    backgroundColor: "red"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("red")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    backgroundColor: "blue"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("blue")}></View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.row}>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    backgroundColor: "green"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("green")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    backgroundColor: "yellow"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("yellow")}></View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={this.borderStyle(this.state)}></View>
                    

                    <View style={{ flex: 1, flexDirection: "column", alignItems: "center"}}>
                        <Text style={this.textStyle(this.state)}> Select a font colour</Text>
                        <View style={{ flew: 1, flexDirection: "row", width: "100%" }}>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    textColor: "white"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("white")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    textColor: "black"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("black")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    textColor: "grey"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("grey")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    textColor: "red"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("red")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    textColor: "blue"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("blue")}></View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.row}>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    textColor: "green"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("green")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    textColor: "yellow"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("yellow")}></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={this.borderStyle(this.state)}></View>

                    <View style={{ flex: 1, flexDirection: "column" }}>
                        <Text style={this.textStyle(this.state)}> Select an outline colour</Text>
                        <View style={{ flew: 1, flexDirection: "row", alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    borderColor: "white"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("white")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    borderColor: "black"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("black")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    borderColor: "grey"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("grey")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    borderColor: "red"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("red")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    borderColor: "blue"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("blue")}></View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.row}>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    borderColor: "green"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("green")}></View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    borderColor: "yellow"
                                })}
                                style={style.button}>
                                <View style={this.themePreview("yellow")}></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            
      );
  }

    headerStyle = function (state) {
        return {
            color: state.textColor,
            textAlign: "center",
            fontSize: 25,
            paddingBottom: 20
        }
    }

    containerStyle = function (state) {
        return {
            height: '100%',
            backgroundColor: state.backgroundColor,
            alignItems: "center"
        }
    }

    themePreview = function (color, state) {
        return {
            margin: 5,
            height: 35,
            width: 35,
            backgroundColor: color,
            borderColor: this.state.borderColor,
            borderWidth:1
        }
    }


    textStyle = function (state) {
        return {
            fontSize: 15,
            color : state.textColor,
            margin:5,
            paddingBottom: 5,
            textAlign : 'center'
        }
    }

    borderStyle = function (state) {
        return {
            height: '100%',
            width: 1,
            backgroundColor: state.borderColor
        }
    }

};


const style = StyleSheet.create({
    button: {
        margin: 1
    },
    row:{
         flex:1,
         flexDirection:"row",
         width: "100%",

    }
})
