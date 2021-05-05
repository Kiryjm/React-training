// Redactored code version

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(employer => {
    return employer;}).map(employer => employer.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

function calcCash(cash = 0) {
    return cash.reduce((previous, current) => previous + current);
}

const money = calcCash(cash);

function makeBusiness({cash, emp, owner = 'Sam', director = 'Victor'}) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp.join(', ')}. 
And we have a sponsors: ${sumSponsors.join(', ')} 
Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({cash: money, emp: employersNames});