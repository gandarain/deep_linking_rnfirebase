import React, {useEffect} from 'react';
import {View, Button, Linking} from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function HomeScreen({navigation}) {
  const getFcmRefreshToken = async () => {
    await messaging().onTokenRefresh((token) => {
      console.log('Token FCM ', token);
    });
  };

  const getFcmToken = async () => {
    const tokenFcm = await messaging().getToken();
    if (tokenFcm) {
      console.log('Token FCM ', tokenFcm);
    }
  };

  const permissionFirebaseAndroid = () => {
    messaging()
      .hasPermission()
      .then((enabled) => {
        if (enabled) {
          getFcmToken();
          getFcmRefreshToken();
        }
      });
  };

  const openNotification = () => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      Linking.openURL(remoteMessage.notification.body);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
  };

  const handleNotification = () => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  };

  useEffect(() => {
    permissionFirebaseAndroid();
    handleNotification();
    openNotification();
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', {id: 1})}
      />
    </View>
  );
}
