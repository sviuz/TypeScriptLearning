const isFetching: boolean = true
const isLoating: boolean = false

const int: number = 42

const float: number = 4.2

const numArr: number[] = [1,1,2,3,5,8,13]

const numberArr2: Array<number> = [1,1,2,3,5,8,13]

const words: Array<string> = ['Hello','World']

//Tuple
const contact:[string,number] =['Sviuz',1234567]

//Any
let varirable: any = 42

varirable = 'new string'



//===================

function SayMyName(name: string): void{
    console.log(name)
}

SayMyName("Danil")


function throwError(message: string){
    throw new Error(message);
}

function Infinite():never{
    while (true) {
        
    }
}


//Type
type Login = string

const login: Login = 'root'

type ID = string | number

const id : ID = 123213
const id2: ID = 'wadsfa';


type SomeType = string | null | undefined


