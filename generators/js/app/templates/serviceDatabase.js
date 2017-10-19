function <%= entityCapital %>(Store) {
  async function add<%= entityCapital %>(data) {
    const Model = await Store.get('<%= entityLower %>');
		const result = await new Model(data).save();
    return result.toObject();
  }

  async function delete<%= entityCapital %>(id) {
    const Model = Store.get('<%= entityLower %>');
    const result = await Model.remove({_id: id});
    return {ok: result.result.ok};
	}

  async function update<%= entityCapital %>(data) {
    const Model = Store.get('<%= entityLower %>');
    return await Model.findOneAndUpdate(
      {_id: data._id},
      data,
      {overwrite: true, new: true}
    ).lean();
  }

  async function get<%= entityCapital %>s() {
    const Model = Store.get('<%= entityLower %>');
    return await Model.find({}).lean();
  }

	return Object.freeze({
    add<%= entityCapital %>,
    delete<%= entityCapital %>,
    update<%= entityCapital %>,
    get<%= entityCapital %>s
	});
}

  <%= entityCapital %>.deps = ['store'];
module.exports = <%= entityCapital %>;
