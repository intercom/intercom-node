export default class Bulk {
  constructor(client, dataType) {
    this.client = client;
    this.dataType = dataType;
  }
  bulk(bulkOperations, f) {
    let dataType = this.dataType;
    let bulkParams = { items: [] };
    let url = `/bulk/${dataType}s`;
    bulkOperations.forEach(function (params) {
      for (var k in params) {
        let data = params[k];
        let method = k === 'create' ? 'post' : k;
        if (method !== 'post' && method !== 'delete') {
          throw new Error(`Unknown bulk type: ${method}`);
        }
        bulkParams.items.push({
          method: method,
          data_type: dataType,
          data: data
        });
      }
    });
    return this.client.post(url, bulkParams, f);
  }
}
