
export interface Personal {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  gitHub: string;
  city: string;
  state: string;
  summary: string;
}

export interface PersonalState extends  Personal{}

export interface Skill {
   name: string, 
   id: string 
}

export interface SkillsState {
  skillsList: Array<Skill>
}

export interface Job {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string;
}

export interface JobsState {
  jobsList: Array<Job>
}


export interface Education {
  degree: string;
  school: string;
  gradYear: string;
}

export interface EducationState {
  educationList: Array<Education>
}


//Store
export interface StateUpdateData {
  field: string;
  value: string;
}

export interface Context {
  commit: Function;
  dispatch: Function;
}

export interface State {
  personal: PersonalState,
  skills: SkillsState,
  jobs: JobsState,
  education: EducationState
}
