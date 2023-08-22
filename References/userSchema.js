const userSchema = {
  name: "user",
  emailId: "user@example.com",
  phoneNumber: "123",
  password: "password",
  role: "administrator",
  isUserVerified: false,
  projects: [
    {
      as: "Developer",
      projectId: "ObjectId",
      epics: [
        {
          epicId: "ObjectId",
          tasks: ["ObjectId"],
        },
      ],
    },
  ],
  userAgent: {
    browser: "Mozilla/5.0 (Macintosh; Intel Mac",
    lastLogin: "2013-",
  },
  created_at: "timestamp",
  updated_at: "timestamp",
};
