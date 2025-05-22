let styles = ["James", "Brennie"];

styles.push("Robert");
console.log(styles); // ["James", "Brennie", "Robert"]

styles[Math.floor(styles.length / 2)] = "Calvin";
console.log(styles); // ["James", "Calvin", "Robert"]

styles.shift();
console.log(styles); // ["Calvin", "Robert"]

styles.unshift("Rose", "Regal");
console.log(styles); // ["Rose", "Regal", "Calvin", "Robert"]