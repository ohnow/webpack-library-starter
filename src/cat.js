export default class Cat {
  constructor() {
    this._name = 'Cat';
  }
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
}
