import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Button} from "react-native";
import firebase from './Firebase'

//The reference to the root of the database, which is "Users"
const rootRef = firebase.database().ref();

class ProfileTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      //Initialize the state "displayName" to nothing for now
      //we want to eventually print "Hello <displayName>"
      displayName: "",
      displayBio: ""
    }
  }


  componentDidMount(){
    //get logged-in user
    var loginFile = require('./Login');

    //get reference to the logged in user from database
    const userRef = rootRef.child('Users/' + loginFile.loggedInUser);
  
    userRef.on("value", (childSnapshot) => {
      this.setState({
        displayName: childSnapshot.val().first_name + " " + childSnapshot.val().last_name, //set displayName to "Thomas Munduchira"
        profilePicture: childSnapshot.val().profile_picture,
        displayBio: childSnapshot.val().biography
      })
    })
  }

  render(){
    return(
      <View style={styles.container}>
        {/* Display "Hello Thomas Munduchira" */}
        <Image style={{width: 200, height: 200}} source={{uri: this.state.profilePicture}}/>
        <Text>{this.state.displayName}</Text>
        <Text>{this.state.displayBio}</Text>
        <Text>{'\n'}</Text>
        <Button title="Edit Profile" onPress={() => this.props.navigation.navigate('EditProfile')} />
      </View>
    )
  }

}

export default ProfileTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
