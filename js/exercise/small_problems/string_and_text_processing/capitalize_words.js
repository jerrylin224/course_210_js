function wordCap(str) {
  return str.toLowerCase().split(' ').map(function(n) {
    return (n[0].toUpperCase() + n.slice(1))
  }).join(' ');
}