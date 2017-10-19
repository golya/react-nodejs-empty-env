export const actions = {}

actions.RECEIVE_ERROR = 'RECEIVE_ERROR';
actions.receiveError = (error) => ({
  type: actions.RECEIVE_ERROR,
  error
});

actions.RESET_STATE = 'RESET_STATE';
actions.resetState = () => ({
  type: actions.RESET_STATE
});

actions.SELECT_<%= entityUpper %> = 'SELECT_<%= entityUpper %>';
actions.select<%= entityCapital %> = (id) => ({
  type: actions.SELECT_<%= entityUpper %>,
  id
});

actions.CREATE_<%= entityUpper %> = 'CREATE_<%= entityUpper %>';
actions.create<%= entityCapital %> = (<%= entityLower %>) => ({
  type: actions.CREATE_<%= entityUpper %>,
  <%= entityLower %>
});

actions.UPDATE_<%= entityUpper %> = 'UPDATE_<%= entityUpper %>';
actions.update<%= entityCapital %> = (<%= entityLower %>) => ({
  type: actions.UPDATE_<%= entityUpper %>,
  <%= entityLower %>
});

actions.DELETE_<%= entityUpper %> = 'DELETE_<%= entityUpper %>';
actions.delete<%= entityCapital %> = (id) => ({
  type: actions.DELETE_<%= entityUpper %>,
  id
});

actions.RECEIVE_<%= entitiesUpper %> = 'RECEIVE_<%= entitiesUpper %>';
actions.receive<%= entitiesCapital %> = (<%= entitiesLower %>) => ({
  type: actions.RECEIVE_<%= entitiesUpper %>,
  <%= entitiesLower %>
});

