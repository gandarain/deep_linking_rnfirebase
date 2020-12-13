# Deep Linking React Native Android
This is an example deep link from open notification firebase.
When the app get an notification, it will open spesific screen and show the parameter from that deep link.

For testing, put the deep link inside body notification, like this,
````
body: "demo://app/profile/1001"
title: "Testing Notification"
````

# How to run
- generate firebase project
- your app name should "com.rn_deep_link"
- for SHA1, you can generate from this command "cd android && ./gradlew signingReport"
- detail for setup firebase project (https://rnfirebase.io/)
- react-native start react-native run-android
- npx uri-scheme open demo://app/profile/1001 --android (try this command to test deep link)
- after firebase project already generate, try to push notification from firebase console, this is will be your notification
````
body: "demo://app/profile/1001"
title: "Testing Notification"
````

# Resource
- https://rnfirebase.io/
- https://www.youtube.com/watch?v=s8YaclRknYw
