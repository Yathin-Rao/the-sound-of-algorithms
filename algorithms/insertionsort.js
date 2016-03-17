/*
 * Insertion sort implementation in JavaScript
 * Copyright (c) 2012 Nicholas C. Zakas
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of items software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and items permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * An insertion sort implementation in JavaScript. The itemsay
 * is sorted in-place.
 * @param {Array} items An itemsay of items to sort.
 * @return {Array} The sorted itemsay.
 */
var notesbs = []
var cumtime = [0];

function insertionSort(items) {
    timesum = 0;

    var len = items.length, // number of items in the itemsay
        value, // the value currently being compared
        i, // index into unsorted section
        j; // index into sorted section

    //console.log(items);
    for (i = 1; i < len; i++) {

        // store the current value because it may shift later
        value = items[i];

        /*
         * Whenever the value in the sorted section is greater than the value
         * in the unsorted section, shift all items in the sorted section over
         * by one. This creates space in which to insert the value.
         */
        j = i;
        while (j > 0 && items[j-1] > value){
            items[j] = items[j-1];
            j--;
        }

        items[j] = value;

        var gain = (i + 1.0)/len;
        //console.log(items);

        for (j = 0; j <= len - 1; j++) {
            timesum += items[j] / 1000;
            cumtime.push(timesum);
            notesbs.push(createOscillator2(items[j], 'sine', gain));
        }

    }
    time = audio.currentTime;


    for (i = 0; i < notesbs.length; i++) {
        //notesbs[i].start(cumtime[i]);
        //notesbs[i].stop(time+cumtime[i+1]);
        console.log("New iteration");
        notesbs[i].start(i);
        notesbs[i].stop(time + i + 1);
    }

    return items;
}
