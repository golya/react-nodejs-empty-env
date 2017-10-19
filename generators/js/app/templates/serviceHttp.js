function <%= entityCapital %>Http(config) {

  const baseUrl = config.get('baseUrl');

  async function get<%= entityCapital %>s() {
    const result = await fetch(
      `${baseUrl}/<%= entitiesLower %>/`,
      {}
    );
    return await result.json();
  }

  async function add<%= entityCapital %>(<%= entityLower %>) {
    const data = JSON.stringify(<%= entityLower %>);
    const result = await fetch(`${baseUrl}/<%= entitiesLower %>`, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    return await result.json();
  }

  async function update<%= entityCapital %>(<%= entityLower %>) {
    const data = JSON.stringify(<%= entityLower %>);
    const result = await fetch(`${baseUrl}/<%= entitiesLower %>/${<%= entityLower %>._id}`, {
      method: "PUT",
      body: data,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    return await result.json();
  }

  async function delete<%= entityCapital %>(id) {
    const result = await fetch(`${baseUrl}/<%= entitiesLower %>/${id}`, {
      method: "DELETE",
    });
    return await result.json();
  }

  return Object.freeze({
    get<%= entityCapital %>s,
    add<%= entityCapital %>,
    update<%= entityCapital %>,
    delete<%= entityCapital %>
  });
}

  <%= entityCapital %>Http.deps = ['config'];
module.exports = <%= entityCapital %>Http;
