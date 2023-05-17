type PokéAnimal = {
  name: string;
  hp: number;
  types: string[];
  attacks: Attack[];
  evolvesFrom?: PokéAnimal;
};

type Attack = {
  name: string;
  damage: number;
  effect?: "flinch" | "paralyze" | "poisoned" | "pebblyxzed";
  effectChance?: number;
  level?: number;
};

const Berriber: PokéAnimal = {
  name: "berriber",
  hp: 109,
  types: ["bug"],
  attacks: [
    {
      name: "digdozer",
      damage: 17,
    },
    {
      name: "snake poison",
      damage: 41,
    },
    {
      name: "body frontflip",
      damage: 23,
      effect: "paralyze",
      effectChance: 1.0,
    },
  ],
};

const Piledbeerber: PokéAnimal = {
  name: "piledbeerber",
  evolvesFrom: Berriber,
  hp: 90,
  types: ["bug", "slime"],
  attacks: [
    {
      name: "flinchstorm",
      damage: 45,
      effect: "flinch",
      level: 20,
    },
    {
      name: "poison ink jab",
      damage: 3,
      effect: "poisoned",
    },
    {
      name: "toxic bee stinger",
      damage: 12,
    },
  ],
};

const Pebilel: PokéAnimal = {
  name: "pebilel",
  hp: 10009,
  types: ["rock", "psychic"],
  attacks: [
    {
      name: "psychic bomb",
      damage: 28,
    },
    {
      name: "pebble outline",
      damage: 13,
      effect: "pebblyxzed",
      effectChance: 55.84,
    },
  ],
};
