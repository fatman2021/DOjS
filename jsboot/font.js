/*
MIT License

Copyright (c) 2019 Andre Seidelt <superilu@yahoo.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

//! constants for text direction and alignment
FONT = {
	Direction: {
		DEFAULT: 0,
		RIGHT: 0,       /* normal */
		DOWN: 1,       /* downward */
		LEFT: 2,       /* upside down, right to left */
		UP: 3       /* upward */
	},
	Align: {
		DEFAULT: 0,
		LEFT: 0,       /* X only */
		TOP: 0,       /* Y only */
		CENTER: 1,       /* X, Y   */
		RIGHT: 2,       /* X only */
		BOTTOM: 2,       /* Y only */
		BASELINE: 3       /* Y only */
	}
};