document.getElementById('submit-btn').addEventListener('click', ()=>{
    if(checkInvalidInput()==false){
        return;
    }
    generateTeams();
    seperateStudents();
});

function generateTeams(){
    let teamLayout = "";
    let teamsPerRow = 0;
    let rowCounter = 0;
    Array.from(viewport.getElementsByClassName('flex-container')).forEach(row=>{
        row.remove();
    });
    switch(document.getElementById('number-of-groups-input').value){
        case "2":
            teamLayout = "team-layout-2";
            teamsPerRow = 2;
            break
        case "3":
            teamLayout = "team-layout-3";
            teamsPerRow = 3;
            break
        case "4":
            teamLayout = "team-layout-4";
            teamsPerRow = 2;
            break
        case "5":
            teamLayout = "team-layout-5-6";
            teamsPerRow = 3;
            break
        case "6":
            teamLayout = "team-layout-5-6";
            teamsPerRow = 3;
            break
        case "7":
            teamLayout = "team-layout-7-8-9";
            teamsPerRow = 3;
            break
        case "8":
            teamLayout = "team-layout-7-8-9";
            teamsPerRow = 3;
            break
        case "9":
            teamLayout = "team-layout-7-8-9";
            teamsPerRow = 3;
            break
        case "10":
            teamLayout = "team-layout-10-11-12";
            teamsPerRow = 4;
            break
        case "11":
            teamLayout = "team-layout-10-11-12";
            teamsPerRow = 4;
            break
        case "12":
            teamLayout = "team-layout-10-11-12";
            teamsPerRow = 4;
            break
        case "13":
            teamLayout = "team-layout-13-14-15";
            teamsPerRow = 4;
            break
        case "14":
            teamLayout = "team-layout-13-14-15";
            teamsPerRow = 4;
            break
        case "15":
            teamLayout = "team-layout-13-14-15";
            teamsPerRow = 4;
            break
    }
    for(let i = 0; i < document.getElementById('number-of-groups-input').value; i++){
        if(i % teamsPerRow == 0){
            rowCounter ++;
            let newRow = document.createElement('div');
            newRow.classList.add("flex-container");
            newRow.setAttribute("id", "row-" + rowCounter);
            document.getElementById("viewport").appendChild(newRow);
        }
        let newTeam = document.createElement("div");
        newTeam.classList.add("team-box");
        newTeam.classList.add(teamLayout);
        newTeam.setAttribute("id", "team-" + (i + 1));
        document.getElementById("row-" + rowCounter).appendChild(newTeam);
        let newHeader = document.createElement("h1");
        newHeader.innerText = "Team " + (i + 1);
        newTeam.appendChild(newHeader);
    }
}


function seperateStudents(studentNames){
    let studentList = document.getElementById('student-names-input').value.split("\n")
    let initialLength = studentList.length;
    let studentsPerTeam = Math.ceil(studentList.length / document.getElementById('number-of-groups-input').value);
    let currentTeam = 1;
    for(i = 0; i < initialLength; i++){
        if(studentList.length == 0){
            break;
        }
        let newStudentIndex = Math.floor(Math.random()*studentList.length);
        let newStudent = document.createElement('p');
        newStudent.classList.add("student-name");
        newStudent.innerText = studentList[newStudentIndex];
        document.getElementById("team-" + currentTeam).appendChild(newStudent);
        studentList.splice(newStudentIndex, 1);
        currentTeam ++;
        if(currentTeam > document.getElementById('number-of-groups-input').value){
            currentTeam = 1;
        }
    }
}

function checkInvalidInput(){
    studentList = document.getElementById('student-names-input').value.split("\n")
    if(studentList.length < document.getElementById('number-of-groups-input').value){
        alert("Can not have more groups than students.");
            return false;
    }
    if(studentList[studentList.length-1] == ""){
        alert("Can not end student list with a new line.");
        return false;
    }
    for(let i = 0; i < studentList.length; i++){
        if(studentList[i].trim().length == 0){
            alert("Can not include names with no characters.");
            return false;
        }
    }
}