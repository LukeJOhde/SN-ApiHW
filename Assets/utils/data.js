const usernames = [
    "Aaran",
    "Aaren",
    "Aarez",
    "Aarman",
    "Aaron",
    "Aaron-James",
    "Aarron",
    "Aaryan",
    "Aaryn",
    "Aayan",
    "Aazaan",
    "Abaan",
    "Abbas",
    "Abdallah",
    "Abdalroof",
    "Abdihakim",
    "Abdirahman",
    "Abdisalam",
    "Abdul",
    "Abdul-Aziz",
    "Abdulbasir",
    "Abdulkadir",
    "Abdulkarem",
    "Smith",
    "Jones",
    "Coollastname",
    "enter_name_here",
    "Ze",
    "Zechariah",
    "Zeek",
    "Zeeshan",
    "Zeid",
    "Zein",
    "Zen",
    "Zendel",
    "Zenith",
    "Zennon",
    "Zeph",
    "Zerah",
    "Zhen",
    "Zhi",
    "Zhong",
    "Zhuo",
    "Zi",
    "Zidane",
    "Zijie",
    "Zinedine",
    "Zion",
    "Zishan",
    "Ziya",
    "Ziyaan",
    "Zohaib",
    "Zohair",
    "Zoubaeir",
    "Zubair",
    "Zubayr",
    "Zuriel",
    "Xander",
    "Jared",
    "Courtney",
    "Gillian",
    "Clark",
    "Jared",
    "Grace",
    "Kelsey",
    "Tamar",
    "Alex",
    "Mark",
    "Tamar",
    "Farish",
    "Sarah",
    "Nathaniel",
    "Parker",
  ];
  const thoughts = [
    "Decision Tracker",
    "Find My Phone",
    "Learn Piano",
    "Starbase Defender",
    "Tower Defense",
    "Monopoly Money Manager",
    "Movie trailers",
    "Hello world",
    "Stupid Social Media App",
    "Notes",
    "Messages",
    "Email",
    "Compass",
    "Firefox",
    "Running app",
    "Cooking app",
    "Poker",
    "Deliveries",
  ];
  const reactions = ["💔", "❤️", "👍", "👎", "❗️"];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomUsername = () => getRandomArrItem(usernames);
  
  const getRandomThoughtBody = () => getRandomArrItem(thoughts);
  
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
        username: getRandomArrItem(usernames),
        reactions: getRandomReactions(2),
      });
    }
    return results;
  };
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(reactions),
        username: getRandomArrItem(usernames),
      });
    }
    return results;
  };
  module.exports = {
    getRandomArrItem,
    getRandomUsername,
    getRandomThought,
    getRandomReactions,
    getRandomThoughtBody,
  };