const farmAnimals = 'cow horse sheep pig chicken'
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')

// expect(Bessie).to.exist
//     expect(Bessie).to.equal("cow")
//     expect(Dolly).to.exist
//     expect(Dolly).to.equal("sheep")
//     expect(Babe).to.exist
//     expect(Babe).to.equal("pig")
//     expect(Little).to.exist
//     expect(Little).to.equal("chicken")


const [Bessie, ,Dolly, Babe, Little] = farmAnimals.split(' ')

// expect(black_and_white).to.exist
//     expect(black_and_white).to.equal("cow")
//     expect(black).to.exist
//     expect(black).to.equal("sheep")
//     expect(pink).to.exist
//     expect(pink).to.equal("pig")

const [black_and_white, , black, pink, ] = farmAnimals.split(' ')

// expect(red).to.exist
//     expect(red).to.equal("red")
//     expect(orange).to.exist
//     expect(orange).to.equal("orange")
//     expect(yellow).to.exist
//     expect(yellow).to.equal("yellow")
//     expect(green).to.exist
//     expect(green).to.equal("green")
//     expect(blue).to.exist
//     expect(blue).to.equal("blue")
//     expect(indigo).to.exist
//     expect(indigo).to.equal("indigo")
//     expect(violet).to.exist
//     expect(violet).to.equal("violet")

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const [red, orange, yellow, green, blue, indigo, violet] = colors

// expect(r).to.exist
//     expect(r).to.equal("red")
//     expect(o).to.exist
//     expect(o).to.equal("orange")
//     expect(y).to.exist
//     expect(y).to.equal("yellow")
//     expect(g).to.exist
//     expect(g).to.equal("green")
//     expect(b).to.exist
//     expect(b).to.equal("blue")
//     expect(v).to.exist
//     expect(v).to.equal("violet")
const [ r, o, y, g, b, , v] = colors
const [ , , , , , indg, ] = colors


const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const {name, color, song, job, partner} = muppet

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

const {song_2, song_4} = k_muppet.k_album.the_muppet_movie
const {k_color, k_job, k_partner} = k_muppet

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them Bessie, Dolly, Babe, and Little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of black_and_white, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
