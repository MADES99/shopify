
const bellEl = document.querySelector('#bell-notification');
const userEl = document.querySelector('#user');
const menuBox = document.querySelector('.menu-box');
const collapsEl = document.querySelector('#collapsible');
const setupEl = document.querySelector('#setup-guide');
const itemsEl = document.querySelectorAll('.item');
const popEl = document.querySelector('#pop-up');
const progStatus = document.querySelector('#progress-status');
const progLevel = document.querySelector('#prog-level');
const inputEl = document.querySelectorAll('.box');
const userBell = document.querySelector('#user-bell');
const dropList = document.querySelector('#dropdown');
const closeBtn = document.querySelector('#close-notice');
const alertBtn = document.querySelector('#alert-nav');
const setupList = document.querySelector('#setup-items');
const titles = document.querySelectorAll('h2.setup-title');
let count = 0;
let setWidth = count;
let idx = 0;

function app() {
    menu();
    collapse();
    closePopUp();
    setupToggle();
    itemsExpand()
    alert();
};

    



function menu() {
const menuList = dropList.querySelectorAll('[role="dropdown-button"]');

// Event listener for user click to toggle menu
userEl.addEventListener('click', toggleMenu);

// Event handler for 'Escape' key press to close the menu
function handleMenuEscapeKeypress(e) {
    if (e.key === 'Escape') {
        toggleMenu();
    }
}

// Function to open the menu
function openMenu() {
    userEl.setAttribute('aria-expanded', 'true');
    menuList.item(0).focus();

    // Add event listener for 'Escape' key press to close the menu
    dropList.addEventListener('keyup', handleMenuEscapeKeypress);

    // Add event listeners for arrow key navigation in the menu
    menuList.forEach((menu, menuIndex) => {
        menu.addEventListener('keyup', (event) => {
            handleMenuArrowKeyPress(event, menuIndex);
        });
    });
}

// Function to close the menu
function closeMenu() {
    userEl.setAttribute('aria-expanded', 'false');
    userEl.focus();
}

// Function to toggle the menu
function toggleMenu() {
    const isExpanded = userEl.getAttribute('aria-expanded') === 'true';

    // Toggle the 'show-menu' class to display/hide the menu
    menuBox.classList.toggle('show-menu');
    userBell.classList.remove('show-notify');

    if (isExpanded) {
        closeMenu();
    } else {
        openMenu();
    }
}

// Event handler for arrow key navigation in the menu
function handleMenuArrowKeyPress(event, menuIndex) {
    const isLastMenuItem = menuIndex === menuList.length - 1;
    const isFirstMenuItem = menuIndex === 0;

    const nextMenu = menuList.item(menuIndex + 1);
    const previousMenu = menuList.item(menuIndex - 1);

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        if (isLastMenuItem) {
            menuList.item(0).focus();
            return;
        }

        nextMenu.focus();
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        if (isFirstMenuItem) {
            menuList.item(menuList.length - 1).focus();
            return;
        }

        previousMenu.focus();
    }
}
};




