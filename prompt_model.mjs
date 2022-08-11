import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    {useNewUrlParser: true,
        dbName: 'writing_prompts'
    }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
});

const genreSchema = mongoose.Schema({
    name: {type: String, required: true},
    article: {type: String, required: true}
}, {collection: 'Genres'})

const protagonistSchema = mongoose.Schema({
    name: {type: String, required: true}
}, {collection: 'Protagonists'})

const conflictSchema = mongoose.Schema({
    name: {type: String, required: true}
}, {collection: 'Conflicts'})

const antagonistSchema = mongoose.Schema({
    name: {type: String, required: true}
}, {collection: 'Antagonists'})

const Genre = mongoose.model("Genre", genreSchema);

const Protagonist = mongoose.model("Protagonist", protagonistSchema);

const Conflict = mongoose.model("Conflict", conflictSchema);

const Antagonist = mongoose.model("Antagonist", antagonistSchema);

const findRandomGenre = async () => {
    const query = Genre.aggregate([{$sample: {size: 1}}]);
    return query.exec();
};

const findRandomProtagonist = async () => {
    const query = Protagonist.aggregate([{$sample: {size: 1}}]);
    return query.exec();
};

const findRandomConflict = async () => {
    const query = Conflict.aggregate([{$sample: {size: 1}}]);
    return query.exec();
};

const findRandomAntagonist = async () => {
    const query = Antagonist.aggregate([{$sample: {size: 1}}]);
    return query.exec();
};

export { findRandomGenre, findRandomProtagonist, findRandomConflict, findRandomAntagonist }