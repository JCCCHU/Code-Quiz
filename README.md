This application lets the user take a quiz on JavaScript trivia.

The quiz makes extensive use of event handlers, timers, and jQuery to modify HTML on the fly and iterate through the game state.

"Live" updates are handled through rendering functions which are triggered on button presses or timer ticks.

Many parts of the quiz are dynamic; the timer is based on the number of questions in the quiz, the quiz answers are randomly chosen, and the order of questions asked is also randomly chosen, meaning that users can take the quiz multiple times and may not get it right each time.

Quiz administrators can substantially change the difficulty of the quiz by adding more incorrect answers (especially ones similar to the correct answer), changing the initial number of seconds/time penalty for wrong answers, or increasing the max number of answers shown.

The scoreboard is handled through local storage, by stringifying/parsing a JSON object with names and scores of previous player attempts.

Unfortunately, the assignment is not perfect. It is severely lacking in visual appeal, and the scoreboard is not sorted in order of score. Future adjustments can make significant improvements in these areas.