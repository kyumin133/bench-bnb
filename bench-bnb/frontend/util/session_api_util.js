const SessionAPIUtil = {
  signup: (user) => {
    return $.ajax({
      url: "api/users",
      type: "POST",
      data: { user: user }
    });
  },

  login: (user) => {
    return $.ajax({
      url: "api/session",
      type: "POST",
      data: { user: user }
    });
  },

  logout: () => {
    return $.ajax({
      url: "api/session",
      type: "DELETE"
    })
  }
}

export default SessionAPIUtil;
