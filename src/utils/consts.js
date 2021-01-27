import Man from "../assets/icons/man.svg";
import Woman from "../assets/icons/woman.svg";
import UnknownGender from "../assets/icons/unknownGender.svg";
import UnknownStatus from "../assets/icons/unknownStatus.svg";
import Alive from "../assets/icons/alive.svg";
import Dead from "../assets/icons/dead.svg";
import Genderless from "../assets/icons/genderless.svg";

const statusOptions = [
  { value: "", label: "All" },
  { value: "Alive", label: "Alive" },
  { value: "Dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

const genderOptions = [
  { value: "", label: "All" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "unknown", label: "Unknown" },
  { value: "Genderless", label: "Genderless" },
];

const genderTags = {
  unknown: { image: UnknownGender, text: "Unknown" },
  Male: { image: Man, text: "Male" },
  Female: { image: Woman, text: "Female" },
  Genderless: { image: Genderless, text: "Genderless" },
};
const statusTags = {
  unknown: { image: UnknownStatus, text: "Unknown" },
  Dead: { image: Dead, text: "Dead" },
  Alive: { image: Alive, text: "Alive" },
};

export { statusOptions, genderOptions, genderTags, statusTags };
