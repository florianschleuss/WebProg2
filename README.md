# 2nd Webdevelopment Submission

#### Table of Contents
1. [Introduction](#introduction)
2. [Angular](#setting-up-angular)
3. [Angular Project Structure](#angular-project-structure)
  3.1. [App Component](#app-component)

## Introduction

This app is created to show one possible frontend-implementation of the web api from https://shopping-lists-api.herokuapp.com/ .
It gives you the opportunity to create or delet todo lists, add, check or remove items from lists or show existing lists from other users.
Additionally there is a dark mode and a mobile version.

## Setting up Angular

Make sure you have the Angular CLI installed globally to view this project.
For detailed information how to set up Angular click [here](https://angular.io/guide/setup-local).


## Angular Project Structure

This project is created with five components. Including the main App-Component.
Additionally there are three services to make special functions available to all components.

### App Component
The App Component is the initial page which is loaded by the browser.

### Header Component


### Sidebar Component


### List-View Component


### List Component


### List Service
The List service provides all functions related to the backend API. In addition to the API key, the URI is also stored here. For communication with the client, the Angular HTTP Client is used.

### Sidebar Service
The sidebar service is responsible for the dynamic provision of information about the selectable lists for the sidebar.

### Theme Service
The Theme-Service is responsible for providing all the required colours for the components. All colors are set as variables in the CSS files to be changeable. This functionality enables the darkmode.

### Component Routing
