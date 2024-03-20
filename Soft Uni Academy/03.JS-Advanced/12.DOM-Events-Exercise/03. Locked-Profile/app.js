function lockedProfile() {
    const profiles = document.querySelectorAll(".profile");

    for (const profile of profiles) {
        const showMoreBtn = profile.querySelector("button");
        const lockedRadio = profile.querySelector('input[value="lock"]');
        const hiddenFields = profile.querySelector('div div div');

        showMoreBtn.addEventListener("click", () => {
            if (!lockedRadio.checked) {
                hiddenFields.style.display = hiddenFields.style.display === "none" || hiddenFields.style.display === "" ? "block" : "none";
                showMoreBtn.textContent = hiddenFields.style.display === "none" ? "Show more" : "Hide";
            }
        }); 
    }


    /*profiles.forEach(profile => {
        const showMoreBtn = profile.querySelector("button");
        const lockedRadio = profile.querySelector('input[value="lock"]');
        const hiddenFields = profile.querySelector('div div div');

        showMoreBtn.addEventListener("click", () => {
            if (!lockedRadio.checked) {
                hiddenFields.style.display = hiddenFields.style.display === "none" || hiddenFields.style.display === "" ? "block" : "none";
                showMoreBtn.textContent = hiddenFields.style.display === "none" ? "Show more" : "Hide";
            }
        });
    }); */
}

//window.onload = lockedProfile;
