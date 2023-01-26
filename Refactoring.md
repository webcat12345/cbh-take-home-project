# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I refactored the `deterministicPartitionKey` to  `normalizePartitionKey`.
- The general start `get` is not proper here. Because the `PartitionKey` can be included in parameter.
- The returned value is the standardized `PartitionKey`, so I added `normalize` and `PartitionKey` in the name.
- `normalize` looks shorter than `standardize`. :)

Thank you for checking my test.
Please let me know the result even if I am not selected.
I am very interested in your process to select a developer.

Best regards
Liu Zhang.
P.S. My email is rango0986@gmail.com