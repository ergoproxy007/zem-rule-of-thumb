/**
 * Logic model for character
 * @author Daniel Torres <torresruizdaniel23@gmail.com>
 * @param name: character name
 * @param description: small description of the character
 * @param category: character category for news
 * @param pictureOne: character picture for mobile or descktop
 * @param pictureTwo: character picture for mobile or descktop
 * @param lastUpdated: latest news update
 * @param votes: positives or negatives votes
 * @param id: id for unique key
 */
class CharacterModel {
    constructor(name, description, category, pictureOne, pictureTwo, votes, lastUpdated, id) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.pictureOne = pictureOne;
        this.pictureTwo = pictureTwo;
        this.votes = votes;
        this.lastUpdated = lastUpdated;
        this.id = id;
    }

    build() {
        return { name: this.name, description: this.description,
                 pictureOne: this.pictureOne, pictureTwo: this.pictureTwo,
                 votes: this.votes, lastUpdated: this.lastUpdated, id: this.id };
    }
}

export { CharacterModel };