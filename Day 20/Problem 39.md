<h1 align="center">--- Day 20: Jurassic Jigsaw ---</h1>

## Problem 39 

The high-speed train leaves the forest and quickly carries you south. You can even see a desert in the distance! Since you have some spare time, you might as well see if there was anything interesting in the image the Mythical Information Bureau satellite captured.

After decoding the satellite messages, you discover that the data actually contains many small images created by the satellite's camera array. The camera array consists of many cameras; rather than produce a single square image, they produce many smaller square image tiles that need to be reassembled back into a single image.

Each camera in the camera array returns a single monochrome image tile with a random unique ID number. The tiles (your puzzle input) arrived in a random order.

Worse yet, the camera array appears to be malfunctioning: each image tile has been rotated and flipped to a random orientation. Your first task is to reassemble the original image by orienting the tiles so they fit together.

To show how the tiles should be reassembled, each tile's image data includes a border that should line up exactly with its adjacent tiles. All tiles have this border, and the border lines up exactly when the tiles are both oriented correctly. Tiles at the edge of the image also have this border, but the outermost edges won't line up with any other tiles.

For example, suppose you have the following nine tiles:

Tile 2311:<br>
..##.#..#.<br>
##..#.....<br>
#...##..#.<br>
####.#...#<br>
##.##.###.<br>
##...#.###<br>
.#.#.#..##<br>
..#....#..<br>
###...#.#.<br>
..###..###<br>

Tile 1951:<br>
#.##...##.<br>
#.####...#<br>
.....#..##<br>
#...######<br>
.##.#....#<br>
.###.#####<br>
###.##.##.<br>
.###....#.<br>
..#.#..#.#<br>
#...##.#..<br>

Tile 1171:<br>
####...##.<br>
#..##.#..#<br>
##.#..#.#.<br>
.###.####.<br>
..###.####<br>
.##....##.<br>
.#...####.<br>
#.##.####.<br>
####..#...<br>
.....##...<br>

Tile 1427:<br>
###.##.#..<br>
.#..#.##..<br>
.#.##.#..#<br>
#.#.#.##.#<br>
....#...##<br>
...##..##.<br>
...#.#####<br>
.#.####.#.<br>
..#..###.#<br>
..##.#..#.<br>

Tile 1489:<br>
##.#.#....<br>
..##...#..<br>
.##..##...<br>
..#...#...<br>
#####...#.<br>
#..#.#.#.#<br>
...#.#.#..<br>
##.#...##.<br>
..##.##.##<br>
###.##.#..<br>

Tile 2473:<br>
#....####.<br>
#..#.##...<br>
#.##..#...<br>
######.#.#<br>
.#...#.#.#<br>
.#########<br>
.###.#..#.<br>
########.#<br>
##...##.#.<br>
..###.#.#.<br>

Tile 2971:<br>
..#.#....#<br>
#...###...<br>
#.#.###...<br>
##.##..#..<br>
.#####..##<br>
.#..####.#<br>
#..#.#..#.<br>
..####.###<br>
..#.#.###.<br>
...#.#.#.#<br>

Tile 2729:<br>
...#.#.#.#<br>
####.#....<br>
..#.#.....<br>
....#..#.#<br>
.##..##.#.<br>
.#.####...<br>
####.#.#..<br>
##.####...<br>
##..#.##..<br>
#.##...##.<br>

Tile 3079:<br>
#.#.#####.<br>
.#..######<br>
..#.......<br>
######....<br>
####.#..#.<br>
.#...#.##.<br>
#.#####.##<br>
..#.###...<br>
..#.......<br>
..#.###...<br>

By rotating, flipping, and rearranging them, you can find a square arrangement that causes all adjacent borders to line up:

<p font-family=monospace>
#...##.#.. ..###..### #.#.#####.<br>
..#.#..#.# ###...#.#. .#..######<br>
.###....#. ..#....#.. ..#.......<br>
###.##.##. .#.#.#..## ######....<br>
.###.##### ##...#.### ####.#..#.<br>
.##.#....# ##.##.###. .#...#.##.<br>
#...###### ####.#...# #.#####.##<br>
.....#..## #...##..#. ..#.###...<br>
#.####...# ##..#..... ..#.......<br>
#.##...##. ..##.#..#. ..#.###...<br>

#.##...##. ..##.#..#. ..#.###...<br>
##..#.##.. ..#..###.# ##.##....#<br>
##.####... .#.####.#. ..#.###..#<br>
####.#.#.. ...#.##### ###.#..###<br>
.#.####... ...##..##. .######.##<br>
.##..##.#. ....#...## #.#.#.#...<br>
....#..#.# #.#.#.##.# #.###.###.<br>
..#.#..... .#.##.#..# #.###.##..<br>
####.#.... .#..#.##.. .######...<br>
...#.#.#.# ###.##.#.. .##...####<br>

...#.#.#.# ###.##.#.. .##...####<br>
..#.#.###. ..##.##.## #..#.##..#<br>
..####.### ##.#...##. .#.#..#.##<br>
#..#.#..#. ...#.#.#.. .####.###.<br>
.#..####.# #..#.#.#.# ####.###..<br>
.#####..## #####...#. .##....##.<br>
##.##..#.. ..#...#... .####...#.<br>
#.#.###... .##..##... .####.##.#<br>
#...###... ..##...#.. ...#..####<br>
..#.#....# ##.#.#.... ...##.....<br>
</p>
For reference, the IDs of the above tiles are:

1951    2311    3079<br>
2729    1427    2473<br>
2971    1489    1171<br>

To check that you've assembled the image correctly, multiply the IDs of the four corner tiles together. If you do this with the assembled tiles from the example above, you get 1951 * 3079 * 2971 * 1171 = 20899048083289.

Assemble the tiles into an image. What do you get if you multiply together the IDs of the four corner tiles?