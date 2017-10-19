import { expect } from 'chai';
import _ from 'lodash';

export default function() {
  this.When('I create <%= entityLower %> "$name"', async function(name) {
    const <%= entityLower %>State = this.container.get('<%= entityLower %>State');
    await this.store.dispatch(<%= entityLower %>State.add<%= entityCapital %>({name}));
    const last<%= entityCapital %> = Object.values(this.store.getState().<%= entitiesLower %>.<%= entitiesLower %>.byId).pop();
    this.context.last<%= entityCapital %>Id = last<%= entityCapital %>._id;
	});

  this.Then('I see the "$name" <%= entityLower %>', async function(name) {
    const <%= entitiesLower %> = this.store.getState().<%= entitiesLower %>.<%= entitiesLower %>.byId;
    const <%= entityLower %> = <%= entitiesLower %>[this.context.last<%= entityCapital %>Id];
    expect(<%= entityLower %>.name).to.eql(name);
	});

  this.When('I update the <%= entityLower %> name to "$newName"', async function (newName) {
    const <%= entitiesLower %> = this.store.getState().<%= entitiesLower %>.<%= entitiesLower %>.byId;
    const <%= entityLower %> = <%= entitiesLower %>[this.context.last<%= entityCapital %>Id];
    const <%= entityLower %>State = this.container.get('<%= entityLower %>State');
    await this.store.dispatch(
      <%= entityLower %>State.update<%= entityCapital %>({
        ...<%= entityLower %>,
        name: newName
      })
    );
  });

  this.When('I delete the <%= entityLower %> "$name"', async function (name) {
    const <%= entitiesLower %> = this.store.getState().<%= entitiesLower %>.<%= entitiesLower %>.byId;
    const <%= entityLower %> = _.find(<%= entitiesLower %>, {name});
    const <%= entityLower %>State = this.container.get('<%= entityLower %>State');
    await this.store.dispatch(<%= entityLower %>State.delete<%= entityCapital %>(<%= entityLower %>._id));
  });

  this.Then('I can not see the "$name" <%= entityLower %>', async function(name){
    const <%= entitiesLower %> = this.store.getState().<%= entitiesLower %>.<%= entitiesLower %>.byId;
    const <%= entityLower %> = _.find(<%= entitiesLower %>, {name});
    expect(<%= entityLower %>).to.be.undefined;
  });

  this.When('I select the <%= entityLower %> "$name"', async function (name){
    const <%= entitiesLower %> = this.store.getState().<%= entitiesLower %>.<%= entitiesLower %>.byId;
    const <%= entityLower %> = _.find(<%= entitiesLower %>, {name});
    const <%= entityLower %>State = this.container.get('<%= entityLower %>State');
    await this.store.dispatch(<%= entityLower %>State.select<%= entityCapital %>(<%= entityLower %>._id));
  });

  this.Then('I can see the "$name" as selected <%= entityLower %>', async function(name){
    const <%= entitiesLower %> = this.store.getState().<%= entitiesLower %>.<%= entitiesLower %>.byId;
    const <%= entityLower %> = _.find(<%= entitiesLower %>, {name});
    expect(<%= entityLower %>._id).to.eql(this.store.getState().<%= entitiesLower %>.selected);
  });

}
