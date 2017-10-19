function <%= entitiesCapital %>(container) {
  const implementation = container.get('config').get(<%= entitiesCapital %>.serviceName);
  return container.getImplementation(<%= entitiesCapital %>.serviceName, implementation);
}

<%= entitiesCapital %>.type = 'factory';
module.exports = <%= entitiesCapital %>;
