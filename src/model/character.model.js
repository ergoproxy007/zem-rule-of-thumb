/**
 * Logic model behavior for character component
 * @author Daniel Torres <torresruizdaniel23@gmail.com>
 */
class CharacterModel {
    constructor(name, description, category, picture, lastUpdated, votes) {
        this.name = name
        this.description = description;
        this.category = category;
        this.picture = picture;
        this.lastUpdated = lastUpdated;
        this.votes = votes;
    }

    build() {
        return { name: this.name };
    }
}

export { CharacterModel };