function showDestination(place) {

    alert(
        "🌎 Welcome to " + place +
        "!\n\n" +
        "This is a wonderful destination to explore.\n" +
        "Plan your trip with TravelGo!"
    );

}

document.getElementById("bookingForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();

        let email = document.getElementById("email").value.trim();

        let destination =
            document.getElementById("destination").value;

        if (name === "") {

            alert("⚠️ Please enter your name.");

            return;
        }

        if (email === "") {

            alert("⚠️ Please enter your email.");

            return;
        }

        if (destination === "") {

            alert("⚠️ Please select a destination.");

            return;
        }

        document.getElementById("successMessage").style.display =
            "block";

        document.getElementById("bookingForm").reset();

    }
);