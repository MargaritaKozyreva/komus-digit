export namespace CourseDTO {

    export enum CourseLevelCategory {
        'Курсы',
        'Рекомендованные курсы'
    }

    export enum CourseCategory {
        'fail',
        'active'
    }

    export interface ICourse {
        id: string | number,
        progress: number,
        firstCategory: 'Курсы' | 'Рекомендованные курсы',
        categories: 'fail' | 'active',
        title: string,
        description: string,
        likes: number,
        comments: number,
        url: string,
        estimate: string,
        img: string,
        tags: string[]
    }
}