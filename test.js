let date = new Date();

let humanreadable = new Date(date).toLocaleString('en-Us', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    weekday: 'short',
    month: "short",
    year: "numeric"
})

console.log(date, humanreadable);