export namespace TurboDTO {
  export interface IPerson {
    person_id: string;
    fullname: string;
    positionName: string;
    img: string;
    likes?: number;
  }

  export interface ITurboTeam {
    id: string;
    liders: Array<string>;
    title: string;
    minDescription: string;
    maxDescription: string;
  }

  export interface IPersons {
    data: IPerson[];
  }

  export interface ITurboTeams {
    data: ITurboTeam[];
  }

  export interface IPersonTeams {
    person: IPerson;
    teams: ITurboTeam[];
  }
}
