//get which style has been choosen
let paramString = document.baseURI.split("=");


//form submition
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) =>{
    e.preventDefault();

//storing form data (not the image) for transfer between files
    const formData = new FormData(myForm);
    const data = Object.fromEntries(formData);


    sessionStorage.setItem("data",JSON.stringify(data));

//storing image in sessionStorage for transfer between files
    const img = document.getElementById("img");
    
    const reader = new FileReader();
    reader.readAsDataURL(img.files[0]);

    reader.addEventListener("load",() => {
        sessionStorage.setItem("img", reader.result);
    });

    console.log(data)
    console.log(JSON.stringify(data))

    //go to the final page with the style choosen
    if(paramString[1] === "grey") {
        window.location.href="../grey_resume/grey.html";
    }
    else{
        window.location.href="../blue_resume/blue.html";
    }
});


//add more buttons 

let skillCount = 1
const addMoreSkills = (ele) => {
    skillCount += 1;
    const newspan = document.createElement("span");
    newspan.innerHTML = `
    <label for="skills${skillCount}">مهارة ${skillCount}</label>
    <input type="text" name="skills${skillCount}" class="skills">
    `;
    newspan.className = "span skill-div";
    document.getElementById("skills-sec").appendChild(newspan);
    if(skillCount >= 4){
        ele.style.display = "none";
    }
}

let eduCount = 1;
const addMoreEdu = (ele) => {
    eduCount += 1;
    const newspan = document.createElement("span");
    newspan.innerHTML =  `
    <label for="university${eduCount}">الجامعة</label>
    <input type="text" name="university${eduCount}">
    <label for="degree${eduCount}">الشهادة</label>
    <input type="text" name="degree${eduCount}">
    <label for="year${eduCount}">السنة</label>
    <input type="text" name="year${eduCount}">
    `;
    newspan.className = "span";
    document.getElementById("edu-sec").appendChild(newspan);
    if(eduCount >= 4) {
        ele.style.display = "none";
    }
}

let ExpCount = 1;
const addMoreExp = (ele) => {
    ExpCount += 1;
    const newspan = document.createElement("span");
    newspan.innerHTML = `
    <label for="company${ExpCount}">الشركة</label>
    <input type="text" name="company${ExpCount}">
    <label for="role${ExpCount}">المنصب</label>
    <input type="text" name="role${ExpCount}">
    <label for="start${ExpCount}">البداية</label>
    <input type="text" name="start${ExpCount}">
    <label for="end${ExpCount}">النهاية</label>
    <input type="text" name="end${ExpCount}">
    `;
    newspan.className = "span";
    document.getElementById("exp-sec").appendChild(newspan);
    if(ExpCount >= 4){
        ele.style.display = "none";
    }
}