interface Person{
    name: string
    age: number
}


type PersonKeys = keyof Person //'name' | 'age'
let key: PersonKeys='name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}


type UserKyesNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> //'name' | 'email'

type UserKyesNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKyesNoMeta1 = 'name'
