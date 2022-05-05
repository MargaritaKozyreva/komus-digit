export namespace CourseDTO {
  export interface ICourse {
    id: string | number;
    title: string;
    likes: number;
    desc: string;
    img: string;
    comments: number;
    time_to_pass: string;
    url: string;
    info: {
      reviews: IReview[];
    };
  }

  export interface IReview {
    person_id: string;
    person_fullname: string;
    img: string;
    person_position_name: string;
    rate: number;
    likes?: number;
    max_rate?: number;
    min_text: string;
    max_text: string;
  }
}
