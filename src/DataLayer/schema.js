const getProjectMeta = (_reqData) => {
  const { projectMeta } = _reqData;
  let meta = {
    startDate: "",
    endDate: "",
    status: "",
    estimatedTime: "",
    actualTime: "",
    createdOn: "",
    createdBy: "",
  };

  meta = projectMeta;

  return meta;
};
