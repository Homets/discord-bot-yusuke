### Work in Progress

# General knowledge bot

Trying to create a good bot to train his knowledge.

## Prefix Commands

#### _prefix is "!"_

- `quiz`: quizz game :

###### You can respond with the index or directly write the response ( case-insensitive)

![77d440ef024d73da60b8044c24e003eb](https://user-images.githubusercontent.com/82462804/160619160-21a4f432-6fb1-4692-bb2c-348868129202.png)


#### JSON structure:

```js
[
{
question : "lorem ipsum",
possible: ["A. Lorem","B. Lorem","C. Lorem","D. Lorem"],
response: " dolor sit amet.",
source: "https://..."
},
{
question : "lorem ipsum",
possible: ["A. Lorem","B. Lorem","C. Lorem","D. Lorem"],
response: " dolor sit amet.",
source: "https://..."
},
...
]
```


- `ping` : Respond Pong!


## Slash Commands

- `/server`: Get server info.
- `/user` : Get user info.
- `/clear` : Clear last messages. (need to be an administrator)
- `/help` : Show all commands name and description.
- `giveaway`: Take a random user of this channel (need to be an administrator)
