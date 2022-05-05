export namespace RateDTO {
    export interface IRate {
        comment: string;
        course_id: string | number
        rate: number
        success: boolean
    }
}