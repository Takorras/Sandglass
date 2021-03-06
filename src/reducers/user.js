const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, name: action.name, profileURL: action.profileURL, accessToken: null }
    case 'FETCH_FLIP_SUCCESS':
      const latestFlip = action.flips[Object.keys(action.flips)[Object.keys(action.flips).length - 1]];
      return { ...state, flips: action.flips, langs: action.langs, latestFlip: latestFlip };
    case 'FETCH_FLIP_TODAY_SUCCESS':
      return { ...state, flipsArrayToday: action.flips };
    case 'FETCH_ACCESS_TOKEN_SUCCESS':
      return { ...state, accessToken: action.accessToken };
    case 'LOGIN_FAILED':
      return { ...state, notAuthorized: true };
    default:
      return state;
  }
}

export default user;
