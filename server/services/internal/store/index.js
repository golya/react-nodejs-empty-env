function Store(container) {
  const implementation = container.get('config').get(Store.serviceName);
  return container.getImplementation(Store.serviceName, implementation);
}

Store.type = 'factory';
module.exports = Store;
