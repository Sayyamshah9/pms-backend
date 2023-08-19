const projectSchema = {
  project_name: "string",
  project_id: "string",
  description: "string",
  owner_id: "string", // user_id (foreign key to Users table)
  projectMeta: {
    start_date: "date",
    end_date: "date",
    estimatedTime: "Number",
    actualTime: "Number",
    status: "string", // e.g., ongoing, completed
    created_on: "date",
    created_by: "Story creator user",
  },
  sprint: {
    sprintId: "Alphanumeric",
    sprintName: "Example Sprint",
    sprintMeta: {
      start_date: "date",
      end_date: "date",
      estimatedHrs: "Number",
      actualHrs: "Number",
      status: "string",
      created_on: "date",
      created_by: "Story creator user",
    },
  },
  members: [
    {
      user_id: ' ObjectId("example")', // user
      user_email: "user@example.com",
      role: "administ",
    },
  ],
  epics: [
    {
      epicName: "epic1",
      epicId: ' ObjectId("example")',
      epicDescription: "Example",
      epicMeta: {
        allocatedTo: "User",
        start_date: "date",
        end_date: "date",
        estimatedTime: "Number",
        actualTime: "Number",
        status: "string", // e.g., ongoing, completed
        created_on: "date",
        created_by: "Story creator user",
      },
      stories: [
        {
          storyName: "Story1",
          storyId: ' ObjectId("example")',
          story_description: "Story description",
          storyMeta: {
            allocatedTo: "User",
            start_date: "date",
            end_date: "date",
            estimatedTime: "Number",
            actualTime: "Number",
            status: "string", // e.g., ongoing, completed
            created_on: "date",
            created_by: "Story creator user",
          },
          tasks: [
            {
              taskName: "Task1",
              taskId: ' ObjectId("example")',
              task_description: "Task Description",
              taskType: "Bug | CR | SubTasks",
              sprintId: "forigen Key from sprint collection",
              task_status: "in Dev",
              attachments: [],
              taskMeta: {
                allocatedTo: "User",
                start_date: "date",
                end_date: "date",
                estimatedTime: "Number",
                actualTime: "Number",
                status: "string", // e.g., ongoing, completed
                created_on: "date",
                created_by: "Story creator user",
              },
            },
          ],
        },
      ],
    },
  ],
  created_at: "timestamp",
  updated_at: "timestamp",
};
