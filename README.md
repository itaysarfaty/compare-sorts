<pre>Project in progress...</pre>

# About 
Content here...

# Supported algorithms

- Bubble Sort
- Merge Sort
  
# Server
**Run**  `npm run start:dev`  
  
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
 Test all sorting algorithms against JS `Array.Sort()`
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
2. Requires `min` and `max` **params**
3. Requires a `compare` **method** for the type
4. Requires a `generate` **method** that accepts a size
  
  
## `Sort<T>`
:warning: - Must not modify existing array </pre> 
1. Requires a `name` **param**
2. Requires a `sort` **method** with 2 params
   1. array: T[]
   2. compareFn<T>
   
# Interfaces

### `IResult`  
### `ICompareFn`  
### `IQuery`  

