const themeSelector = document.getElementById("theme-select");
function changeTheme() {
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    const value = themeSelector.value;
    // if the value is dark then:
    if (value == 'dark')
    {
        // add the dark class to the body
        document.body.setAttribute("class", "dark");
        // change the source of the logo to point to the white logo.
        document.getElementsByClassName("logo").setAttribute = ("src", "byui-logo_white.png");
    }
    // otherwise
    else
    {
        // remove the dark class
        document.body.setAttribute("class", "");
        // make sure the logo src is the blue logo.
        img.src = "week1/mission/byui-logo_blue.webp";
    }
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener('click', changeTheme);