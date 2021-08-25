 const check = () => {
        const checkBox = document.getElementById("checkbox");
        const text1 = document.getElementsByClassName("text1");
        const text2 = document.getElementsByClassName("text2");
        const month = document.getElementById('month');
        const year = document.getElementById('year');

        for (var i=0; i < text1.length; i++){
            if(checkBox.checked == false){
                text1[i].style.display = "block";
                text2[i].style.display = "none";
                month.style.color = "#000000";
                year.style.color = "#323a45";
            }
            else if (checkBox.checked == true){
                text1[i].style.display = "none";
                text2[i].style.display = "block";
                month.style.color = "#323a45";
                year.style.color = "#000000";
            }
        }
    }

check();