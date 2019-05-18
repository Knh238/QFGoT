# QFGoT

If I had more time What I would do:

As you can see, I created a hashmap for house ids
Why? So that overlord names/titles could be more easily accessed for display purposes without having to make another get request

I also created a hashmap for character names and ids
I incrementally grabbed all 2137 characters in chunks of 50 and put them in the hashmap to then put in the redux store

having something like: const allCharacters={1:'Sansa',2:'Arya'}
would allow me to grab the character name for display puropses

in both house context -- if they are the current lord or a forsworm member
and for listing characters in each book

I added a proprety in the redux store CharactersLoaded: true/false to prevent it from continuing to load but I haven't totally checked to make sure it works as indtended

There are some errors --especially when you navigate before store is done loading that I ran out of time to account for
