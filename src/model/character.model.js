/**
 * Logic model behavior for character component
 * @author Daniel Torres <torresruizdaniel23@gmail.com>
 */
class CharacterModel {
    constructor(name, description, category, pictureOne, pictureTwo, votes, lastUpdated) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.pictureOne = pictureOne;
        this.pictureTwo = pictureTwo;
        this.votes = votes;
        this.lastUpdated = lastUpdated;
    }

    build() {
        return { name: this.name, description: this.description, pictureOne: this.pictureOne };
    }
}

export { CharacterModel };