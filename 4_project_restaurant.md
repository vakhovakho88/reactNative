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




#Server
we are going to use json server for our application
but it is only good for development purposes
the url: https://www.npmjs.com/package/json-server

server setup is easy but with react native it is relative complicated.
json server runs on our computer screen 16

to avvoid having problems with tunnels an lan we are going to use ngrok server
ngrok makes it possible to make our computer reachable for another devices. (screen 17)

we are going to make a directory with the namy (optionall) jsonserver. One step upper from our blog directory

then we are making >npm init in this directory to generate json package

then we install couple modules: 
npm install -s json-server
npm install -s ngrok
or just: npm install -s json-server ngrok

start code editor inside a directory:
> code .

in the folder let us create db.json file, this file is eventually where json stores all the information and we are going to add a poilerplate json there

then we are going to go to package.json and add two scripts in scripts object:
one script is dedicated to starting up a json server and another one to strar up ngrok

ngrok exposes json server on our specified port.
  "scripts": {
    "db": "json-server -w db.json",
    "tunnel": "ngrok http 3000"
  },
 
 then open up twwo terminals in this directori 
 in one terminal:
 npm run db
 it starts json server if the port is not busy
 now we can acces our json server from our computer but not from another machines
 here we should use ngrok to make it reachable for outside world

 in second terminal let us write 
 npm run tunnel

 now the server is ready for computer and for another devices too. 

 the next step is to install axios and with axios we can make requests



 structure of interaction and requests (screenshot 18) 