import PushNotification from "react-native-push-notification";

export const sendMessage = ({ text }) => {

  var channel = PushNotification.getChannels(function (channel_ids) {
    console.log(channel_ids); // ['channel_id_1']
    channel = channel_ids
    console.log('channel', channel_ids)
  });
  PushNotification.channelExists(channel, function (exists) {

    console.log(exists); // true/false
  });

  PushNotification.createChannel(
    {
      channelId: toString(channel), // (required)
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );
  PushNotification.localNotification({
    channelId: toString(channel),
    title: text, // (optional)
    message: "Success", // (required)

  });
}
