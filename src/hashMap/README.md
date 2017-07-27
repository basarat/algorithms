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



* Create a dictionary:
  * Quite commonly beginners will simply {}. Don't do that because it has prototype methods e.g. "toString"
  * Lets implement `hasKey` and show and example where it will go horribly wrong.
  * Reason is that `toString` exists on the object prototype `({}).toString === Object.prototype.toString`
  * The propery way to create an object for useage as a dictionary is to use `Object.create(null)`

