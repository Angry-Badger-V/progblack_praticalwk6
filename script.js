let verbs = ["prevent","point","drag","blink","invite","heaps","lap","frighten","file","call","reproduce","joke","afford","decorate","sigh","walk","disappear","increases","witch","glue","haunt"];
let adjectives = ["feigned","rapid","noisy","subdued","husky","oval","drunk","closed","piquant"];
let nouns = ["stew","uncle","street","library","word","morning","fork","grass","servant"];
let adverbs = ["joyously","queasily","cleverly","elsewhere","obediently","essentially","immediately","sympathetically","wetly"];

function generate_sentence() {
    let sentence = "The " + adjectives[(Math.floor(Math.random() * adjectives.length))] + " " + nouns[(Math.floor(Math.random() * nouns.length))] + " " + verbs[(Math.floor(Math.random() * verbs.length))] + " " + adverbs[(Math.floor(Math.random() * adverbs.length))];
    document.write(sentence);
}
generate_sentence();