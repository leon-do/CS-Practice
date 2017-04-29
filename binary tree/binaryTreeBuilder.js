const util = require('util')

var rootObject = {value: 10, right: null, left: null}


var myArray = [1,2,3,4,6,99]
var i = 0;


function binaryBuilder(currentLocation){

    //when the array is complete, exit out function
    if (i == myArray.length) {
        console.log(util.inspect(currentLocation, {showHidden: false, depth: null}))
        return;
    };

    // left side is less
    if (currentLocation.value > myArray[i]){
        //if null, then add value
        if (currentLocation.left == null){
            currentLocation.left = {value: myArray[i], right: null, left:null};
            i++
            binaryBuilder(rootObject)
        } else {
            //down down the tree
            binaryBuilder(currentLocation.left)
        }
    }

    //right side
    if (currentLocation.value < myArray[i]){
        //if null, then add value
        if (currentLocation.right == null){
            currentLocation.right = {value: myArray[i], right:null, left:null};
            i++
            binaryBuilder(rootObject)
        } else {
            //down down the tree
            binaryBuilder(currentLocation.right)
        }
    } 



}


binaryBuilder(rootObject)

