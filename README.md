## Supported algorithms

- Bubble Sort
- Merge Sort

## Adding a new collection "Type"

1. Create a class that `extends Collection<someType>`
2. Pass min and max collection size to super in constructor
3. Define a `compare` method for the type
4. Define a `generate` method that accepts a size

## Adding a new algorithm

1. Create a class that `extends Sort<T>`
2. Pass sort name to super in constructor
3. Supply Sort function with 2 params
   1. array: T[]
   2. compare function
