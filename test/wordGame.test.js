document.addEventListener('alpine:init', () => {
    
    Alpine.data('wordGameWidget', function(){

        return {
            sentence : '',
            longWord : '',
            shortWord : '',
            sumOfLetters : '',
            solve() {
                this.longWord = longestWord(this.sentence);
                this.shortWord = shortestWord(this.sentence);
                this.sumOfLetters = wordLengths(this.sentence);


                setTimeout(() => {
                    this.sentence = '',
                    this.longWord = '',
                    this.shortWord = '',
                    this.sumOfLetters = ''
                   }, 8000);
            }
        }
    });
})

assert.equal('shipyard')// longestWord('The dog jumped over the shipyard fence'), "longestWord failing...");
