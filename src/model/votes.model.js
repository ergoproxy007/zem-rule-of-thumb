/**
 * Logic model for votes
 * @author Daniel Torres <torresruizdaniel23@gmail.com>
 * @param positive: positive votes in the poll
 * @param negative: negative votes in the poll
 */
 class VotesModel {
    constructor(positive, negative) {
        this.positive = positive;
        this.negative = negative;
    }

    build() {
        return { positive: this.positive, negative: this.negative };
    }
}

export { VotesModel };