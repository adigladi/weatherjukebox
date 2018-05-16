<h1>weatherjukebox - intro</h1>

<b>Our project will retrieve the users location (via geolocation or user input) and give music suggestions based on the current weather.</b>

<p>The app takes weather info from <a href="https://openweathermap.org/api">OpenWeatherMap's API</a>, gets song info from <a href="https://developers.deezer.com/api/explorer">Deezer's API</a> and finally plays music using a player from Deezer.</p>

<h2>Awesome, how do I try it out?</h2>
<b>No configuration is needed on the user side - just press the hamburger menu in the top left corner, create an account, log in and get Jukebox'd!</b>

<h2>Screengrabs from the app:</h2>
<p>The app is deployed using Firebase and can be found <a href="https://weather-jukebox.firebaseapp.com/">here</a>.</p>

<img src="http://www.emildickson.se/weatherjukebox/1_start.png" alt="logo"/>
<i>The front page.</i><br/><br/>

<img src="http://www.emildickson.se/weatherjukebox/2_songresult.png" alt="logo"/>
<i>A song result for someone in Dallas.</i><br/><br/>

<img src="http://www.emildickson.se/weatherjukebox/3_userpage.png" alt="logo"/>
<img src="http://www.emildickson.se/weatherjukebox/4_playfavourites.png" alt="logo"/>
<img src="http://www.emildickson.se/weatherjukebox/5_managetracks.png" alt="logo"/>
<i>The pages in the user section. Note that the user can play their previously liked tracks and also manage history, liked tracks and disliked tracks.</i><br/><br/>

<img src="http://www.emildickson.se/weatherjukebox/6_menu.png" alt="logo"/>
<img src="http://www.emildickson.se/weatherjukebox/7_menusignedout.png" alt="logo"/>
<i>The menu changes dependning on wether the user is currently signed in or not. This is a Firebase feature.</i><br/><br/>

<img src="http://www.emildickson.se/weatherjukebox/8_loginscreen.png" alt="logo"/>
<img src="http://www.emildickson.se/weatherjukebox/9_accountcreation.png" alt="logo"/>
<i>Login and signup pages.</i><br/><br/>


<h2>About the actual work</h2>

<ul>
<li><b>What we have done</b></li>
<ul>
    <li>A welcome page where the user can type in their location or have it decided by geolocation and then press "get jukebox'd" to get a music suggestion.</li>
    <li>A 'user' section where the user can se their saved and disliked ("blacklisted") tracks. The user can also remove tracks from either of the lists. The section consists of two views/pages.</li>
    <li>A loading screen, present while fetching data from the Deezer API.</li>
    <li>A 'jukebox' page, that plays music for the user and displays information about weather and genre. The user has the ability to add the song to their favourites list or add it to a blacklist to ensure that this particular song is not suggested again.</li>
    <li>Users are able to play liked tracks again.</li>
    <li>Users are able to create an account and log in via Firebase.</li>
    <li>User data is stored using Firebase.</li>
</ul>
<li><b>Our project file structure (images are ignored)</b></li>
<ul>
    <li><i>The "public" folder</i></li>
    <ul>
        <li>404.html - automatically generated by Firebase.</li>
        <li>index.html - the foundation on which the app rests.</li>
    </ul>
    <li><i>The "src" folder</i></li>
    <ul>
        <li>App.css - empty css file.</li>
        <li>App.js - acts as router for the app.</li>
        <li>data/WeatherModel.js - this handles all of the logic for the app, such as generating songs, communicating with API's and such.</li>
        <li>data/GenreMatches.js - Contains info about genres matched to weather id's.</li>
        <li>Fonts/LemonMilk.otf - a nice font we use in the app.</li>
        <li>firebase/auth.js - js file for authenticating to Firebase during login, logout, account creation and resetting forgotten passwords.</li>
        <li>firebase/firebase.js - Initializes Firebase and downloads user data from the realtime database.</li>
        <li>index.css - empty css file.</li>
        <li>index.js - browser router.</li>
        <li>Jukebox/Jukebox.css - css file for the Jukebox view.</li>
        <li>Jukebox/Jukebox.js - Handles everything for the Jukebox view.</li>
        <li>Jukebox/loading.svg - Pacman for when the app is loading.</li>
        <li>User_all/User_all.css - handles css for the User_all view</li>
        <li>User_all/User_all.js - favourites and blacklist view for the user page.</li>
        <li>User_main/User_main.css - css for the User_main view.</li>
        <li>User_main/User_main.js - main view for the user page.</li>
        <li>User_main/User_login.css - css for the User_login view.</li>
        <li>User_login/User_login.js - main view for the login screen.<b>Note that similar files are available for signup and "forgot password".</b></li>
        <li>Welcome/Welcome.css - handles css for the front page.</li>
        <li>Welcome/Welcome.js - this is the first page that the user is presented with when using the app.</li>
    </ul>
</ul>
</ul>