function collapse() {
    // Select all elements with role "setupItem" under the setupList
const guideList = setupList.querySelectorAll('[role="setupItem"]');

// Add click event listener to collapsEl element, triggering the toggleCollapse function
collapsEl.addEventListener('click', toggleCollapse);

// Function to toggle the collapse state
function toggleCollapse() {
    // Check if the collapsEl is expanded
    const isExpanded = collapsEl.getAttribute('aria-expanded') === 'true';

    // Toggle the 'setup-collapse' class on setupEl
    setupEl.classList.toggle('setup-collapse');

    // If expanded, collapse the setup; otherwise, expand it
    if (isExpanded) {
       expandSetup()
    } else {
        setupCollapse();
    }
}

// Function to expand the setup
function expandSetup() {
    // Set the aria-expanded attribute to true
    collapsEl.setAttribute('aria-expanded', 'true');

    // Add keyup event listener for handling escape key press during setup
    setupList.addEventListener('keyup', handleCollapseEscapeKeypress);

    // Iterate through guideList and add keyup event listeners for arrow key navigation
    guideList.forEach((guide, guideIndex) => {
        guide.addEventListener('keyup', (event) => {
            handleGuideArrowKeyPress(event, guideIndex);
        });
    });
}

// Function to collapse the setup
function setupCollapse() {
    // Set the aria-expanded attribute to false
    collapsEl.setAttribute('aria-expanded', 'false');
    collapsEl.focus();
}

// Event handler for handling escape key press during setup collapse
function handleCollapseEscapeKeypress(e) {
    if (e.key === 'Escape') {
        // Close the setup on escape key press
        toggleCollapse();
    }
}

// Event handler for handling arrow key navigation during setup
function handleGuideArrowKeyPress(event, guideIndex) {
    const isLastGuideItem = guideIndex === guideList.length - 1;
    const isFirstGuideItem = guideIndex === 0;

    const nextGuide = guideList.item(guideIndex + 1);
    const previousGuide = guideList.item(guideIndex - 1);

    // Handle arrow keys for navigation
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        if (isLastGuideItem) {
            // If last item, focus on the first guide
            guideList.item(0).focus();
            return;
        }

        // Focus on the next guide
        nextGuide.focus();
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        if (isFirstGuideItem) {
            // If first item, focus on the last guide
            guideList.item(guideList.length - 1).focus();
            return;
        }

        // Focus on the previous guide
        previousGuide.focus();
    }
}

}


function closePopUp() {
// Add click event listener to closeBtn element
closeBtn.addEventListener('click', () => {
    // Add the 'remove' class to popEl to hide it
    popEl.classList.add('remove');
});
};

function alert() {
    // Notification
const alertList = alertBtn.querySelectorAll('[role="alert-button"]');

bellEl.addEventListener('click', toggleAlert);

function toggleAlert() {
    // Check if the bell element is expanded
    const isExpanded = bellEl.attributes['aria-expanded'].value === 'true';

    // Toggle the 'show-notify' class on userBell element
    userBell.classList.toggle('show-notify');
    // Remove the 'show-menu' class from menuBox element
    menuBox.classList.remove('show-menu');

    // Check if the bell element is expanded and close or open the alert accordingly
    if (isExpanded) {
        closeAlert();
    } else {
        openAlert();
    }
}

function KeyPress(e) {
    // Close the alert when the 'Escape' key is pressed
    if (e.key === 'Escape') {
        toggleAlert();
    }
}

function handleAlertArrowKeyPress(event, alertIndex) {
    const isLastAlertItem = alertIndex === alertList.length - 1;
    const isFirstAlertItem = alertIndex === 0;

    const nextAlert = alertList.item(alertIndex + 1);
    const previousAlert = alertList.item(alertIndex - 1);

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        if (isLastAlertItem) {
            // Focus on the first alert item if it's the last one
            alertList.item(0).focus();
            return;
        }

        // Focus on the next alert item
        nextAlert.focus();
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        if (isFirstAlertItem) {
            // Focus on the last alert item if it's the first one
            alertList.item(alertList.length - 1).focus();
            return;
        }

        // Focus on the previous alert item
        previousAlert.focus();
    }
}

function openAlert() {
    // Set the 'aria-expanded' attribute to 'true' on bellEl
    bellEl.ariaExpanded = 'true';
    // Focus on the first alert item
    alertList.item(0).focus();

    // Add keyup event listener to alertBtn for handling Escape key
    alertBtn.addEventListener('keyup', KeyPress);

    // Add keyup event listener to each alert item for arrow key navigation
    alertList.forEach((alert, alertIndex) => {
        alert.addEventListener('keyup', (event) => {
            handleAlertArrowKeyPress(event, alertIndex);
        });
    });
}

function closeAlert() {
    // Set the 'aria-expanded' attribute to 'false' on bellEl
    bellEl.ariaExpanded = 'false';
    // Focus on bellEl
    bellEl.focus();
}

}


