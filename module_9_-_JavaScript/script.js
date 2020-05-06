console.log("javascript connection stalished");

function isCpfValid(cpfTyped) {
    if (cpfTyped.length == 11) {
        let cpf = cpfTyped.substring(0, 9);
        let digits = cpfTyped.substring(9);
        let sum = 0;

        /* checking part 1 */
        for (let i = 10; i > 1; i--) sum += cpf.charAt(10 - i) * i;

        if ((sum % 11 < 2 ? 0 : 11 - (sum % 11)) != digits.charAt(0))
            return false;
        console.log("first digit is correct");

        /* checking part 2 */
        sum = 0;
        cpf = cpfTyped.substring(0, 10);

        for (let i = 11; i > 1; i--) sum += cpf.charAt(11 - i) * i;

        if ((sum % 11 < 2 ? 0 : 11 - (sum % 11)) != digits.charAt(1))
            return false;
        console.log("second digit is correct");

        return true;
    } else return false;
}

function validateCPF() {
    console.log("cpf validation iniciated");
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    let cpfTyped = document.getElementById("cpf_typed").value;

    if (isCpfValid(cpfTyped)) {
        document.getElementById("success").style.display = "block";
        console.log("valid cpf");
    } else {
        document.getElementById("error").style.display = "block";
        console.log("invalid cpf");
    }
}
