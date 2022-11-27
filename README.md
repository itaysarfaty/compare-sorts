<pre>Project in progress...</pre>

# About

Content here...

# Supported algorithms

- Bubble Sort
- Merge Sort
- Quick Sort

# Server

**Run** `npm run start:dev`

**Navigate to** `localhost:3000`

# API Endpoints

## `/compare GET`

### Example Return

```json
{
  "size": 1000,
  "trials": 100,
  "results": [
    {
      "name": "Merge Sort",
      "msec": 0.42857
    },
    {
      "name": "Bubble Sort",
      "msec": 1.26954
    }
  ]
}
```

`size` Number of items to sort

`trials` Number of times to run each sort (Returns average execution time)

`results` Average executions in miliseconds for all algorithms

### Query Options

1. `size` **Number** _Default 1000_
2. `trials` **Number** _Default 100_

## `/compare/test GET`

Test all sorting algorithms against JS `Array.sort()`  
_Insertion sort by V8 Engine of Chrome and Merge sort by Mozilla Firefox and Safari_

### Example Return

```json
[
  {
    "name": "Merge Sort",
    "passed": true
  },
  {
    "name": "Bubble Sort",
    "passed": true
  }
]
```

# Abstract Classes

## `Collection<T>`

1. Use **generics** to specify type
2. Requires `min` and `max` **properties**  
_Ristrict the size of the collection_  
3. Requires a `compare` **method** for the type  
_Let's the sorting algorithms know how to compare each item_  
4. Requires a `generate` **method**  
_Let's the client generate a random collection with a specified size_  

## `Sort<T>`
1. Requires a `name` **property**
2. Requires a `sort` **method**  
_A sorting algorithm that returns the final result_

# Interfaces

## `IResult`
`name` **string**  
  
`msec` **number**  
_Milliseconds it took to complete sort_

## `ICompareFn`
`(a: T, b: T): number`  
_A function to compare two items in a collection_  
- a > b **if** result > 0
- a < b **if** result < 0
- a = b **if** result = 0

## `IQuery`
`size` **number**   
_Count of items in a collections_  
  
`trials` **number**  
_How many times to sort the same collection to obtain an average speed_

