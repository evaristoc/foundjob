$(document).ready(function() {
    var dist = 80;
    var prev_set = new Array($("p").length);
    $("p").each(function(index) {
        prev_set[index] = $(this).html()
    });
    // jQuery methods go here...

    //https://www.w3schools.com/jsref/jsref_search.asp
    //https://stackoverflow.com/questions/3410464/how-to-find-indices-of-all-occurrences-of-one-string-in-another-in-javascript
    //http://www.dummies.com/web-design-development/javascript/how-to-change-html-elements-with-jquery/
    //https://stackoverflow.com/questions/42368922/jquery-replace-with-and-restore-old-value-when-clicked-again-same-class
    $('input').change(function() {
        console.log('hello jQuery');
        var w = $("input[type='radio']:checked").val();
        console.log('this is input ', w);
        $("p").each(function(index) {
            $(this).html(prev_set[index]);
        });
        $("p").each(function(index) {
            //console.log(index);
            if ($(this).text().toLowerCase().search(w.toLowerCase()) != -1) {
                let start;
                let end;
                let txt = $(this).text()
                let word_pos = txt.search(w);
                if (word_pos < dist) {
                    start = 0;
                } else {
                    start = word_pos - dist;
                };
                if ((txt.length - (word_pos + w.length)) < dist) {
                    console.log(txt.length);
                    end = txt.length;
                } else {
                    end = dist + word_pos + w.length;
                }

                console.log(index, start, end);
                let txtmodif = [txt.slice(0, start), '<mark>', txt.slice(start, word_pos), '<strong>', txt.slice(word_pos, word_pos + w.length), '</strong>', txt.slice(word_pos + w.length, end), '</mark>', txt.slice(end)].join('')
                    //$(this).text(txtmodif)
                $(this).html(txtmodif)
            }

        });
    });
});