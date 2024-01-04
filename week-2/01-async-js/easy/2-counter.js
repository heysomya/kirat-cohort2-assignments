// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

const counter = (count) => {
  console.log(count);
  count++;
  setTimeout(() => counter(count), 1000);
};

counter(1);

// (Hint: setTimeout)
