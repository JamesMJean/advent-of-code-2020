<h1 align="center">--- Day 11: Seating System ---</h1>

## Problem 21

Your plane lands with plenty of time to spare. The final leg of your journey is a ferry that goes directly to the tropical island where you can finally start your vacation. As you reach the waiting area to board the ferry, you realize you're so early, nobody else has even arrived yet!

By modeling the process people use to choose (or abandon) their seat in the waiting area, you're pretty sure you can predict the best place to sit. You make a quick map of the seat layout (your puzzle input).

The seat layout fits neatly on a grid. Each position is either floor (.), an empty seat (L), or an occupied seat (#). For example, the initial seat layout might look like this:

L.LL.LL.LL<br>
LLLLLLL.LL<br>
L.L.L..L..<br>
LLLL.LL.LL<br>
L.LL.LL.LL<br>
L.LLLLL.LL<br>
..L.L.....<br>
LLLLLLLLLL<br>
L.LLLLLL.L<br>
L.LLLLL.LL<br>

Now, you just need to model the people who will be arriving shortly. Fortunately, people are entirely predictable and always follow a simple set of rules. All decisions are based on the number of occupied seats adjacent to a given seat (one of the eight positions immediately up, down, left, right, or diagonal from the seat). The following rules are applied to every seat simultaneously:

If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
Otherwise, the seat's state does not change.
Floor (.) never changes; seats don't move, and nobody sits on the floor.

After one round of these rules, every seat in the example layout becomes occupied:

#.##.##.##<br>
#######.##<br>
#.#.#..#..<br>
####.##.##<br>
#.##.##.##<br>
#.#####.##<br>
..#.#.....<br>
##########<br>
#.######.#<br>
#.#####.##<br>

After a second round, the seats with four or more occupied adjacent seats become empty again:

#.LL.L#.##<br>
#LLLLLL.L#<br>
L.L.L..L..<br>
#LLL.LL.L#<br>
#.LL.LL.LL<br>
#.LLLL#.##<br>
..L.L.....<br>
#LLLLLLLL#<br>
#.LLLLLL.L<br>
#.#LLLL.##<br>

This process continues for three more rounds:

#.##.L#.##<br>
#L###LL.L#<br>
L.#.#..#..<br>
#L##.##.L#<br>
#.##.LL.LL<br>
#.###L#.##<br>
..#.#.....<br>
#L######L#<br>
#.LL###L.L<br>
#.#L###.##<br>
#.#L.L#.##<br>
#LLL#LL.L#<br>
L.L.L..#..<br>
#LLL.##.L#<br>
#.LL.LL.LL<br>
#.LL#L#.##<br>
..L.L.....<br>
#L#LLLL#L#<br>
#.LLLLLL.L<br>
#.#L#L#.##<br>
#.#L.L#.##<br>
#LLL#LL.L#<br>
L.#.L..#..<br>
#L##.##.L#<br>
#.#L.LL.LL<br>
#.#L#L#.##<br>
..L.L.....<br>
#L#L##L#L#<br>
#.LLLLLL.L<br>
#.#L#L#.##<br>

At this point, something interesting happens: the chaos stabilizes and further applications of these rules cause no seats to change state! Once people stop moving around, you count 37 occupied seats.

Simulate your seating area by applying the seating rules repeatedly until no seats change state. How many seats end up occupied?