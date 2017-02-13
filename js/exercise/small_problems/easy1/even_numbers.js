// for (i = 2 ; i < 100; i += 2) {
//   console.log(i)
// }

for (i = 1; i < 100; i++) {
  if (i % 2 === 1) {
    continue;
  }

  console.log(i);
}