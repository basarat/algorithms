/**
 * A simple JavaScript hashmap
 */
export class HashMap<Key extends number | string, Value>{
  private data: {
    [key: string]: Value
  } = Object.create(null);

  /** Stores the value against the key */
  set(key: Key, value: Value) {
    this.data[key.toString()] = value;
  }

  /** Gets the value against the key (if any) */
  get(key: Key): Value | undefined {
    return this.data[key.toString()];
  }

  /** Removes the key/value pair */
  delete(key: Key) {
    delete this.data[key.toString()];
  }

  /**
   * Returns
   * - true if there is a value stored against the key
   * - false if there is no value stored against the key
   **/
  has(key: Key): boolean {
    return typeof this.data[key.toString()] !== 'undefined';
  }
}
