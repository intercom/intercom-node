export default class Bulk {
  constructor(client, dataType) {
    this.client = client;
    this.dataType = dataType;
  }
  bulkJob(bulkOperations, jobId, f) {
    const dataType = this.dataType;
    const bulkParams = { items: [] };
    const url = `/bulk/${dataType}s`;
    bulkOperations.forEach(function (params) {
      for (let k in params) {
        const data = params[k];
        const method = k === 'create' ? 'post' : k;
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
    if (jobId) {
      bulkParams.job = {
        id: jobId
      };
    }
    return this.client.post(url, bulkParams, f);
  }
  bulk(bulkOperations, f) {
    return this.bulkJob(bulkOperations, null, f);
  }
}
