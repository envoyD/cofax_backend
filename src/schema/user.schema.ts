import { Schema } from 'mongoose';

// Document interface
interface User {
  name: string;
  email: string;
  password: string;
}

// User Schema
const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

export default userSchema