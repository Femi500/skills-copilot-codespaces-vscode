function skillsmembers() {
    var skills = document.getElementById("skills").value
    var members = document.getElementById("members").value
    var result = skills * members
    document.getElementById("result").innerHTML = result
}

