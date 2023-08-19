const schema = {
  // Users
  users: {
    user_id: "string",
    username: "string",
    email: "string",
    password: "string",
    role: "string", // e.g., admin, member, etc.
    profile_image: "string",
    created_at: "timestamp",
    updated_at: "timestamp",
  },

  // Projects
  projects: {
    project_id: "string",
    project_name: "string",
    description: "string",
    start_date: "date",
    end_date: "date",
    status: "string", // e.g., ongoing, completed
    owner_id: "string", // user_id (foreign key to Users table)
    created_at: "timestamp",
    updated_at: "timestamp",
  },

  // Tasks
  tasks: {
    task_id: "string",
    task_name: "string",
    description: "string",
    due_date: "date",
    status: "string", // e.g., to-do, in progress, completed
    project_id: "string", // project_id (foreign key to Projects table)
    assigned_to: "string", // user_id (foreign key to Users table)
    created_by: "string", // user_id (foreign key to Users table)
    created_at: "timestamp",
    updated_at: "timestamp",
  },

  // Comments
  comments: {
    comment_id: "string",
    task_id: "string", // task_id (foreign key to Tasks table)
    user_id: "string", // user_id (foreign key to Users table)
    comment_text: "string",
    created_at: "timestamp",
  },

  // Attachments
  attachments: {
    attachment_id: "string",
    task_id: "string", // task_id (foreign key to Tasks table)
    file_name: "string",
    file_path: "string",
    file_type: "string",
    created_at: "timestamp",
  },

  // Labels or Tags
  labels: {
    label_id: "string",
    label_name: "string",
    label_color: "string",
  },

  // Priority
  priorities: {
    priority_id: "string",
    priority_name: "string",
  },

  // Subtasks
  subtasks: {
    subtask_id: "string",
    subtask_name: "string",
    task_id: "string", // task_id (foreign key to Tasks table)
  },

  // Milestones
  milestones: {
    milestone_id: "string",
    milestone_name: "string",
    due_date: "date",
    project_id: "string", // project_id (foreign key to Projects table)
  },

  // Project Members (if not handled through teams)
  project_members: {
    project_member_id: "string",
    project_id: "string", // project_id (foreign key to Projects table)
    user_id: "string", // user_id (foreign key to Users table)
    role: "string", // e.g., project owner, contributor
  },

  // Time Tracking
  time_tracking: {
    time_entry_id: "string",
    task_id: "string", // task_id (foreign key to Tasks table)
    user_id: "string", // user_id (foreign key to Users table)
    start_time: "timestamp",
    end_time: "timestamp",
    total_time: "number", // calculated field
  },

  // Notifications
  notifications: {
    notification_id: "string",
    user_id: "string", // user_id (foreign key to Users table)
    message: "string",
    is_read: "boolean",
    created_at: "timestamp",
  },

  // Activity Log
  activity_log: {
    log_id: "string",
    action: "string", // e.g., create, update, delete
    entity_type: "string", // e.g., task, project
    entity_id: "string", // foreign key to respective table
    user_id: "string", // user_id (foreign key to Users table)
    log_details: "string",
    created_at: "timestamp",
  },

  // Project Templates
  project_templates: {
    template_id: "string",
    template_name: "string",
    template_description: "string",
    task_templates: "json", // JSON or serialized data containing predefined tasks and subtasks
  },

  // Client or Customer Details (if applicable)
  clients: {
    client_id: "string",
    client_name: "string",
    contact_person: "string",
    email: "string",
    phone: "string",
  },

  // Budget and Expenses (if managing project costs)
  expenses: {
    expense_id: "string",
    project_id: "string", // project_id (foreign key to Projects table)
    description: "string",
    amount: "number",
    expense_date: "date",
  },

  // File Versioning (if managing multiple file versions)
  file_versions: {
    file_version_id: "string",
    attachment_id: "string", // attachment_id (foreign key to Attachments table)
    version_number: "number",
    file_path: "string",
    created_at: "timestamp",
  },
};
