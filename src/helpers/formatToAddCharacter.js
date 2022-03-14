export const formatToAddCharacter = (
  {nombre,
  genero,
  cumpleaños,
  colorDeOjos,
  colorDePelo,
  posicion,
  archivo}
) => {
  const dataForm = {
    id: new Date(),
    name: nombre,
    species: "human",
    gender: genero === "MUJER" ? "female" : "male",
    house: "",
    dateOfBirth: cumpleaños,
    yearOfBirth: "",
    ancestry: "squib",
    eyeColour: colorDeOjos,
    hairColour: colorDePelo,
    wand: {
      wood: "",
      core: "",
      length: "",
    },
    patronus: "",
    hogwartsStudent: posicion === "ESTUDIANTE" && true,
    hogwartsStaff: posicion === "STAFF" && true,
    actor: "David Bradley",
    alive: true,
    image: archivo,
  };

  return dataForm;
};
