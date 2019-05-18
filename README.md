# QFGoT

If I had more time What I would do:

As you can see, I created a hashmap for house ids
Why? So that overlord names/titles could be more easily accessed for display purposes without having to make another get request

If I had time, I would also create a hashmap for character names and ids

I would probably also add a proprety in the redux store CharactersLoaded: true/false

Then I would incrementally grab all 2137 characters in chunks of 50 and put them in the hashmap to then put in the redux store or you could cache it

having something like: const allCharacters={1:'Sansa',2:'Arya'}
would allow me to grab the character name for display puropses

in both house context -- if they are the current lord or a forsworm member
and for listing characters in each book

problem is: its a huge call
but you'd only make it once and then the result would be a lot more readable
