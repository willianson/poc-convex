import { Id } from "convex-dev"; // Import the Id type from convex

export interface Task {
  _id?: Id;
  _creationTime?: number;
  isCompleted: boolean;
  text: string;
}