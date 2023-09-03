class TimeStampsCls {
  constructor() {
    (this.createdOn = {}), (this.updatedOn = {});
  }

  getCreatedOn() {
    return (this.createdOn = {
      date: new Date().toISOString().split("T")[0],
      time: new Date().toISOString().split("T")[1],
    });
  }

  getUpdatedOn() {
    return (this.updatedOn = {
      date: new Date().toISOString().split("T")[0],
      time: new Date().toISOString().split("T")[1],
    });
  }
}

module.exports = TimeStampsCls;
