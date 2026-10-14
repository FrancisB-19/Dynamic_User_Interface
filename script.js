let students = [
            {id: 0, name: 'John Reyniel ', program: 'BS Information Technology'},
            {id: 1, name: 'John remiel', program: 'BS Information Technology'},
            {id: 2, name: 'John marky', program: 'BS Information Technology'},
            {id: 3, name: 'John jeremy', program: 'BS Information Technology'},
            {id: 4, name: 'John Francis ', program: 'BS Information Technology'},
            {id: 4, name: 'John Nina ', program: 'BS Information Technology'},
];

const createStudent = (name, program) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');

    h2.innerHTML = name;
    p.innerHTML = program;
    button.innerHTML = "Delete";

    article.append(h2);
    article.append(p);
    article.append(button);
    article.classList.add('list-item');
    
    return article;

}

const studentList = students.map((s) =>{
    return createStudent(s.name, s.program);
});

const listSection = document.querySelector('#listContainer');
studentList.forEach((s) => {
    listContainer.append(s);

});

console.log(studentList);