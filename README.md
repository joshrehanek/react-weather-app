# react-weather-app
- This is a simple weather app created using React. When a user enters a city name they are returned the city name, date, temperature, and a one word text description of the weather. The background updates to fit the searched city's weather. This app makes gets it's info from the openweather api via a fetch request. This app is based off the following tutorial (https://www.youtube.com/watch?v=GuA0_Z1llYU) that I made changes to to make more personal and better understand React.  

## Table of contents
- [General Info](#general-info)
- [Installation](#installation)
- [Deployed App](#deployed)
- [Link to GitHub Repo](#link-to-github-repo)
- [Code Snippet](#code-snippets)
- [Demo](#demo)
- [Technologies](#technologies)
- [Summary](#summary)

## General Info
*This app is based off of a tutorial (listed in summary) that I followed and changed elements of to better understand React JS. All comments are my own.

When a user enters a city name in the search area,
Then they are returned the temperature and weather for the city
With the city name and date included.
The apps background also updates to fit the weather in each city.


## Deployed App
- https://frozen-headland-03564.herokuapp.com/

## Link to GitHub Repo
- https://github.com/joshrehanek/react-weather-app

## Code Snippet

Ternary operator used to change the apps appearance (via class) based on the weather return by the api call
```
<div className= {
      (typeof weather.main != "undefined" ) 
        ? ((weather.weather[0].main === "Clear") 
        ? 'App sunny'
        : (weather.weather[0].main === "Clouds")
        ? 'App clouds' 
        : (weather.weather[0].main === 'Rain')
        ? 'App rain'
        : (weather.weather[0].main === 'Snow')
        ? 'App snow'
        : 'App')
        : 'App'}>
```
## Demo
- ![Demo](./src/assets/demo.gif)

## Technologies
- [node.js](https://nodejs.org/en//)
- [npm](https://www.npmjs.com/)
- [React](https://reactjs.org/)
- [bootstrap](https://getbootstrap.com/)


## Summary

- This is a simple weather app created using React. When a user enters a city name they are returned the city name, date, temperature, and a one word text description of the weather. The background updates to fit the searched city's weather. This app makes gets it's info from the openweather api via a fetch request. This app is based off the following tutorial (https://www.youtube.com/watch?v=GuA0_Z1llYU) that I made changes to to make more personal and better understand React.  

