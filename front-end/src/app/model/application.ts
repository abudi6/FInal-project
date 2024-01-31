import { Customer } from "./customer"
import { Car} from "./car"

export class Application {
    id: number = 0
    status: string = ' '
    submittedDate: Date | null = null
    reviewDate: Date | null = null
    approvalDate: Date | null = null
    applicant: Customer[] = []
    car: Car[] = []
}