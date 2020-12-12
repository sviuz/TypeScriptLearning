const numArray1: Array<number> = [1,2,3,4,5]
const numArray2: Array<number> = [2,3,4,5]
const numArray3: Array<string> = ['Hello', 'World']


function reverse<T>(array:Array<T>):T[]{
    return array.reverse()
}