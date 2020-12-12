class ts{
    version: string

    constructor(version: string){
        this.version = version
    }
    info(name: string):string{
        return `[${name}] : Typescript version is ${this.version}`
    }

}
class Car{
    readonly model: string
    readonly WheelsCount: number = 4

    constructor(theModel: string){
        this.model = theModel
    }
}

class newCar{
    readonly WheelsCount: number = 4
    constructor(readonly model:string){}
}

class Animal{
    protected voice: string = ''
    public color: string = 'Black'
    private go(){
        console.log('Go')
    }
    constructor(){
        this.go()
    }
}

class Cat extends Animal{
    setVoice(voice:string):void{
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)



abstract class Component{
    abstract render():void
    abstract info():string
}

class AppComponent extends Component{
    render(): void {
        console.log('Component on render')        
    }
    info(): string {
        return 'This is info'
    }
}