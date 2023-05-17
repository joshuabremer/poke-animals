type PokéAnimal = {
  name: string;
  hp: number;
  types: string[];
  attacks: Attack[];
};

type Attack = {
  name: string;
  damage: number;
  effect?: "flinch" | "paralyze" | "poisoned";
  effectChance?: number;
  level?: number;
};

const PokéAnimalSeries1: PokéAnimal[] = [
  {
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
  },
  {
    name: "piledbeerber",
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
  },
];
