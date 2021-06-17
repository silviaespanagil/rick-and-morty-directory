# React evaluation: Rick and Morty Directory
## _“Wubba Lubba Dub Dub!”_
¡Hola mundo!

What a journey! Looks like now  I can create some awesome interactive web apps using React✨. This is my React evaluation for Adalab's bootcamp, let's dig in!⛏️

<img src="https://user-images.githubusercontent.com/81619759/122358191-b5d88300-cf54-11eb-9261-3359076e6d5b.png" width="400"/>  <img src="https://user-images.githubusercontent.com/81619759/122358585-0fd94880-cf55-11eb-9a1f-7bc2dc9f6864.png" width="400"/>



## Initial Requirements 📋

- Create a react app.
- The app must fetch from an API.
- Render the characters information on the home page. Required information is: Picture, name and specie.
- Add a filter that allows the user to search by name any character.
- There are four mandatory components: Filters, CharacterList, CharacterCard and CharacterDetail.
- If the user clicks on any character card, a new route must be created that shows the clicked character detail. Detail must show previous information plus origin planet and episodes.

## Quality Requirements 🌟
- Semantic must be right.
- When the user filters if it press the enter key nothing must happen.
- If the user search an unexistant character we must give a feedback.
- The filter must work either if the user writes with caps on or not.
- When in the character detail if the user wants to go back to the home page the search input value must remain.

## Extra features 🔥
- Add some styles (I apologize on advance, the girl is a developer  but not a designer😬).
- Use grid for the character list.
- Make it responsive.
- Show icons for status and specie.
- The character URL must be shareable.
- If we refresh the browser, character information must be kept.
- If the user goes  to unexistant pages we must give a proper feedback.
- Order the character list alphabetically.
- Add an extra filter to search by specie.

## My own extra features 👩‍🎤
- Add a reset button that resets the filters values

## Built with 🔨
- Visual Code Studio: as code editor
- SASS
- React

## Development ⌨️

This time I did a little flowchart of my user behavior just to keep on track of the big picture. After it I started the coding. 

The process went a little bit like this: I went in for the fetch, cleaned it and imported it to my App and then I created my CharacterCard with the fetched information. Then I created my CharacterList that renders the CharacterCards. Afterwards  I coded my searchBox and LocalStorage because we want all this to be kept.

With the creation of my LocalStorage I also changed my fetch because if it's there we don't need to call it back, right?. 

Next step was the CharacterDetail and creating all the routes to go to the detail, and go back to the home page. Here I also created my "error" pages and this is  so fun because with the creative liberty I had some fun. I decided to do two components: one for an unexistant page, and another one for an unexistant search.

With this I had my  mandatory features. For the bonus I added a new component for a second filter and a "Filters" component that houses both of my filters. I also did two extra components for the cards icons that looks for the information and render the correspondent icon.

For my styles I installed SASS and using BEM tried to make it look cute and from another galaxy.


## Want to clone my repository? 🐑🐑

Go for it! And if you make something pretty, please show me

## Do you have any idea? ✏️

I'm an student and as I stated before am learning a whole lot of Front End Developing, so, if  you have any idea that I could develope please tell me so and I will try to.

## License

MIT
