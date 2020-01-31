let hacker1 = "Manu"
let hacker2 = "Camille"

console.log(`The drivers name is ${hacker1} `)

console.log(`The navigators name is ${hacker2} `)

if (hacker1 > hacker2) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if  (hacker1 < hacker2) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, XX characters!`)
}

let nameInCaps = "";

for (i = 0; i < hacker1.length; i++) {
  nameInCaps += hacker1[i].toUpperCase() + " ";
}

console.log(nameInCaps);

let reverseName = "";

for (i = hacker2.length-1; i >= 0; i--) {
  reverseName += hacker2[i];
}

console.log(reverseName);

if (hacker1.localeCompare(hacker2) == -1) {
  console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) == 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (hacker1.localeCompare(hacker2) == 0) {
    console.log(`What?! You both have the same name?`)
}

let lorem =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend tortor aliquam elementum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit arcu vitae nulla dignissim laoreet. Phasellus eget ullamcorper velit. In malesuada tincidunt neque et hendrerit. Nullam nibh turpis, dictum at nisl non, varius ultricies est. Mauris pretium egestas mi, sed egestas mauris. In at sollicitudin lacus, quis egestas magna. Ut sagittis ipsum vitae ante bibendum lobortis. Ut sed neque vitae ex auctor faucibus. Cras condimentum sit amet mauris in volutpat. Pellentesque bibendum condimentum nibh ut rhoncus.

Etiam vel metus ullamcorper, gravida metus sed, lacinia velit. Suspendisse id elit eleifend, vestibulum urna non, interdum diam. Phasellus convallis sit amet enim a sollicitudin. Duis vel risus ac massa posuere sagittis. Sed at orci pellentesque, malesuada risus in, ultrices lectus. Vestibulum ac aliquam metus. Sed sed mi sed metus sollicitudin elementum at sit amet libero. In vestibulum turpis et arcu facilisis sagittis. Vivamus et libero dolor. Suspendisse maximus, eros commodo lobortis commodo, erat nunc malesuada nisl, ut iaculis nisl dolor vel ligula. Integer ac purus ac felis tempor dignissim eget a nibh.

Integer luctus tellus non ultricies eleifend. Morbi finibus sit amet tellus vitae ornare. Donec ullamcorper risus lorem, non semper lacus lobortis ut. Vestibulum lobortis risus in ligula maximus feugiat. Integer vel nulla nec ipsum fermentum convallis. Quisque nec ante eu turpis sodales pharetra. Fusce sit amet hendrerit urna, at egestas arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies dapibus nulla, eu porta lacus. Aliquam tristique, ex id feugiat accumsan, urna eros faucibus augue, a lacinia odio magna id diam. Sed ullamcorper tellus arcu, sed dictum ante commodo id. Suspendisse sit amet scelerisque sapien. Integer molestie ante magna, nec commodo quam ultrices sit amet.`

let numberOfWords = 0
let et = 0

for (let i = 0; i <= lorem.length; i++) {
  if (lorem[i] === " ") {
    numberOfWords++;
    } 

  if (lorem[i] === "." && lorem[i+1] !== " ") {
    numberOfWords++
  }

  if (lorem.substring(i, i+4) === " et " ) {
  et++;
  }
}

console.log(numberOfWords);
console.log(et)
