// import { age } from './space-age';

// describe('Space Age', () => {
//   test('age on Earth', () => {
//     expect(age('earth', 1000000000)).toEqual(31.69);
//   });

//   xtest('age on Mercury', () => {
//     expect(age('mercury', 2134835688)).toEqual(280.88);
//   });

//   xtest('age on Venus', () => {
//     expect(age('venus', 189839836)).toEqual(9.78);
//   });

//   xtest('age on Mars', () => {
//     expect(age('mars', 2129871239)).toEqual(35.88);
//   });

//   xtest('age on Jupiter', () => {
//     expect(age('jupiter', 901876382)).toEqual(2.41);
//   });

//   xtest('age on Saturn', () => {
//     expect(age('saturn', 2000000000)).toEqual(2.15);
//   });

//   xtest('age on Uranus', () => {
//     expect(age('uranus', 1210123456)).toEqual(0.46);
//   });

//   xtest('age on Neptune', () => {
//     expect(age('neptune', 1821023456)).toEqual(0.35);
//   });
// });





// seconds per day = 86400

// total seconds of earth per year = 86400 * 365.25 = 31557600
// total seconds of planet per year = 86400 * (365.25 * orbital_period) = a

// var answer = a 

// var spaceage = b

// // switch () 
// // case earth:
// // function spaceage ("earth") {
// //     return b / (86400 * 365.25)
// //     break; 
// // case mercury:
// //     function spaceage ("mercury") {
// //     return b / (86400 * 365.25 * 0.2408467)
// //     break;
// //     }

// console.log a


// 1.8808158 Earth years
//    - Jupiter: orbital period 11.862615 Earth years
//    - Saturn: orbital period 29.447498 Earth years
//    - Uranus: orbital period 84.016846 Earth years
//    - Neptune: orbital period 164.79132 Earth years


export const age = (string, number) => {
    switch(string){
        case 'earth':
        return Number((number / (365.25 * 86400)).toFixed(2));
        break;
        case 'mercury':
        return Number((number / (365.25 * (0.2408467 * 86400))).toFixed(2));
        break;
        case 'venus':
        return Number((number / (365.25 * (0.61519726 * 86400 ))).toFixed(2));
        break;
        case 'mars':
        return Number((number / (365.25 * (1.8808158 * 86400))).toFixed(2));
        break;
        case 'jupiter':
        return Number((number / (365.25 * (11.862615 * 86400))).toFixed(2));
        break;
        case 'saturn':
        return Number((number / (365.25 * (29.447498 * 86400))).toFixed(2));
        break;
        case 'uranus':
        return Number((number / (365.25 * (84.016846 *86400))).toFixed(2));
        break;
        case 'neptune':
        return Number((number / (365.25 * (164.79132 * 86400))).toFixed(2));
        break;
    }
}