import {actions} from './actions';
import {getStore} from './reducers';

function <%= entitiesCapital %>State(<%= entitiesLower %>) {

  const get<%= entitiesCapital %> = () => async (dispatch) => {
    const <%= entityLower %>List = await <%= entitiesLower %>.get<%= entitiesCapital %>()
    dispatch(actions.receive<%= entitiesCapital %>(<%= entityLower %>List));
  }

  const add<%= entityCapital %> = (data) => async (dispatch) => {
    const result = await <%= entitiesLower %>.add<%= entityCapital %>(data);
    if (!result) {
      dispatch(actions.receiveError('Could not add the <%= entityLower %>'));
    } else {
      dispatch(actions.create<%= entityCapital %>(result));
    }
  }

  const update<%= entityCapital %> = (data) => async (dispatch) => {
    const result = await <%= entitiesLower %>.update<%= entityCapital %>(data);
    if (!result) {
      dispatch(actions.receiveError('Could not update the <%= entityLower %>'));
    } else {
      dispatch(actions.update<%= entityCapital %>(result));
    }
  }

  const delete<%= entityCapital %> = (id) => async (dispatch) => {
    const result = await <%= entitiesLower %>.delete<%= entityCapital %>(id);
    if (!result.ok) {
      dispatch(actions.receiveError('Could not delete the <%= entityLower %>'));
    } else {
      dispatch(actions.delete<%= entityCapital %>(id));
    }
  }

  const select<%= entityCapital %> = (id) => async (dispatch) => {
    dispatch(actions.select<%= entityCapital %>(id));
  }

	return Object.freeze({
    get<%= entitiesCapital %>,
    add<%= entityCapital %>,
    update<%= entityCapital %>,
    delete<%= entityCapital %>,
    select<%= entityCapital %>,
    store: getStore(actions),
	});
}

<%= entitiesCapital %>State.deps = ['<%= entitiesLower %>'];
module.exports = <%= entitiesCapital %>State;
