var a, b, c,d, e, f, g;
a = [10,20];
b = "rank";
c = [30,"points"];
d = "run"

// concat method.
e = a.concat(b, c, d);

// spread operator
f = [...a,b, ...c, d];
g = [a,b, c, d];

console.log("spread operator(f): ", f);
console.log("g = [a,b, c, d]: ", g);

