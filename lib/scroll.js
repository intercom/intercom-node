import Bluebird from 'bluebird';

export default class Scroll {
  constructor(client, dataType) {
    this.client = client;
    this.dataType = dataType;
  }
  each(params, f) {
    var self = this;
    this.scroll_param = undefined;

    return new Bluebird(function (resolve, reject) {
      self.eachInternal(params, f, { resolve, reject });
    });
  }
  eachInternal(params, f, promise) {
    var self = this;
    this.client.get(this.scrollUrl(), params)
      .then(function (response) {
        var result = f(response);
        if (response.body[`${self.dataType}s`].length > 0) {
          self.scroll_param = response.body.scroll_param;
          if (result && 'then' in result && typeof result.then === 'function') {
            result.then(function () {
              self.eachInternal(params, f, promise);
            }, function (error) {
              promise.reject(error);
            });
          } else {
            self.eachInternal(params, f, promise);
          }

        } else {
          promise.resolve();
        }
      })
      .catch(function (error) {
        promise.reject(error);
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
