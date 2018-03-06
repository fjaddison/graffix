# Graffix

## Getting Started
See the live site at [here](https://fjaddison.github.io/graffix/) or see the [front end](https://github.com/fjaddison/graffix) or [back end](https://github.com/fjaddison/graffix-backend) github repositories. All are welcome to fork and clone the repos if they wish, I only ask that people generate their own Google API keys.

## Technologies Used
The site was built with a React front end and a Ruby on Rails back end. It incorporates the Goodle Maps Javascript API v3, as well as a dependency called react-google-maps developed by Tom Chen which allows the incorporation of a Google map within a React component. Additionally, I used Recompose as per the react-google-maps documentation, and axios to call on the API. On the back end, I used a Gem called rack-jsonp-middleware developed by Roberto Decurnex in order to serve json from my rails API.

## Issues
Initially, I did not want to use any dependencies related to the Google Maps API in order to impliment this technology within React. After troubleshooting, I decided to use the react-google-maps dependency as it seems to have the widest use. I also had issues related to cross origin requests from my front end to the back end. This was solved by the rack-cors Gem and some slight configuration adjustment. 

## Future Issues and Features
I would like to be able to develop this product for mobile use so as to keep the functionality confined to the simplest UX possible. Currently, the user experience is janky and far from ideal. This would mean using React Native or Swift.

## Built With
Javascript and Ruby using the React and Rails frameworks.

## Acknowledgements
Special thanks to the GA instructors for their help in troubleshooting issues. Additional thanks to Tom Chen for his work on his implemintation of Google Maps and React. Sections of the source code should show additional resources.
