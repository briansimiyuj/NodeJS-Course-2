import { ages, greetings, people } from "./people.js"

people.map((person, index) =>{

    greetings(person, ages[index])

})