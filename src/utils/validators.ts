export function isRequired(value: string) {
  return value.trim().length > 0;
}

export function isValidEmail(value: string) {
  return value.includes("@") && value.includes(".");
}
