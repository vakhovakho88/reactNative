expo cli - is easier
react native cli - complicated but more control

we are going to use expo

* npx expo-cli init food

and we have questions that we should fill
> blank



YELP
My App

Client ID
5EOqoKZ1xFtwwuKJ5WoH8A

API Key
grzeB_oO4raONAFvUczbBZBa-wxR1tdH7eWmkhrv0nLgMqoHRGodlh7Xm31pTEIBG05okqPfrYeEQwxujmcJbJqaad-VJnWKkwq_GD1g-LTPDTlSEToigHRdmFtuXnYx




3 types of navigators,

install navigator: npm install react-navigation


App.js special file
automatically shown what exported
on the screen

https://github.com/expo/vector-icons



axios is alternative to fetch 
axios is easier to use and we have better results

>>npm install axios




we must try to separate jsx and business logik
it is cool to extract business logik in another file
and reuse it on many places
thats we we create useResults, to use it as hook.
it means we created our own hook...


the next step is to create a separate component fro result list.


props has much more than we give it, check it..


comunications between screens:
- what i tapped on
- it is done with navigation
- We can pass second argument to our navgation. it is javascript object.
- but it isnot in props it is in navigation and we call it from there



BLOG app
- a lot of about CRUD (Create, Read, Update, Delete)
again create new project
>npx expo-cli init blog

1. Install React Navigation

npm install react-navigation

2. Install Dependencies

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

3. Install React Navigation Stack

npm install react-navigation-stack @react-native-community/masked-view

4. Start the app and clear cache with npm start -c



Create  Blog post provider


Context syste helps us to move information from parent to child hierarchies without to write much code. In Props it is easy to setup but much code to write.


hooks are functions they add an additional functionality to our functional components
