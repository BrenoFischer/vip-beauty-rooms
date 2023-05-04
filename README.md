# VIP Beauty Rooms
Informative website for the Beauty Salon, located on 61 Henry Street, Limerick, Ireland.
https://uniquebeauty-limerick.com
</br>
</br>
</br>

## Project Overview
<p>This App contains an authentication system, only for managers. Users cannot create an account and should not have access to credentials.</p>

<p>An authenticated manager can edit the store opening hours, add/edit/delete services the store offers and add/edit/delete posts, with the latest news.</p>
</br>
</br>
</br>

### Services
<p>A service is beauty procedure done by one of the store's professional. This can be, for examaple, a pack of massages or the manicure service.</p>

<p>On the Web App, a service can be clicked to display more detailed information.</p>

<b>Service Card</b>

![Service Card](./src/assets/readme/screen1.png)

<b>Service clicked for more information</b>

![Service Card Expanded](./src/assets/readme/service-clicked.png)

</br>
</br>
</br>

### Posts
<p>Posts are the way to share the latest news with the client.</p>

<p>The post format is inspired on the traditional social medias posts, where the information can be provided via image and text.</p>

<p>Posts are displayed inside a carousel, that is also responsive for small screen devices.</p>

<b>Posts Carousel</b>

![Post](./src/assets/readme/logged-post.png)

</br>
</br>
</br>

### Database and State Management
<p>A database was added to the project, using <b>Firebase</b>. All services, posts and opening hours are saved on the Firestore database and fetched when required.</p>

<p>After information is fetched from the database, it is stored on the app using <b>Redux.js</b>. This enables user to change website route and preserve the same state. For example, when a manager sign-in, this state is going to continue on different pages routes, while on the session.</p>


</br>
</br>
</br>

### Manager Authentication
<p>Store managers are able to edit all kind of website information. This is a huge step to give managers power to customize and update the web app, without the need of a developer to be involved.</p>

<p>Manager authentication features:</p>
<ul>
    <li>uses Firebase Authentication</li>
    <li>enables authenticated users to edit/add/deleted services, posts and opening hours</li>
    <li>exclusive pages, only for authenticated users</li>
</ul>
</br>
</br>
<b>Add Service page for managers</b>

![Add Service Page](./src/assets/readme/add-service.png)
</br>
</br>

<b>Add Service page with filled fields</b>

![Add Service Page Filled in](./src/assets/readme/add-service2.png)

<p>Pages to add/edit a service/post/opening hours has a preview system, that automatically updates on user input.</p>
</br>
</br>
</br>

## Pages and Screens

<b>Footer</b>

![Footer](./src/assets/readme/screen2.png)

</br>
</br>
</br>
<b>Service details page</b>

![Service Details](./src/assets/readme/screen3.png)

</br>
</br>
</br>
<b>Responsive card design for smaller screens</b>

![Small Screens](./src/assets/readme/screen4.png)

</br>
</br>
</br>
<b>Login Page</b>

![Login Page](./src/assets/readme/login-screen.png)

</br>
</br>
</br>
<b>Routes for managers</b>

![Routes for manager](./src/assets/readme/nav-bar-logged.png)

</br>
</br>
</br>
<b>Opening hours edit page</b>

![Opening Hours](./src/assets/readme/opening-hours.png)
</br>
</br>
</br>

## Technical information

<ul>
    <li>Built with React.js, Sass, Redux.js, Firebase</li>
    <li>Others libs includes React Icons, React Responsive, Material UI and Swiper</li>
    <li>Responsive design for smaller devices</li>
    <li>Design made by the author, following client needs</li>
</ul>