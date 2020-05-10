//laczenie tablicy
//var flatArray = [[1, 2], [3, 4], [5, 6]].reduce(
//    (accumulator, array) => accumulator.concat(array), []);

//var flatArray = [[1, 2], [3, 4], [5, 6]].reduce(
//    (accumulator, array) => {
//        console.log('array', array);
//        console.log('accumulator', accumulator)
//        return accumulator.concat(array)
//    }, []);

var flatArray = [[1, 2], [3, 4], [5, 6]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array)
    }, []);

console.log(flatArray);

//array(2)[1, 2]
//accumulator[] 
//array(2)[3, 4]
//accumulator(2)[1, 2]
//array(2)[5, 6]
//accumulator(4)[1, 2, 3, 4]
//(6)[1, 2, 3, 4, 5, 6]
