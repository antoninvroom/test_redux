import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

const facebookParams = 'id';

export function getInfo() {
  return new Promise((resolve, reject) => {
    const profileInfoCallback = (error, profileInfo) => {
      if (error) reject(error);

      resolve(profileInfo);
    };

    const profileInfoRequest =
      new GraphRequest(
        '/me',
        {
          parameters: {
            fields: {
              string: facebookParams,
            },
          },
        },
        profileInfoCallback
      );

    new GraphRequestManager().addRequest(profileInfoRequest).start();
  });
}

export function facebookLogin() {
  return new Promise((resolve, reject) => {
    LoginManager.logInWithReadPermissions(['public_profile', 'user_friends', 'email'])
    .then((FBloginResult) => {
      if(FBloginResult.isCancelled){
        reject('error: login cancelled');
      }
      if(FBloginResult.deniedPermissions){
        reject('error: we need permission to connect');
      }
      return AccessToken.getCurrentAccessToken();
      /*getInfo().then((userDetails) => {
        resolve(userDetails);
      }).catch((requestError) => {
        reject(requestError);
      });*/
    })
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
  });
}

export function facebookLogout() {
  return new Promise((resolve) => {
    LoginManager.logOut();
    return resolve();
  });
}
