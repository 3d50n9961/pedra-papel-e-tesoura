let companies = [
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 }
]
const valorTotal = companies.map( (companies) => {
    companies.marketValue = companies.marketValue - companies.marketValue*.10
    return companies
}).filter((companies) => {
   return companies.foundedOn > 1980
}).reduce(( acc,companies) =>{
    return acc+ companies.marketValue

}, 0 )
console.log(valorTotal)