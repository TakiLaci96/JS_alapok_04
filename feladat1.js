document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("atalakit").addEventListener("click", function() {
        let szoveg = document.getElementById("szoveg").value;
        let kisNagyBetu;
        console.log("Sikerült!");

        if (document.getElementById("kisbetu").checked) {
            kisNagyBetu = "kisbetus";
        } else if (document.getElementById("nagybetu").checked) {
            kisNagyBetu = "nagybetus";
        }

        if (kisNagyBetu === "kisbetus") {
            document.getElementById("kiiratas").innerHTML = szoveg.toLowerCase();
        } else if (kisNagyBetu === "nagybetus") {
            document.getElementById("kiiratas").innerHTML = szoveg.toUpperCase();
        }
    });
});
    console.log(szoveg);