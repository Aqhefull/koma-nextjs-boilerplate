// Select and calculate all you want ..
import * as R from "ramda";

export const getCharacterById = (characters, id) => R.prop(id, characters);