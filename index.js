// const brain = require('brain.js');
// const network = new brain.NeuralNetwork();

// network.train([
//     {input: [0,0,1], output: [0]},
//     {input: [0,0,1], output: [0]},
//     {input: [0,1,1], output: [0]},
//     {input: [1,0,1], output: [1]},
//     {input: [1,1,1], output: [1]}
// ]);

// const output = network.run([1,1,0]);

// console.log(`Prob: ${output}`)

const brain = require('brain.js');
const data = require('./data.json');
const network = new brain.recurrent.LSTM();
const trainingData = data.map(item=>({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});

const output = network.run('there are some bugs');

console.log(`Category: ${output}`);


