let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "planet", "trio", "intercom"];
let ext = [".net", ".io", ".com"];

function domNameGenerator(arr1, arr2, arr3, arr4) {
  let domName = "";
  for (pronoun of arr1) {
    for (adj of arr2) {
      for (noun of arr3) {
        for (ext of arr4) {
          if (noun.endsWith(ext.substring(1, ext.length))) {
            domName =
              pronoun +
              adj +
              noun.substring(0, noun.length - (ext.length - 1)) +
              ext;
            console.log(domName);
          } else {
            domName = pronoun + adj + noun + ext;
            console.log(domName);
          }
        }
      }
    }
  }
}
domNameGenerator(pronoun, adj, noun, ext);
