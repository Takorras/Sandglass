import Moment from 'moment';

export const timerAction = (counting) => {
  return dispatch => {
    counting
      ? dispatch(tick())
      : dispatch(none())
  };
}

export const timerSwitch = () => {
  return {
    type: 'TIMER_BUTTON_SWITCH',
    now: Moment().unix()
  }
}

export const tick = () => {
  return { type: 'TIMER_TICK' }
}

export const none = () => {
  return { type: 'default' }
}

export const init = () => {
  return { type: 'TIMER_INIT' }
}

// Contributions Container
export function fetchContributions(){
  return dispatch => {
    return fetch('https://api.github.com/users/Takorras/events')
      .then(response => response.json())
      .then(json => dispatch(receiveJson(json)))
  }
}

export const receiveJson = (json) => {
  console.log(json);
  return {
    type: 'CONTRIBUTIONS_FETCHED',
    json: json
  }
}

// Tweets container
export const fetchTweets = () => {
  return {
    type: 'TWEETS_FETCHED'
  }
}
