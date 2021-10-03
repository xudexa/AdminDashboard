export const UpdateStateObject = (object, keyToUpdate, newValue) => {

  let updatedObject = {};
  // Iterate over the object
  Object.entries(object).forEach(([key, value]) => {
    // Update the chosen key
    if (key === keyToUpdate) Object.assign(updatedObject, { [key]: newValue });
    // If the iterated key doesn't match the given key return the current value
    else if (key !== keyToUpdate) Object.assign(updatedObject, { [key]: value });
  });

  return updatedObject;
};

export default UpdateStateObject;