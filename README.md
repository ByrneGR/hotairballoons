1. Background and Overview
    * In these unprecedented times of uncertainty and isolation, loneliness and anxiety is rampant. AirBalloons aims to be an escape for those seeking a moment to breathe and clear their heads. Through calming music, engaging visuals, and a likeminded community, visitors can take some time to themselves and connect with people around the world who enjoy the same music.
2. Functionality and MVPs
    * Users will be able to:
        * View infinite animation of floating hot air balloons over a serene backdrop as well as other animations to supplement creating an immersive visual environment 
        * Change colors of balloon by clicking on it
        * Play and mute music
        * Chat with other users on the site
3. Wireframes
![Imgur](https://imgur.com/fx7s0AJ.jpg)

4. Architecture and Technology
    * Frontend
        * Bundler - webpack
        * Environment - Node.js
        * Graphics - Canvas
        * Animation - Snap.svg
        * Music - Soundlcoud API
    * Backend
        * Database - MongoDB
        * Routing - Express
        * ODM - Mongoose
    * Miscellaneous
        * SVG Art - Adobe Illustrator
    * File Structure
        * index.html will hold divs for each component
        * index.js will connect all javascript files
            * animation 
                * air_balloons.js
                * background_animations.js
            * Music
                * soundcloud_player.js
            * chat
                * chat_actions.js
                * chat_interface.js
                * chat_reducer.js
                * chat_api_util.js
                * store.js
5. Implementation TImeline
    * Day 1: Animations
        *  Air balloon movement animation and appearance randomization complete
    * Day 2: Animations/SoundCloud API
        * Finish balloon-related animations if necessary
        * Integrate sound cloud API and have music playing on website
    * Day 3: Live chat
        * Backend for chat implemented
        * Chat front end implemented
    * Day 4/5: Supplemental animations
        * Background image/animations in illustrator
6. Bonus Features
    * Additional appearances by genre of music
    * Profiles
    * Personalized character

