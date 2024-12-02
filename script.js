document.getElementById("transfer-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const recipient = document.getElementById("recipient").value;

    if (amount && recipient) {
        alert(`Successfully transferred $${amount} to ${recipient}`);
    } else {
        alert("Please fill out all fields.");
    }
});
