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
const map = new Map<string, {cost: number}>();
map.set('foo', {cost: 123});
map.set('bar', {cost: 456});
console.log(map.get('foo')); // {cost: 123}
console.log(map.has('bar')); // true
console.log(map.has('baz')); // false
```

* Create a dictionary:
  * Quite commonly beginners will simply {}. Don't do that because it has prototype methods e.g. "toString"
  * Lets implement `hasKey` and show and example where it will go horribly wrong.
  * Reason is that `toString` exists on the object prototype `({}).toString === Object.prototype.toString`
  * The propery way to create an object for useage as a dictionary is to use `Object.create(null)`

