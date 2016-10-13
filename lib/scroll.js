export default class Scroll {
  constructor(client, dataType) {
    this.client = client;
    this.dataType = dataType;
  }
  each(params, f) {
    this.scroll_params = undefined;
    this.eachInternal(params, f);
  }
  eachInternal(params, f) {
    var self = this;
    this.client.get(this.scrollUrl(), params).then(function (res) {
      f(res);
      if (res.body[`${self.dataType}s`].length > 0) {
        self.scroll_param = res.body.scroll_param;
        self.eachInternal(params, f);
      }
    });
  }
  scrollUrl() {
    const dataType = this.dataType;
    if (typeof this.scroll_param !== 'undefined') {
      return `/${dataType}s/scroll?scroll_param=${this.scroll_param}`;
    } else {
      return `/${dataType}s/scroll`;
    }
  }
}
