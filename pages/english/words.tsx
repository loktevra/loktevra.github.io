import {getEnglishLayout} from '@components/EnglishLayout';

export default function Words() {
    return (
        <div>
            <h2>Words</h2>
            <p>I found <a href='https://www.desiquintans.com/nounlist'>The Great Noun List</a> with 6801 nouns</p>
            <p>Also you can use <a href='https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000'>Oxford dictionary words list</a> with up to 5000 words</p>
            <p>Oxford also has API for dictionary <a href='https://languages.oup.com/oxford-learners-dictionaries-api/'>oxford-learners-dictionaries-api</a></p>
        </div>
    );
}

Words.getLayout = getEnglishLayout;
