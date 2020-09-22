const fs = require('fs')
const path = require('path');

class Course {
    constructor(title, price, url) {
        this.title = title;
        this.price = price;
        this.url = url;
        this.id = null;
    }

    async save() {
        const courses = await Course.getAll();
        console.log(courses);
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'courses.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(JSON.parse(content))
                    }
    
                } 
            )
        })
    }
}

module.exports = Course;