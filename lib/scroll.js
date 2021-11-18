export default class Scroll {
  constructor(client, dataType) {
    this.client = client;
    this.dataType = dataType;
  }
  each(params) {
    this.scroll_param = undefined;

    return this.eachInternal(params);
  }

  async eachInternal(params, storedData = []) {
    const {data} = await this.client.get({url: this.scrollUrl(), data: params});
    const dataFromResponse = data[`${this.dataType}s`];
    const combinedData = [...dataFromResponse, ...storedData];

    if (dataFromResponse.length > 0) {
      this.scroll_param = data.scroll_param;
      return this.eachInternal(params, combinedData);
    }

    return combinedData;
  }

  scrollUrl() {
    const baseScrollUrl =`/${this.dataType}s/scroll`

    return typeof this.scroll_param === 'string' && this.scroll_param.length > 0 ? `${baseScrollUrl}?scroll_param=${this.scroll_param}` : baseScrollUrl;
  }
}
