// class Person {
//   age;
//   name;
//   constructor(age, name) {
//     this.age = age;
//   }
// }
// const person = new Person(1, "32");
// person.age

const observer = new IntersectionObserver((entries, observer) => {
  // 처음에 실행이 되고, 타겟들이 보이면 다시 호출된다.
  entries.forEach((entrie) => {
    if (entrie.isIntersecting) {
      entrie.target.className = "box show";
    } else {
      entrie.target.className = "box";
    }
  });
});

const targets = document.getElementsByClassName("box");
[...targets].forEach((target) => {
  observer.observe(target);
});
//observer.observe(target); // 이 타겟을 감시한다.
