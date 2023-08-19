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
      projectId: ObjectId("id"),
      epics: [
        {
          epicId: ObjectId("id"),
          tasks: [ObjectId("id")],
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
