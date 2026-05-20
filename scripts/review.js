const confirmationKey = "wdd131ReviewCount";
const countElement = document.getElementById("reviewCount");

if (countElement) {
    const params = new URLSearchParams(window.location.search);
    const hasRequiredSubmissionData = params.has("productName") && params.has("rating") && params.has("installDate");
    let count = Number(localStorage.getItem(confirmationKey)) || 0;

    if (hasRequiredSubmissionData) {
        count += 1;
        localStorage.setItem(confirmationKey, String(count));
    }

    countElement.textContent = String(count);
}
