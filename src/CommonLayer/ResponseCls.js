class ResponseCls {
  constructor() {
    (this.data = null), (this.error = null);
  }

  getSanitizedRes(_key, _msg) {
    let resObj = {};
    if (_key && _msg && _key instanceof Array && _msg instanceof Array) {
      for (let i = 0; i < _key.length; i++) {
        resObj[_key[i]] = _msg[i];
      }
    } else {
      resObj[_key] = _msg;
    }
    return resObj;
  }
}

module.exports = ResponseCls;
