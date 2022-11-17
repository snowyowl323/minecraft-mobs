# Development

### Link to Deployed Website
`https://snowyowl323.github.io/minecraft-mobs`

### Goal and Value of the Application
The goal of the application is to be able to find mobs in minecraft which satisfy certain criteria. For example, as a player, I might want to find passive mobs in the overworld. Using this web application, I can filter to see passive mobs in the overworld. Its value to the user is derived from the goal. As a player, I can search for mobs that meet criteria based on criteria such as height, size, dimension, and type.

### Usability Principles Considered
I use text hierarchy on the page to show which parts of the page are important. I use color to show which buttons are actively selected. Additionally, I made sure each piece of text is high contrast with the background for easy readability. Finally, I made it so that hovering over a button would change the cursor so that it is clear that buttons are clickable.


### Organization of Components
The top component is App. App has the header and a FilteredList component. The FilteredList has ButtonGroups to filter and sort the list as well as a DisplayList to actually display the list. The ButtonGroups component is a set of buttons which can filter the displayed icons. DisplayList has MobIcons, which display the actual mob information including pictures, names, and other information.

### How Data is Passed Down Through Components
Data is passed between components using props. I pass both functions and variables between components. App passes all of the information about the mobs to the FilteredList. The ButtonGroups take in information on what to display on the buttons (type of filter and how to filter) and what functions the buttons should call (updateFilter). DisplayList takes in a filtered list of all of the mob data. Finally, MobIcon takes in all of the information about each mob (from the JSON).  

### How the User Triggers State Changes
Buttons call functions which update page states using the react hook useState. When the states are updated, the page re-renders with new information.

