var webpush = require('web-push');

let idKeys = {
    publicKey: 'BCiHGJfsV3TcPskAKk6V7qYESzhnhi0OKsTYqsZyiPuTLrdDcA7vuXqS5TpqRaHKF2eboNHdZ4ES0shX_VIY66s',        
  privateKey: '2M1oK4r2CkY3YEKUsafFh1MkosDtwVFDZuUffd15ZRQ'
};

webpush.setVapidDetails('mailto:mail@eg.com', idKeys.publicKey , idKeys.privateKey);


const push = (req, res, next) => {

    let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fM3hFcvE1YY:APA91bERLudTS1-Mtsk9O1Piwo541Cn_w9aXNsUl5DID80NZkxQmwzKJCYvxv6_RqTuZct4l31VXoVTNGt2_jbRRFRojQ2Y4j1_qak1jeuQEQUut-AkUxbR_P_fTpCX4_8mVZE1QsDQr","expirationTime":null,"keys":{"p256dh":"BP8hB1OHfxCZVfP93ZsxQ1B6SFxipAAdmeKTn4ratbBGimkchjW2VeaPckIvMML7jB4WyRF6LKO8t73OGv5FWHE","auth":"pw3n2ifzDij-9qf0P2oBew"}}
    webpush.sendNotification(sub, 'test message');
    res.json({message: "notification sent sucessfully"});
};

module.exports = {push};

