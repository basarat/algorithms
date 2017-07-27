# Create a JavaScript hashmap
> A common interview question to weed out beginner / true expert JavaScript developers is to simply ask them to create a dictionary / hashmap / map in ES5.
> In this lesson we dicuss why `{}` is the wrong way to do it.

Before we begin it is worth pointing out that ES6 has a built in hash map data structure implementation in the form of the `Map` class.

* To demonstrate that built in class, lets create a map of `string` keys and values that are objects that have a `cost` property.
* We store a domain object of cost 123 against the key foo
* We store a domain object of cost 456 against the key bar
* We can retrieve the value against any key using `get`
* We can also check if there is a value stored against a key using the `has` method which returns `true` when there is a key/value pair stored and false otherwise.
```js
const map = new Map<string, { cost: number }>();
map.set('foo', { cost: 123 });
map.set('bar', { cost: 456 });
console.log(map.get('foo')); // {cost: 123}
console.log(map.has('bar')); // true
console.log(map.has('baz')); // false
```
***Delete example***

The great thing about the ES6 map is that it works with non `string` keys as well. It even respects object uniqueness e.g.
* lets say we have two objects `a` and `b` which have the same structure.
* Of course these are two distinct objects as can be demonstrated by a simple equality check
* Lets create an ES6 map with keys of objects that have a name property and values of objects that have a cost property.
* We can store values against these two `a` and `b` objects.
* We can also retrieve the values against these objects. Note that the values are distinct for distinct object references a and b.
* For any queries which don't have a key we get `undefined`.

```js
const a = { name: 'foo' };
const b = { name: 'foo' };
console.log(a === b); // false
const map = new Map<{ name: string }, { cost: number }>();
map.set(a, { cost: 123 });
map.set(b, { cost: 456 });
console.log(map.get(a)); // {cost: 123}
console.log(map.get(b)); // {cost: 456}
console.log(map.get({ name: 'foo' })); // undefined
```
Such a map with O(1) asymtotic access runtime can only be implmented by direct memory addressing, which isn't allowed in userland JavaScript and therefore implemented by JavaScript VMs.

That said we can implement a `string` or `number` keyed hashmap in userland JavaScript quite easily.
* We create a generic class for keys of type number or string, and any `Value` type.
* We will internally store the data as JavaScript object which can be indexed by a string to return a value.
* We add a set method that takes a key of type `Key` anda value of type `Value` and simply stores the value against the key in the internal indexed object.
* We add a get method that takes a key and returns either the value or `undefined` if there is nothing stored against the key. In the method body we simply return the looked up value from the internal index object.
* For delete we simply delete any data stored against the key in the internal data object.
* For the `has` method we simply check if there is a value stored against the key in the internal data object.

```js
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
```

Lets demonstrate it by our simple example as before.

```js
const map = new HashMap<string, { cost: number }>();
map.set('foo', { cost: 123 });
map.set('bar', { cost: 456 });
console.log(map.get('foo')); // {cost: 123}
console.log(map.has('bar')); // true
console.log(map.has('baz')); // false
```
You can see that it works as expected.
***Delete example***

There isn't much to this data structure. Its really all about being familiar with the assumed constant cost of Object access by a string index. The one thing that trips beginners quite commonly is that they will write `{}` instead of `Object.create(null)`

```js
  private data: {
    [key: string]: Value
  } = {};
```

This is wrong because `{}` uses the object prototype, which has members like `toString`.
You can therefore give false positives for prototype methods like `toString`

```js
console.log(({}).toString === Object.prototype.toString); // true
const map = new HashMap<string, { cost: number }>();
console.log(map.has('toString')); // true
```

The proper way to create a prototype free object is `Object.create(null)` which does not suffer from this problem.
