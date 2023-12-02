import { INote } from '@/types/user';
import { Schema, Model, model, models } from 'mongoose';

const NoteSchema = new Schema({
    content: {
      type: String,
      required: true,
    },
    task: {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    sharedWith: {
      type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
  });

  export const Note: Model<INote> = models.Task || model<INote>('Note', NoteSchema);
