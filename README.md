### Work in Progress

# General knowledge bot

Trying to create a good bot to train his knowledge.

## Slash Commands

- `/server`: Get server info.
- `/user` : Get user info.
- `/clear` : Clear last messages. (need to be an administrator)
- `/help` : Show all commands name and description.
- `giveaway`: Take a random user of this channel (need to be an administrator)

## Prefix Commands

#### _prefix is "!"_

- `quiz`: quizz game :

![9b1037670e8611cc345d34ca01210150](https://user-images.githubusercontent.com/82462804/160122864-f26b0058-563d-4f72-9479-0a31f3132337.png)

#### JSON structure:

```js
[
{
question : "lorem ipsum",
response: " dolor sit amet.",
source: "https://..."
},
{
question : "lorem ipsum",
response: " dolor sit amet.",
source: "https://..."
},
...
]
```

- `ping` : Respond Pong!
