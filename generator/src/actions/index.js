import { username, password } from './secrets';

export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function receiveMemes(json){
  const { memes } = json.data;

  return{
    type: RECEIVE_MEMES,
    memes
  }
}

function fetchMemesJson(){
    return fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
}

export function fetchMemes(){
  return function(dispatch){
    return fetchMemesJson()
      .then(json => dispatch(receiveMemes(json)))
  }
}

export function newMeme(meme){
  return{
    type: NEW_MEME,
    meme
  }
}

function postMemeJson(params){
  params["username"] = username;
  params["password"] = password;

  const bodyParams = Object.key(params).map(key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&');
  console.log(bodyParams);

  return fetch('https://api.imgflip.com/caption_image',{
    method: "POST",
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: bodyParams
  }).then(response => response.json());
}
