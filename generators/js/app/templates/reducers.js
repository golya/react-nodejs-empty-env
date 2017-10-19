import _ from 'lodash';

export const getStore = (actions) => {
  const defaultState = {
    <%= entitiesLower %>: {byId: {}},
    selected: null,
    errors: []
  };
  return (state = defaultState, action) => {
    switch(action.type) {
      case(actions.RECEIVE_<%= entitiesUpper %>):{
        const <%= entitiesLower %> = {};
        action.<%= entitiesLower %>.map((<%= entityLower %>)=>{
          <%= entitiesLower %>[<%= entityLower %>._id] = <%= entityLower %>;
        });
        return {
          ...state,
          <%= entitiesLower %>: {byId: <%= entitiesLower %>},
        };
      }
      case(actions.SELECT_<%= entityUpper %>):
        return {
          ...state,
          selected: action.id,
        }
      case (actions.UPDATE_<%= entityUpper %>):
      case (actions.CREATE_<%= entityUpper %>): {
        return {...state,
          <%= entitiesLower %>: {
            byId: {...state.<%= entitiesLower %>.byId, [action.<%= entityLower %>._id]: action.<%= entityLower %>}
          }
        }
      }
      case (actions.DELETE_<%= entityUpper %>):
        return {...state,
          <%= entitiesLower %>:{
            byId: _.omit(state.<%= entitiesLower %>.byId, action.id)
          },
          selected: null
        }
      case (actions.RESET_STATE): {
        return defaultState;
      }
      case (actions.RECEIVE_ERROR): {
        return {...state, errors: [...state.errors, action.error]};
      }
      default:
        return state;
    }
  }
}
