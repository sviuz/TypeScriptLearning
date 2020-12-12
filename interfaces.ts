interface Rect{
    readonly id: string
    color?: string
    size:{
        width: number
        height: number
    }
}

const rect1: Rect = {
    id:'1',
    size:{
        width:20,
        height:12
    },
    color:'#ccc'
}

const rect2: Rect = {
    id:"2",
    size:{
        width:24,
        height:22
    },
    //color:'#ccc'
}

rect2.color='black'


const rect3={} as Rect
//or
const rect4 = <Rect>{}

//=================


interface RectWithArea extends Rect{
    getArea: () => number 
}

const rect5 : RectWithArea ={
    id: '123',
    size:{
        width:20,
        height:10
    },
    getArea():number{
        return this.size.width * this.size.height
    }
}

//===========

interface IClock{
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTime(date: Date ): void {
        this.time = date
    }
}


//=================

interface Styles{
    [key: string]:string
}

const css: Styles = {
    border: '1pc solid black',
    marginTop: '2px',
    borderRadius:'5px'
}


