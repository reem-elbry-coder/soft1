import express from "express";

const app = express();

const students = [
    {
        
        name: "reem",

    },
    {
       
        name: "marwa",

    },
    {
       
        name: "shrouk",

    },

];
const studentsFunction = (request, response) => {
  
  let output = '<ul>';

  for(let i = 0; i < students.length;i++) {
       const student = students[i];
       output += '<li>' + student.name + '</li>';
  }



  output += '</ul>';
  response.send(output);
};

app.get("/students", studentsFunction);

app.listen(5000);