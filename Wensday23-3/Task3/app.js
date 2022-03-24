let x;
document.getElementById("country").addEventListener("change", function() {
    const countries=["Jordan","Norway","Germany"];
x = document.getElementById("country").value;
if (x === countries[0]) {
    document.getElementById("Flag").src="https://flagsworld.org/img/cflags/jordan-flag.png";
}
else if (x === countries[1]) {
    document.getElementById("Flag").src="https://st.depositphotos.com/1164721/1562/v/950/depositphotos_15620007-stock-illustration-norway-flag-vector-illustration.jpg";
}
});
