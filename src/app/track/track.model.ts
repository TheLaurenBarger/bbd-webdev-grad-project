import {Course} from './course.model'

export interface Track {
    name: string;
    courses: Course[];
    progress: number;
    xp: number;
}