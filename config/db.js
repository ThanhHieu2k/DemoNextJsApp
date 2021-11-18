import mongoose from 'mongoose';

mongoose.models = {} // cop tren stackoverflows khong ngo no chay (ao that day)

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.log('connecting successfully!!!');
    } catch (error) {
        console.log('connecting failed!!!');
    }
}

