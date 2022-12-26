import {getEnglishLayout} from '@components/EnglishLayout';

export default function Noun() {
    return (
        <div>
            <h2>Noun</h2>
            <p>A noun is a word that refers to a person, place, or thing. The category of “things” may sound super vague, but in this case it means inanimate objects, abstract concepts, and activities. Phrases and other parts of speech can also behave like nouns and can be the subject in a sentence, as in Jogging is a fun exercise. Here, the verb jogging acts like a noun and is the subject of the sentence.</p>
            <section>
                <h3>Common nouns</h3>
                <p>Common nouns are more general. A common noun refers to a class of person, place, thing, or concept, but not to someone or something specific.</p>
            </section>
            <section>
                <h3>Proper nouns</h3>
                <p>Proper nouns are the names of specific people, places, things, or concepts. They are always capitalized to distinguish them from common nouns.</p>
            </section>
            <section>
                <h3>Countable nouns</h3>
                <p>Countable nouns (also called count nouns) refer to things that can be counted. They can be preceded by an indefinite article or a number, and they can be pluralized. Most nouns are countable (e.g., “fact(s)” or “misnomer(s)“).</p>
            </section>
            <section>
                <h3>Uncountable nouns</h3>
                <p>Uncountable nouns (also called noncount nouns or mass nouns) refer to things that can’t be counted. They should never be preceded by an indefinite article or a number, and they cannot be pluralized (e.g., “information” or “advice“).</p>
            </section>
            <section>
                <h3>Concrete nouns</h3>
                <p>Concrete nouns refer to physical objects, places, or individuals: things or people that can be observed with the senses, such as “apple,” “hill,” “zebra,” and “Dorothy.”</p>
            </section>
            <section>
                <h3>Abstract nouns</h3>
                <p>Abstract nouns refer to concepts, ideas, feelings, and processes that can’t be physically located, such as “grammar,” “justice,” “sadness,” and “relaxation.”</p>
            </section>
            <section>
                <h3>Collective nouns</h3>
                <p>A collective noun is a word used to refer to a group of people or things, such as “team,” “band,” or “herd.” A collective noun can also be a proper noun—for example, the name of a specific company or band.</p>
            </section>
            <section>
                <h3>Possessive nouns</h3>
                <p>A possessive noun is a noun that’s followed by an apostrophe (’) and the letter “s” to indicate possession (e.g., “my father’s house”).
To indicate possession with a plural noun that ends in “s,” you just add the apostrophe after the “s,” and don’t add an extra “s” (e.g., “my parents’ house”).</p>
            </section>
            <section>
                <h3>Gerunds</h3>
                <p>A gerund is a noun that is identical to the present participle (the “-ing” form) of a verb. These are typically nouns that describe the same activity as the verb they were formed from, such as “driving,” formed from the present participle of “drive.”</p>
            </section>
            <section>
                <h3>Attributive nouns</h3>
                <p>Attributive nouns are nouns that are used like adjectives, to modify another noun. For example, “company” is an attributive noun in the phrase “company policy.”
Even though attributive nouns work similarly to adjectives, they’re still classed as nouns. This is because they don’t fulfill all the grammatical requirements of adjectives. For example, they have to appear before the noun—it wouldn’t make sense to say “a policy that is company.”</p>
            </section>
            <section>
                <h3>Appositive nouns</h3>
                <p>An appositive noun (or appositive noun phrase) is a noun that comes after another noun to provide additional information about it.
If the appositive provides essential information (i.e., it wouldn’t be clear who or what you are referring to without it), it’s written without any extra punctuation. If it provides extra information that is not essential, it’s surrounded by commas.</p>
            </section>
            <section>
                <h3>Generic nouns</h3>
                <p>A generic noun is a noun that is used to refer to a whole class of things (or people, places, etc.). They can be plural or singular, and they may appear with a definite article, an indefinite article, or no article.
The same noun may be used generically in some contexts and not others. For example, it would be equally possible to use the nouns in the sentences below in a non-generic way (e.g., “the people I know best are my brothers”; “my father operated a printing press”).</p>
            </section>
        </div>
    );
}

Noun.getLayout = getEnglishLayout;
