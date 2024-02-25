export function generateCountryName(country: string) {
  let name = country;
  switch (country.toUpperCase()) {
    case "MX":
      name = "México";
      break;
    case "GT":
      name = "Guatemala";
      break;
    case "ES":
      name = "España";
      break;
    case "CO":
      name = "Colombia";
      break;
    case "AR":
      name = "Argentina";
      break;
    default:
      name = country;
      break;
  }
  return name;
}
