export interface Responsibilities {
    desc: string;
  }
  
  export interface QualificationsAndSkills {
    desc: string;
  }
  
  export interface Benefits {
    desc: string;
  }
  
  export interface Job {
    id: number;
    jobTitle: string;
    sub_title: string;
    subTitle: string;
    desc: string;
    timeAgo: string;
    description: string;
    data_ago: string;
    salary: string;
    location:string
    logo: string;
    companyName: string;
    responsibilities: Responsibilities[];
    qualifications_and_skills: QualificationsAndSkills[];
    benefits: Benefits[];
  }