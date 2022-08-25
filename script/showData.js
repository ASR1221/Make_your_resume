//get user data from session storage
const data = JSON.parse(sessionStorage.getItem("data"));

//get user image from session storage
const imgData = sessionStorage.getItem("img");
if(imgData) {
    document.getElementById("img").setAttribute("src", imgData);
}

document.querySelector(".name-heading").innerHTML = data.name;
document.querySelector(".role").innerHTML = data.role;
document.querySelector(".age").innerHTML = `${data.jender} / ${data.age} سنة`;
document.querySelector(".aboutMe-p").innerHTML = data.aboutMe;
document.querySelector("#p-contact").innerHTML = `${data.residence}<br>${data.phone}<br>${data.email}`;


const skills = [data.skills1, data.skills2, data.skills3, data.skills4];

if(!skills[0]){
    document.querySelector(".skills").style.display = "none";
}else{
    skills.forEach(i=>{
        if(!i){
            return;
        }
        let x = document.createElement("li");
        x.innerHTML = i;
        document.querySelector("#ul-skills").appendChild(x);
    });
}


const universities = [data.university1, data.university2, data.university3, data.university4];
const degree = [data.degree1, data.degree2, data.degree3, data.degree4];
const year = [data.year1, data.year2, data.year3, data.year4];

if(!universities[0]){
    document.querySelector(".edu").style.display = "none";
}else{
    for(let i in universities){
        if(!universities[i]){
            continue;
        }
        let x = document.createElement("li");
        x.innerHTML = `<b>${year[0]}  - ${degree[i]}</b><br>${universities[i]}`;
        document.querySelector("#ol-edu").appendChild(x);
    }
}


const companies = [data.company1, data.company2, data.company3, data.company4];
const role = [data.role1, data.role2, data.role3, data.role4];
const start = [data.start1, data.start2, data.start3, data.start4];
const end = [data.end1, data.end2, data.end3, data.end4];

if(!companies[0]){
    document.querySelector(".exp").style.display = "none";
}else{
    for(let i in universities){
        if(!companies[i]){
            continue;
        }
        let x = document.createElement("li");
        x.innerHTML = `<b>${start[0]} - ${end[i]}<br>${companies[i]}</b><br>${role[i]}`;
        document.querySelector("#ol-exp").appendChild(x);
    }
}