function itemsExpand() {
// Iterate through each item in itemsEl
itemsEl.forEach((item) => {
    // Add a click event listener to each item
    item.addEventListener('click', (e) => {
        // Check if the clicked element has the class 'step-title'
        if (e.target.className === 'step-title') {
            // Check if the item is expanded
            const isActive = e.target.attributes['aria-expanded'].value === 'true'
            // Check if the current item is open
            const isItemOpen = item.classList.contains("active");

            // Remove the 'active' class from all items
            itemsEl.forEach((item) => {
                item.classList.remove("active")
            });

            // Toggle the 'active' class on the clicked item if it was not open
            if (!isItemOpen) {
                item.classList.toggle("active");
                e.target.ariaExpanded = 'true';
            } 
        }
    });

    // Add a key event listener to each item
    item.addEventListener('keyup', (e) => {
        // Check if the keyup element has the class 'step-title' and also 'Enter'
        if (e.target.className === 'step-title' && e.key === 'Enter') {
            // Check if the item is expanded
            const isActive = e.target.attributes['aria-expanded'].value === 'true'
            // Check if the current item is open
            const isItemOpen = item.classList.contains("active");

            // Remove the 'active' class from all items
            itemsEl.forEach((item) => {
                item.classList.remove("active")
            });

            // Toggle the 'active' class on the clicked item if it was not open
            if (!isItemOpen) {
                item.classList.toggle("active");
                e.target.ariaExpanded = 'true';
            } 
        }
    });
});
};


function setupToggle() {
// Constants for class names
const HIDDEN_CLASS = 'hidden';
const COMPLETED = 'checkbox-Input';

// Select all elements with the id 'checkIn'
const checkIns = document.querySelectorAll('#checkIn');

// Iterate through each 'checkIn' element
checkIns.forEach((checkIn, index) => {
    // Select elements within the 'checkIn' element
    const notCompleted = checkIn.querySelector('#not-completed');
    const completed = checkIn.querySelector('#completed');
    const loadingSpin = checkIn.querySelector('#loading');

    // Add a click event listener to each 'checkIn' element
    checkIn.addEventListener('click', handleMarkDoneOrNot);

    // Function to handle marking as done
    function handleMarkAsDone() {
        notCompleted.classList.add(HIDDEN_CLASS);
        loadingSpin.classList.remove(HIDDEN_CLASS);
        checkIn.classList.add(COMPLETED);

        setTimeout(() => {
            loadingSpin.classList.add(HIDDEN_CLASS);
            completed.classList.remove(HIDDEN_CLASS);
            checkIn.ariaLabel = checkIn.ariaLabel.replace('as done', 'as not done');
        }, 100);
      

        idx++;
        count += 14.4;
        updateProgressStatus()
        itemsEl[idx - 1].classList.remove('active');
        itemsEl[idx].classList.add('active');
    }

    // Function to handle marking as not done
    function handleMarkNotDone() {
        completed.classList.add(HIDDEN_CLASS);
        loadingSpin.classList.remove(HIDDEN_CLASS);

        setTimeout(() => {
            loadingSpin.classList.add(HIDDEN_CLASS);
            notCompleted.classList.remove(HIDDEN_CLASS);
            checkIn.ariaLabel = checkIn.ariaLabel.replace('as not done', 'as done');
        }, 300);

        

        idx--;
        count -= 14.4;
        updateProgressStatus()
    }

    // Function to handle marking as done or not done
    function handleMarkDoneOrNot() {
        const MarkAsDone = checkIn.classList.contains(COMPLETED);

        if (MarkAsDone) {
            checkIn.classList.remove(COMPLETED);
            handleMarkNotDone();
        } else {
            checkIn.classList.add(COMPLETED);
            handleMarkAsDone();
        }
    }

    // Function to update progress status
    function updateProgressStatus() {
        progStatus.innerHTML = `<p id="progress-status">${idx} / ${itemsEl.length} completed</p>`;
        progLevel.style.width = count + 'px';
    }
    
});

};


app();





