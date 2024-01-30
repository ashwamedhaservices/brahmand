export const createSlug = (str) => {
  return str.replace('-', '').toLowerCase().split(' ').filter(a => !!a).join('-')
}

export const createFullName = (firstName, middleName, lastName) => {
  // Trim leading and trailing spaces from each name
  const trimmedFirstName = (firstName || '').trim();
  const trimmedMiddleName = (middleName || '').trim();
  const trimmedLastName = (lastName || '').trim();

  // Check if any name is empty or undefined
  const isFirstNameEmpty = !trimmedFirstName;
  const isMiddleNameEmpty = !trimmedMiddleName;
  const isLastNameEmpty = !trimmedLastName;

  // Construct the full name based on availability of first, middle, and last names
  let fullName = '';

  if (!isFirstNameEmpty) {
    fullName += trimmedFirstName;
  }

  if (!isMiddleNameEmpty) {
    if (fullName.length > 0) {
      fullName += ' ' + trimmedMiddleName;
    } else {
      fullName += trimmedMiddleName;
    }
  }

  if (!isLastNameEmpty) {
    if (fullName.length > 0) {
      fullName += ' ' + trimmedLastName;
    } else {
      fullName += trimmedLastName;
    }
  }

  return fullName;
}

String.prototype.toPascalCase = function() {
  return this
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
};