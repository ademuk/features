const mockProjects = [
  {
    id: 'id1',
    name: 'First loaded project'
  }
];

const mockProject = function (id) {
  return {
    id,
    name: 'First loaded project',
    description: 'foo'
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