const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
    // console.log(checkboxes);

let lastChecked;


function handleCheck(e) {

    // console.log(e);

    let inBetween = false;

    if (e.shiftKey && this.checked) {
        // this.style.text-decoration = 'line-through';
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked)
                inBetween = !inBetween;

            if (inBetween)
                checkbox.checked = true;
        });
    }


    lastChecked = this;
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', handleCheck)
});