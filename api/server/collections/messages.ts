/**
 * Created by jonathanlehner on 07.06.17.
 */
import { MongoObservable } from 'meteor-rxjs';
import { Message } from '../models';

export const Messages = new MongoObservable.Collection<Message>('messages');
