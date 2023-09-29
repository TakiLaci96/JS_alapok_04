document.addEventListener("DOMContentLoaded", function() {
    const felhasznalonevInput = document.getElementById("felhasznalonev");
    const jelszoInput = document.getElementById("jelszo");
    const jelszo2Input = document.getElementById("jelszo2");
    
    document.getElementById("regForm").addEventListener("submit", function(event) {
        const felhasznalonev = felhasznalonevInput.value;
        const jelszo = jelszoInput.value;
        const jelszo2 = jelszo2Input.value;
    
        if (felhasznalonev.length < 5 || felhasznalonev.length > 16) {
            alert("A felhasználónévnek 5 és 16 karakter között kell lennie!");
        }
    
        if (jelszo !== jelszo2) {
            alert("A jelszavak nem egyeznek meg!");
        }
    
        if (jelszo.length < 5) {
            alert("A jelszónak minimum 5 karakter hosszúnak kell lennie!");
        }
        console.log("Siker!");
    });
});