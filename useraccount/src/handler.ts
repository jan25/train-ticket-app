interface ReturnVal {
  ok: boolean;
  errorMessage?: string;
  data?: UserProfile;
}

interface UserProfile {
  userId?: string;
  name?: string;
  email: string;
  phone?: string;
  password?: string;
}

export let handleLogin = (email: string, password: string): ReturnVal => {
  if (password.length < 3) {
    return {
      ok: false,
      errorMessage: "Invalid password",
    };
  }

  return {
    ok: true,
    data: {
      userId: "123",
      name: "Test test",
      email: email,
    },
  };
};

export let getProfile = (userId: string): ReturnVal => {
  if (userId === "0") {
    return {
      ok: false,
      errorMessage: "Invalid userId",
    };
  }
  return {
    ok: true,
    data: {
      userId: "123",
      name: "Test test",
      email: "test@test.com",
    },
  };
};

export let updateProfile = (profile: UserProfile): ReturnVal => {
  return {
    ok: true,
    data: profile,
  };
};

export let createNewUser = (profile: UserProfile): ReturnVal => {
  return {
    ok: true,
    data: profile,
  };
};
