const mockProjects = [
  {
    id: 'id1',
    name: 'Project 1'
  }
];

const mockProject = function (id) {
  return {
    id,
    name: 'Project 1',
    description: 'Project 1 description'
  };
};

const mockFeatures = [
  {
    id: 'id1',
    name: 'Feature A'
  },
  {
    id: 'id2',
    name: 'Feature B'
  }
];

const mockFeature = function (id) {
  return {
    id,
    name: 'Feature A',
    description: 'Feature A description',
    text: 'Feature: Feature A\n\nGiven When Then'
  };
};

export function loadProjects() {
  return (dispatch) => {
    // HTTP GET here
    setTimeout(() => {
      dispatch({
        type: 'LOAD_PROJECTS',
        projects: mockProjects
      });
    }, 500);
  };
}

export function loadProject(id) {
  return (dispatch) => {
    // HTTP GET here
    setTimeout(() => {
      dispatch({
        type: 'LOAD_PROJECT',
        project: mockProject(id)
      });
    }, 500);
  };
}

export function createProject(name) {
  return (dispatch) => {
    // HTTP POST here
    setTimeout(() => {
      dispatch({
        type: 'CREATE_PROJECT',
        name: name
      });
    }, 500);
  };
}

export function loadFeatures(projectId) {
  return (dispatch) => {
    // HTTP GET here
    setTimeout(() => {
      dispatch({
        type: 'LOAD_FEATURES',
        projectId,
        features: mockFeatures
      });
    }, 500);
  };
}

export function loadFeature(projectId, featureId) {
  return (dispatch) => {
    // HTTP GET here
    setTimeout(() => {
      dispatch({
        type: 'LOAD_FEATURE',
        projectId,
        feature: mockFeature(featureId)
      });
    }, 500);
  };
}

export function createFeature(name) {
  return (dispatch) => {
    // HTTP POST here
    setTimeout(() => {
      dispatch({
        type: 'CREATE_FEATURE',
        name: name
      });
    }, 500);
  };
}