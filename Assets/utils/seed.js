const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomArrItem,
  getRandomUsername,
  getRandomThought,
  getRandomReactions,
  getRandomThoughtBody,
} = require("./data");
connection.on("error", (err) => err);
connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});

  await User.deleteMany({});
  const usersArray = [];
  const thoughtsArray = [];
  for (let i = 0; i < 5; i++) {
    const thoughts = getRandomThought(2);

    const username = getRandomUsername();
    const email = `${getRandomUsername()}@fakeemail.com`;
    usersArray.push({
      username,
      email,
      thoughts,
    });

    const thoughtText = getRandomThoughtBody();
    const usernameThought = getRandomArrItem(usersArray);
    const reactions = getRandomReactions(2);
    thoughtsArray.push({
      thoughtText,
      username: usernameThought,
      reactions,
    });
  }
  await User.collection.insertMany(usersArray);
  await Thought.collection.insertMany(thoughtsArray);
  console.table(usersArray);
  console.table(thoughtsArray);
  console.info("Seeding Complete!");
  process.exit(0);
});