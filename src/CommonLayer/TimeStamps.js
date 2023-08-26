class TimeStampsCls {
  constructor() {
    (this.created_at = {}), (this.updated_at = {});
  }

  getCreatedAt() {
    return (this.created_at = {
      date: new Date().toISOString().split("T")[0],
      time: new Date().toISOString().split("T")[1],
    });
  }

  getUpdatedAt() {
    return (this.updated_at = {
      date: new Date().toISOString().split("T")[0],
      time: new Date().toISOString().split("T")[1],
    });
  }
}

module.exports = TimeStampsCls;
