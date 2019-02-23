import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, HeaderBackButton } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddMediaTab from './AddMediaTab'
import HomeTab from './HomeTab'
import LikesTab from './LikesTab'
import ProfileTab from './ProfileTab'
import SearchTab from './SearchTab'
import EditProfile from './EditProfile'

export default class Main extends React.Component {

  render() {
    //const profilePictureURL = this.state.profilePicture;
    return (
      <AppTabNavigator />
    );
  }
}

const navigationOptionsEditProfile = ({ navigation }) => ({
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
})

const ProfileTabStackNavigator = createAppContainer(createStackNavigator(
  {
    ProfileTab:{ // view for profile
      screen: ProfileTab,
      navigationOptions: {
        headerTitleStyle: { alignSelf: 'center', flex:1},
        headerStyle: {
          backgroundColor:'#FFB6C1',
        },
        title: 'Profile',
      },
    },

    EditProfile:{ // view for edit profile, which is inside profile view
      screen: EditProfile,
      navigationOptionsEditProfile
    }
  }
));

const LikesTabStackNavigator = createAppContainer(createStackNavigator(
  {
    LikesTab:{
      screen: LikesTab,
      navigationOptions: { // options for header
        title: 'Likes',
        headerStyle: {
          backgroundColor:'#FFB6C1',
        },
        headerTitleStyle: { alignSelf: 'center', flex:1 },
      } 
    }
  }
));

const HomeTabStackNavigator = createAppContainer(createStackNavigator(
  {
    HomeTab:{
      screen: HomeTab,
      navigationOptions: {// options for header
        title: 'Home',
        headerStyle: {
          backgroundColor:'#FFB6C1',
        },
        headerTitleStyle: { alignSelf: 'center', flex:1 },
      }
    }
  }
));

const SearchTabStackNavigator = createAppContainer(createStackNavigator(
  {
    SearchTab:{
      screen: SearchTab,
      navigationOptions: {// options for header
        title: 'Search',
        headerStyle: {
          backgroundColor:'#FFB6C1',
        },
        headerTitleStyle: { alignSelf: 'center', flex:1 },
      }
    }
  }
));

const AddMediaTabStackNavigator = createAppContainer(createStackNavigator(
  {
    AddMediaTab:{
      screen: AddMediaTab,
      navigationOptions: {// options for header
        title: 'Media',
        headerStyle: {
          backgroundColor:'#FFB6C1',
        },
        headerTitleStyle: { alignSelf: 'center', flex:1},
      }
    }
  }
));

const AppTabNavigator = createAppContainer(createBottomTabNavigator(
    {

      HomeTab: {
          screen: HomeTabStackNavigator,
          navigationOptions: {
            tabBarIcon: ({focused}) => ( // insert image for the home button
              <Image style={{ width: 58, height: 58 }} 
                     source={focused? require('./assets/images/house_colored.png'): require('./assets/images/house.png')} />
            )
          }
      },

      // search tab is not necessary in bottom tab bar
      // SearchTab: {
      //     screen: SearchTabStackNavigator,
      // },

      AddMediaTab: {
          screen: AddMediaTabStackNavigator,
          navigationOptions: {
            tabBarIcon: ({focused}) =>(
              focused? 
            <Image style={{ width: 54, height: 54 }} source={require('./assets/images/camera_colored.png')} />:
            <Image style={{ width: 54, height: 54 }} source={require('./assets/images/camera.png')} />
            )}
      },

      // likes tab is not necessary in bottom tab bar
      // LikesTab: {
      //     screen: LikesTabStackNavigator,
      // },

      ProfileTab: {
          screen: ProfileTabStackNavigator,

          navigationOptions: {
            tabBarIcon: ({focused}) => 
              <Image style={{ width: 54, height: 54 }} 
                    source={focused? require('./assets/images/profile_colored.png'):require('./assets/images/profile.png')} />,
            
          }
      }

    },
    {
      animationEnabled: true,
      swipeEnabled: true,
      tabBarPosition: "bottom",
      tabBarOptions: {
          style: {
            backgroundColor:'#FFB6C1',
          },
          inactiveTintColor: '#d1cece',
          showLabel: false,
          showIcon: true
      }
  }
)
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
