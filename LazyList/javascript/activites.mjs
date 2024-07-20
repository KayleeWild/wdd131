export const activities = [
    {
        name: 'Whittling',
        description: 'Carve wood into an object by repeatedly cutting of small slices of it. Make a bear or a button, a coyote or a cake, if you can think it you can carve it.',
        duration: '30',
        cost: '0',
        location: 'outside',
        link: 'https://www.instructables.com/Wood-Whittling-101/'
    },
    {
        name: 'Quilting',
        description: 'Putting sewing skills to practical use. Learn how to make a nice blanket or comforter out of fabric and your awesome skills! Join the grandmas of the world in one of their favorite passtimes.',
        duration: '120+',
        cost: '55',
        location: 'inside',
        link: ''
    },
    {
        name: 'Building Arduino Circuits',
        description: 'Using the "Super Learning Kit" students have to purchase for the ECEN106 class, you can make all sorts of cool projects. Test your friends\' memories with a simon says game, or unlock your inner Mozart with an arduino piano. Look online for hundreds of ideas!',
        duration: '60',
        cost: '0',
        location: 'inside',
        link: 'https://www.instructables.com/Arduino-Projects/'
    }
]
export function Activity(name, description, duration, cost, location, link){
    this.name = name;
    this.description = description;
    this.duration = duration;
    this.cost = cost;
    this.location = location;
    this.link = link;
}
export function activityTemplate(activity, count) {
    let link = `<p id="link${count}"><a href="${activity.link}">Inspo Link (${activity.link})</a></p>`;
    if (activity.link == '') {
        link = ''
    }
    return `
    <div class="activity-card">
        <h3 id="name${count}">${activity.name}</h3>
        <p id="duration${count}" class="box">${activity.duration} minutes</p>
        <p id="cost${count}" class="box">$${activity.cost}</p>
        <p id="location${count}" class="box">${activity.location}</p>
        <p id="description${count}">${activity.description}</p>
        ${link}
    </div>
    `;
}
