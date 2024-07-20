import {activities, Activity, activityTemplate} from "./activites.mjs";
function renderActivities(activitiesList) {
    document.querySelector("#replaceable").innerHTML = '';
    const replaced = document.querySelector("#replaced");
    let activityHtml = ``;
    let count = 1;
    activitiesList.forEach(activity => {
        activityHtml += activityTemplate(activity, count);
        count ++;
    })
    return replaced.innerHTML = activityHtml;
}
function searchHandler(){
    const query = document.querySelector("#searchInput").value;
    const lowerQuery = query.toLowerCase();
    const filteredAndSorted = filterActivities(lowerQuery);
    renderActivities(filteredAndSorted);
    // testing
    console.log('Search query:', query); 
    console.log('Filtered and sorted activities:', filteredAndSorted);
}
function filterActivities(query){
    function searchContains(activity){
        return(
            activity.name.toLowerCase().includes(query) ||
            activity.description.toLowerCase().includes(query) ||
            activity.duration.toLowerCase().includes(query) ||
            activity.cost.toLowerCase().includes(query) ||
            activity.location.toLowerCase().includes(query)
        );
    }
    const filtered = activities.filter(searchContains);
    const sorted = filtered.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } 
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    return sorted;
}
// event listener stuff
const searchButton = document.querySelector("#searchButton");
const submitButton = document.querySelector("#submitButton");
if (submitButton) {
    const form = document.querySelector("form");
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // form values
        const name = form.elements['name'].value;
        const description = form.elements['desc'].value;
        const duration = form.elements['duration'].value;
        const cost = form.elements['cost'].value;
        const location = form.elements['location'].value;
        const link = form.elements['inspo'].value;
        // create new activity
        const myActivity = new Activity(name, description, duration, cost, location, link);
        // add to list
        activities.push(myActivity);
        // reset the form
        console.log('New activity added:', myActivity);
        form.reset();

    })
} else if (searchButton) {
    document.querySelector("#searchButton").addEventListener("click", searchHandler);
}
// document.querySelector("#submitButton").addEventListener("click", addActivity)