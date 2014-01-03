### name
Type: `String`
Default value: `undefeined`

The name to be modified

### patterns
Type: `Array`
Default value: `[]`

List of patterns to be removed from the name.


## Usage Examples

### Example `grunt-readme`
"grunt-readme" => "readme"

```js
var newName = _.safename('grunt-readme');
```

### Example `foo-bar`
"foo-bar" => "bar"

```js
var newName = _.safename('foo-bar', ['foo']);
```