```js
let user = {
  name: "Arya",
  sibling: ["Robb", "Ryan", "John"],
};
let allBrothers = ["Robb", "Ryan", "John"];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

To add this image here use ![digram](./digram.jpg);

2. Answer the following with reason:

- `user == newUser;` // true (Reason is that newUser dircty target to user )
- `user === newUser;` // true (Reason is that both refer the same loction or path)
- `user.name === newUser.name;` // true (Reason is that both have same reference )
- `user.name == newUser.name;` // true (Reason is that both have same reference )
- `user.sibling == newUser.sibling;` // true (Reason is that both have same reference )
- `user.sibling === newUser.sibling;` // true (Reason is that both have same reference )
- `user.sibling == allBrothers;` // false (Reason is that both have diffrent memories location [location are diffrent] )
- `user.sibling === allBrothers;` // false (Reason is that both have diffrent memories location [location are diffrent] )
- `brothersCopy === allBrothers;` // flase (Reason is that both have diffrent memories location [location are diffrent] )
- `brothersCopy == allBrothers;` // false (Reason is that both have diffrent memories location [location are diffrent] )
- `brothersCopy == user.sibling;` // true (Reason is that both have equal to each other have same location )
- `brothersCopy === user.sibling;` // true (Reason is that both have equal to each other have same location )
- `brothersCopy[0] === user.sibling[0];` // true (In this case they are direct equal to each other)
- `brothersCopy[1] === user.sibling[1];` // true (In this case they are direct equal to each other)
- `user.sibling[1] === newUser.sibling[1];` // true (In this case they are direct equal to each other)
