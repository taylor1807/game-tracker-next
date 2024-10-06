in this weeks project i decided to re use last weeks project and implement them in next and add a comments section.

i copied the games table from last week (so i could keep the data alreadt filled in) and removed the likes and foreign key for last weeks genre table(i decided not to include it this week as i wanted to focus on the comments section). and created a comments table.

it has the same premise as last week with a page listing games which you now sort by ascending/descending and remove the sort altogether, you can view a games details by clicking the link like before. And a link to add a new game.

you will then be greeted by a details page with a link to delete (more on this later) the game post and another to view the comments.

the comments will be displayed (or if none a p tag will render instead) with a link to edit each post.

each page has been givin routes to return to other pages also after each form has been filled in you will be redirected to the corresponding page (eg games/comments).

i have added metadata for each page so the tab shows where you are.

i went for the same theme as last time as i felt it worked quite well but this time i did it with tailwind instead (omg so much easier to use :) ).

what i found most challenging this week was the delete button, i kept getting error after error regarding "use server" and "use client"
for example the page needed to be server for the db routes but i couldn't have an onClick for the button, it may be my positioning of functions but after a lot of googling i opted to create a component as a form with a hidden input to import the button into the page i wanted it. i didn't really see much in the docs about server actions and mutations regarding deletes but i think getting more familiar with next what i originally wanted i could of achieved.

if i had more time with this i would of added the comment categories and reintroduce the genres table, i also wanted to use some subtle framer-motion but time slipped by and wasn't part of my MVP.

going over the lessons this week really helped me structure this the "next way" as i wanted to showcase as much as possible from what we had learnt this week. i decided against Frankies form method (even though it was fascinating to watch) as i wanted to use the new method being as the page autoredirects once it has been filled in.

i would like to thank stackOverflow, Next.jsdocs, tailwind docs, the demo's on github, the many random websites and youtube videos viewed/watched.
