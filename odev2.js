let posts = [
  { id: "1633171026249", title: "Kodluyoruz", content: "Selamlar Kodluyoruz" },
  { id: "1633171026210", title: "Patika.dev", content: "Selamlar Patika" },
];

let userData = {
  title: process.argv[2],
  content: process.argv[3],
};
let addPost = () => {
  posts.push({ id: new Date().getTime(), ...userData });
};

async function getPosts() {
  await addPost();
  console.log(posts);
}
getPosts();
