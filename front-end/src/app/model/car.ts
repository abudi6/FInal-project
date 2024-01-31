import { Application } from "./application"

export class Car {
    id: number = 0
    name: string = ' '
    displayImage: string = ' '
    brand: string = ' '
    manuDate: Date | null = null
    age: string = ' '
    color: string = ' '
    size: string = ' '
    status: string = ' '
    description: string = ' '
    registeredDate: string = ' '
    application: Application[] = []
}
