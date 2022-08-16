/**
 * Logic model for votes
 * @author Daniel Torres <torresruizdaniel23@gmail.com>
 * @param positive: positive votes in the poll
 * @param negative: negative votes in the poll
 * @param id: id for unique key
 */
 class VotesModel {
    constructor(positive, negative, id) {
        this.positive = positive;
        this.negative = negative;
        this.id = id;
    }

    build() {
        return { positive: this.positive, negative: this.negative, id: this.id };
    }
}

export { VotesModel };