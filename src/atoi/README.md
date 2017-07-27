# Convert an ascii string to a integer
> A common interview question is to write  a function that converts  a  string into an integer.  This function is commonly called  atoi because  we  are converting  an ASCII string into an integer.

> In this lesson we cover the proper way to do this in JavaScript which is `parseInt` along with implementing it using basic ascii math.



Things that can go wrong:
* A good one worth mentioning is that we are assuming that the string is a valid integer to begin with. To check against that we would check that the result of this difference should be in range `0-9`.
