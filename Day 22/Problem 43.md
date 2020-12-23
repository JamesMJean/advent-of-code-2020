<h1 align="center">--- Day 22: Crab Combat ---</h1>

## Problem 43

It only takes a few hours of sailing the ocean on a raft for boredom to sink in. Fortunately, you brought a small deck of space cards! You'd like to play a game of Combat, and there's even an opponent available: a small crab that climbed aboard your raft before you left.

Fortunately, it doesn't take long to teach the crab the rules.

Before the game starts, split the cards so each player has their own deck (your puzzle input). Then, the game consists of a series of rounds: both players draw their top card, and the player with the higher-valued card wins the round. The winner keeps both cards, placing them on the bottom of their own deck so that the winner's card is above the other card. If this causes a player to have all of the cards, they win, and the game ends.

For example, consider the following starting decks:

Player 1:<br>
9<br>
2<br>
6<br>
3<br>
1<br>

Player 2:<br>
5<br>
8<br>
4<br>
7<br>
10<br>

This arrangement means that player 1's deck contains 5 cards, with 9 on top and 1 on the bottom; player 2's deck also contains 5 cards, with 5 on top and 10 on the bottom.

The first round begins with both players drawing the top card of their decks: 9 and 5. Player 1 has the higher card, so both cards move to the bottom of player 1's deck such that 9 is above 5. In total, it takes 29 rounds before a player has all of the cards:

-- Round 1 --<br>

Player 1's deck: 9, 2, 6, 3, 1<br>
Player 2's deck: 5, 8, 4, 7, 10<br>
Player 1 plays: 9<br>
Player 2 plays: 5<br>
Player 1 wins the round!<br>

-- Round 2 --<br>
Player 1's deck: 2, 6, 3, 1, 9, 5<br>
Player 2's deck: 8, 4, 7, 10<br>
Player 1 plays: 2<br>
Player 2 plays: 8<br>
Player 2 wins the round!<br>

-- Round 3 --<br>
Player 1's deck: 6, 3, 1, 9, 5<br>
Player 2's deck: 4, 7, 10, 8, 2<br>
Player 1 plays: 6<br>
Player 2 plays: 4<br>
Player 1 wins the round!<br>

-- Round 4 --<br>
Player 1's deck: 3, 1, 9, 5, 6, 4<br>
Player 2's deck: 7, 10, 8, 2<br>
Player 1 plays: 3<br>
Player 2 plays: 7<br>
Player 2 wins the round!<br>

-- Round 5 --<br>
Player 1's deck: 1, 9, 5, 6, 4<br>
Player 2's deck: 10, 8, 2, 7, 3<br>
Player 1 plays: 1<br>
Player 2 plays: 10<br>
Player 2 wins the round!<br>

...several more rounds pass...

-- Round 27 --<br>
Player 1's deck: 5, 4, 1<br>
Player 2's deck: 8, 9, 7, 3, 2, 10, 6<br>
Player 1 plays: 5<br>
Player 2 plays: 8<br>
Player 2 wins the round!<br>

-- Round 28 --<br>
Player 1's deck: 4, 1<br>
Player 2's deck: 9, 7, 3, 2, 10, 6, 8, 5<br>
Player 1 plays: 4<br>
Player 2 plays: 9<br>
Player 2 wins the round!<br>

-- Round 29 --<br>
Player 1's deck: 1<br>
Player 2's deck: 7, 3, 2, 10, 6, 8, 5, 9, 4<br>
Player 1 plays: 1<br>
Player 2 plays: 7<br>
Player 2 wins the round!<br>


== Post-game results ==<br>
Player 1's deck: <br>
Player 2's deck: 3, 2, 10, 6, 8, 5, 9, 4, 7, 1<br>

Once the game ends, you can calculate the winning player's score. The bottom card in their deck is worth the value of the card multiplied by 1, the second-from-the-bottom card is worth the value of the card multiplied by 2, and so on. With 10 cards, the top card is worth the value on the card multiplied by 10. In this example, the winning player's score is:

   3 * 10<br>
\+  2 *  9<br>
\+ 10 *  8<br>
\+  6 *  7<br>
\+  8 *  6<br>
\+  5 *  5<br>
\+  9 *  4<br>
\+  4 *  3<br>
\+  7 *  2<br>
\+  1 *  1<br>
= 306<br>

So, once the game ends, the winning player's score is 306.

Play the small crab in a game of Combat using the two decks you just dealt. What is the winning player's score?